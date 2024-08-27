use prover::battle::strategy::{Strategy};
use prover::battle::entity::{Entity, EntityTrait, Side};
use prover::battle::result::{Result, ResultTrait};

#[derive(Drop, Copy)]
pub struct Simulator {
    challenger: Entity,
    defender: Entity,
    result: Result,
}


pub trait SimulatorTrait {
    fn initialize(c: @Strategy, d: @Strategy) -> Simulator;
    fn startBattle(ref self: Simulator);
    fn getResult(self: @Simulator) -> Result;
}

pub impl SimulatorImpl of SimulatorTrait {
    fn initialize(c: @Strategy, d: @Strategy) -> Simulator {
        let challenger = EntityTrait::new(c, Side::Challenger);
        let defender = EntityTrait::new(d, Side::Defender);

        return Simulator { challenger, defender, result: ResultTrait::new() };
    }

    fn startBattle(ref self: Simulator) {
        let mut idx: u8 = 1;
        let mut winner: Side = Side::Invalid;
        loop {
            self.defender.attack(ref self.challenger);
            self.challenger.attack(ref self.defender);

            if (self.challenger.isDead()) {
                winner = Side::Defender;
                break;
            }
            if (self.defender.isDead()) {
                winner = Side::Challenger;
                break;
            }

            if (idx >= 20) {
                break;
            }
            idx += 1;
        };

        ResultTrait::setWinner(ref self.result, winner);
    }

    fn getResult(self: @Simulator) -> Result {
        return *self.result;
    }
}
