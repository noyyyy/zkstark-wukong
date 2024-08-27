use prover::battle::entity::{Side};

#[derive(Drop, Copy, Debug, PartialEq)]
pub struct Result {
    winner: Side,
}


pub trait ResultTrait {
    fn new() -> Result;
    fn decodeFromArray(array: @Array<felt252>) -> Result;
    fn setWinner(ref result: Result, winner: Side);
}


impl ResultImpl of ResultTrait {
    fn new() -> Result {
        return Result { winner: Side::Invalid };
    }
    fn decodeFromArray(array: @Array<felt252>) -> Result {
        let v = *array.at(0);

        let winner = match v {
            0 => Side::Invalid,
            1 => Side::Challenger,
            2 => Side::Defender,
            _ => Side::Invalid,
        };

        return Result { winner };
    }

    fn setWinner(ref result: Result, winner: Side) {
        result.winner = winner;
    }
}
