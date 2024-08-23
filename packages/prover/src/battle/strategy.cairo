const strength_health_bonus: u16 = 50;
const agility_initiative_bonus: u16 = 10;
const intelligence_attack_bonus: u16 = 5;

#[derive(Drop)]
pub struct Strategy {
    strength: u16,
    agility: u16,
    intelligence: u16
}

#[derive(Drop)]
pub struct StrategyBonus {
    pub healthBonus: u16,
    pub attackBonus: u16,
    pub initiativeBonus: u16
}

pub trait StrategyTrait {
    fn decodeFromArray(arr: @Array<felt252>) -> Strategy;
    fn encodeToArray(self: @Strategy) -> Array<u16>;
    fn getBonus(self: @Strategy) -> StrategyBonus;
}


pub impl StrategyImpl of StrategyTrait {
    fn decodeFromArray(arr: @Array<felt252>) -> Strategy {
        if (arr.len() < 3) {
            panic!("invalid stragety input arr");
        }

        return Strategy {
            strength: (*arr.at(0)).try_into().unwrap(),
            agility: (*arr.at(1)).try_into().unwrap(),
            intelligence: (*arr.at(2)).try_into().unwrap()
        };
    }

    fn encodeToArray(self: @Strategy) -> Array<u16> {
        let mut arr: Array<u16> = ArrayTrait::new();
        arr.append(*self.strength);
        arr.append(*self.agility);
        arr.append(*self.intelligence);
        arr
    }

    fn getBonus(self: @Strategy) -> StrategyBonus {
        return StrategyBonus {
            healthBonus: *self.strength * strength_health_bonus,
            attackBonus: *self.agility.into() * agility_initiative_bonus,
            initiativeBonus: *self.intelligence.into() * intelligence_attack_bonus
        };
    }
}
