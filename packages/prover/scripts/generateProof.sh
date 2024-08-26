#!/bin/bash
set -euo pipefail
pushd $(dirname "$0")/..

scarb build

mkdir -p proof
cairo1-run ./target/dev/prover.sierra.json --args "[1 2 3 3 2 1 2]" --layout=recursive --air_public_input=proof/public_input.json --air_private_input=proof/private_input.json --trace_file=proof/trace.bin --memory_file=proof/memory.bin --proof_mode

## calculate fri steps list

# 1. read n_steps from public_input.json
n_steps=$(jq -r '.n_steps' proof/public_input.json)

# 2. caculate fri list
x=$(echo "l($n_steps)/l(2) - 6" | bc -l | awk '{print int($1)}')
array=(0 4)

while true; do
    if (( $(echo "$x > 3" | bc -l) )); then
        array+=(3)
        x=$(echo "$x - 3" | bc)
    elif (( $(echo "$x > 0" | bc -l) )); then
        array+=($x)
        x=$(echo "$x - 3" | bc)
        break
    else
        break
    fi
done

json_array=$(printf '%s\n' "${array[@]}" | jq -R '.|tonumber' | jq -s '.|map(.|floor)')

# 3. write fri steps list to cpu_air_params.json
jq --argjson arr "$json_array" '.stark.fri.fri_step_list = $arr' config/cpu_air_params.json > temp.json && mv temp.json config/cpu_air_params.json

echo "Generate fri steps list successfully"


## generate proof

start=$(date +%s.%N)

cpu_air_prover --out_file=proof/fibonacci_proof.json --private_input_file=proof/private_input.json --public_input_file=proof/public_input.json --prover_config_file=config/cpu_air_prover_config.json --parameter_file=config/cpu_air_params.json

end=$(date +%s.%N)
runtime=$(echo "$end - $start" | bc)
echo "Generate Proof Time: $runtime seconds"


## verify proof

cpu_air_verifier --in_file=proof/fibonacci_proof.json