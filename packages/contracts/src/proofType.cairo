// type below are copied from https://github.com/HerodotusDev/integrity

#[derive(Drop, Serde)]
struct StarkProof {
    config: StarkConfig,
    public_input: PublicInput,
    unsent_commitment: StarkUnsentCommitment,
    witness: StarkWitness,
}

#[derive(Drop, Serde)]
struct StarkUnsentCommitment {
    traces: TracesUnsentCommitment,
    composition: felt252,
    // n_oods_values elements. The i-th value is the evaluation of the i-th mask item polynomial at
    // the OODS point, where the mask item polynomial is the interpolation polynomial of the
    // corresponding column shifted by the corresponding row_offset.
    oods_values: Span<felt252>,
    fri: FriUnsentCommitment,
    proof_of_work: ProofOfWorkUnsentCommitment,
}

#[derive(Drop, Copy, Serde)]
struct TracesUnsentCommitment {
    original: felt252,
    interaction: felt252,
}


#[derive(Drop, Copy, Serde)]
struct ProofOfWorkUnsentCommitment {
    nonce: u64,
}


// Commitment values for FRI. Used to generate a commitment by "reading" these values
// from the channel.
#[derive(Drop, Copy, Serde)]
struct FriUnsentCommitment {
    // Array of size n_layers - 1 containing unsent table commitments for each inner layer.
    inner_layers: Span<felt252>,
    // Array of size 2**log_last_layer_degree_bound containing coefficients for the last layer
    // polynomial.
    last_layer_coefficients: Span<felt252>,
}


#[derive(Drop, Copy, Serde)]
struct StarkConfig {
    traces: TracesConfig,
    composition: TableCommitmentConfig,
    fri: FriConfig,
    proof_of_work: ProofOfWorkConfig,
    // Log2 of the trace domain size.
    log_trace_domain_size: felt252,
    // Number of queries to the last component, FRI.
    n_queries: felt252,
    // Log2 of the number of cosets composing the evaluation domain, where the coset size is the
    // trace length.
    log_n_cosets: felt252,
    // Number of layers that use a verifier friendly hash in each commitment.
    n_verifier_friendly_commitment_layers: felt252,
}


// Configuration for the Traces component.
#[derive(Drop, Copy, Serde)]
struct TracesConfig {
    original: TableCommitmentConfig,
    interaction: TableCommitmentConfig,
}

#[derive(Drop, Copy, PartialEq, Serde)]
struct FriConfig {
    // Log2 of the size of the input layer to FRI.
    log_input_size: felt252,
    // Number of layers in the FRI. Inner + last layer.
    n_layers: felt252,
    // Array of size n_layers - 1, each entry is a configuration of a table commitment for the
    // corresponding inner layer.
    inner_layers: Span<TableCommitmentConfig>,
    // Array of size n_layers, each entry represents the FRI step size,
    // i.e. the number of FRI-foldings between layer i and i+1.
    fri_step_sizes: Span<felt252>,
    log_last_layer_degree_bound: felt252,
}


#[derive(Drop, Copy, Serde)]
struct ProofOfWorkConfig {
    // Proof of work difficulty (number of bits required to be 0).
    n_bits: u8,
}


#[derive(Drop, PartialEq, Serde)]
struct PublicInput {
    log_n_steps: felt252,
    range_check_min: felt252,
    range_check_max: felt252,
    layout: felt252,
    dynamic_params: Array<felt252>,
    segments: Array<SegmentInfo>,
    padding_addr: felt252,
    padding_value: felt252,
    main_page: Page,
    continuous_page_headers: Array<ContinuousPageHeader>
}


#[derive(Drop, Copy, PartialEq, Serde)]
struct SegmentInfo {
    // Start address of the memory segment.
    begin_addr: felt252,
    // Stop pointer of the segment - not necessarily the end of the segment.
    stop_ptr: felt252,
}

type Page = Array<AddrValue>;

#[derive(Drop, Copy, Hash, PartialEq, Serde)]
struct AddrValue {
    address: felt252,
    value: felt252
}

#[derive(Drop, Copy, PartialEq, Serde)]
struct ContinuousPageHeader {
    // Start address.
    start_address: felt252,
    // Size of the page.
    size: felt252,
    // Hash of the page.
    hash: felt252,
    // Cumulative product of the page.
    prod: felt252,
}


#[derive(Drop, Copy, Serde)]
struct StarkWitness {
    traces_decommitment: TracesDecommitment,
    traces_witness: TracesWitness,
    composition_decommitment: TableDecommitment,
    composition_witness: TableCommitmentWitness,
    fri_witness: FriWitness,
}

// A witness for the decommitment of the FRI layers over queries.
#[derive(Drop, Copy, Serde)]
struct FriWitness {
    // An array of size n_layers - 1, containing a witness for each inner layer.
    layers: Span<FriLayerWitness>,
}


// A witness for a single FRI layer. This witness is required to verify the transition from an
// inner layer to the following layer.
#[derive(Drop, Copy, Serde)]
struct FriLayerWitness {
    // Values for the sibling leaves required for decommitment.
    leaves: Span<felt252>,
    // Table commitment witnesses for decommiting all the leaves.
    table_witness: TableCommitmentWitness,
}

#[derive(Drop, Serde)]
struct TableCommitmentWitnessWithSerde {
    vector: VectorCommitmentWitnessWithSerde,
}

// Responses for queries to the AIR commitment.
// The queries are usually generated by the next component down the line (e.g. FRI).
#[derive(Drop, Copy, Serde)]
struct TracesDecommitment {
    // Responses for queries to the original trace.
    original: TableDecommitment,
    // Responses for queries to the interaction trace.
    interaction: TableDecommitment,
}

#[derive(Drop, Copy, Serde)]
struct TracesWitness {
    original: TableCommitmentWitness,
    interaction: TableCommitmentWitness,
}


// Responses for queries to the table commitment.
// Each query corresponds to a full row of the table.
#[derive(Drop, Copy, Serde)]
struct TableDecommitment {
    // n_columns * n_queries values to decommit.
    values: Span<felt252>,
}


#[derive(Drop, Serde)]
struct VectorCommitmentWitnessWithSerde {
    n_authentications: felt252,
    authentications: Array<felt252>,
}


// Witness for a decommitment over queries.
#[derive(Drop, Copy, Serde)]
struct TableCommitmentWitness {
    vector: VectorCommitmentWitness,
}

// Witness for a decommitment over queries.
#[derive(Drop, Copy, Serde)]
struct VectorCommitmentWitness {
    // The authentication values: all the siblings of the subtree generated by the queried indices,
    // bottom layer up, left to right.
    authentications: Span<felt252>,
}


#[derive(Drop, Copy, PartialEq, Serde)]
struct TableCommitmentConfig {
    n_columns: felt252,
    vector: VectorCommitmentConfig,
}

#[derive(Drop, Copy, PartialEq, Serde)]
struct VectorCommitmentConfig {
    height: felt252,
    n_verifier_friendly_commitment_layers: felt252,
}
