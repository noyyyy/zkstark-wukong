use super::strategy::StrategyTrait;
use prover::battle::strategy::{Strategy, StrategyBonus, StrategyImpl};


const base_health: u16 = 600;
const base_attack: u16 = 50;
const base_initiative: u16 = 10;

#[derive(Drop, Copy, Debug, PartialEq)]
pub enum Side {
    Invalid,
    Defender,
    Challenger,
}

#[derive(Drop, Copy)]
pub struct Entity {
    health: u16,
    attack: u16,
    initiative: u16,
    dead: bool,
    side: Side
}

pub trait EntityTrait {
    fn new(strategy: @Strategy, side: Side) -> Entity;
    fn attack(ref self: Entity, ref attacked: Entity);
    fn isDead(self: @Entity) -> bool;
}


impl EntityImpl of EntityTrait {
    fn new(strategy: @Strategy, side: Side) -> Entity {
        let bonus: StrategyBonus = strategy.getBonus();

        return Entity {
            health: base_health + bonus.healthBonus,
            attack: base_attack + bonus.attackBonus,
            initiative: base_initiative + bonus.initiativeBonus,
            dead: false,
            side
        };
    }
    fn attack(ref self: Entity, ref attacked: Entity) {
        if (self.isDead()) {
            return;
        }
        if (attacked.health > self.attack) {
            attacked.health -= self.attack;
        } else {
            attacked.health = 0;
            attacked.dead = true;
        }
    }
    fn isDead(self: @Entity) -> bool {
        return *self.dead;
    }
}
