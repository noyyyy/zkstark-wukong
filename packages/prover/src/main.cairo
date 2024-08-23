use prover::battle::simulator::{Simulator, SimulatorTrait};
use prover::battle::strategy::{Strategy, StrategyTrait};
use prover::battle::entity::{Side};
use prover::battle::result::{Result, ResultTrait};


fn main(input: Array<felt252>) -> Array<felt252> {
    let challengerSt = input.slice(0, 3);
    let defenerSt = input.slice(3, 6);

    let result = ResultTrait::decodeFromArray(@input.slice(6, 7));

    let mut simulator: Simulator = SimulatorTrait::initialize(
        @StrategyTrait::decodeFromArray(@challengerSt), @StrategyTrait::decodeFromArray(@defenerSt)
    );

    simulator.startBattle();

    // assert(result == simulator.getResult(), 'result not right');

    return array![1];
}


#[generate_trait]
pub impl ArraySliceImpl<T, impl TDrop: Drop<T>, impl TCopy: Copy<T>> of ArraySliceTrait<T> {
    fn slice(self: @Array<T>, from: usize, to: usize) -> Array<T> {
        if (from >= to) {
            panic!("invalid args");
        }
        let mut _arr: Array<T> = ArrayTrait::<T>::new();

        let mut idx = from;
        loop {
            if (idx >= to) {
                break;
            }

            _arr.append(*self.at(idx));
            idx += 1;
        };

        return _arr;
    }
}


#[cfg(test)]
mod tests {
    use super::SimulatorTrait;
    use super::main;
    use super::Simulator;

    #[test]
    fn it_works() {
        let s = array![1, 2, 3, 3, 2, 1, 2];
    }
}
