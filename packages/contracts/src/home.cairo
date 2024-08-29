use game::models::{UserProfile, Strategy, GlobalState, CreatedStrategy, SetProfile};

// let (mut position, mut moves) = get!(world, player, (Position, Moves));



#[dojo::interface]
trait IHome {
    // fn initialize();
    fn setUserProfile(name: felt252);
    fn createStrategy(Strength: u8, Agility: u8, Intelligence: u8);
    fn battleField(challengerID: u8, defenderID: u8, result: bool);
}

use starknet::{
    ContractAddress, Zeroable, contract_address_try_from_felt252, get_caller_address, get_block_info
};


#[dojo::contract]
mod home {
    use core::traits::TryInto;
    use core::option::OptionTrait;
    use core::traits::Into;
    use starknet::{
        ContractAddress, get_caller_address, get_block_hash_syscall, get_block_info, get_tx_info,
        get_block_timestamp
    };

    use dojo::base;
    use core::poseidon::{PoseidonTrait, poseidon_hash_span};
    use core::hash::{HashStateTrait, HashStateExTrait};
    use super::IHome;
    use game::models::{UserProfile, Strategy, GlobalState, CreatedStrategy, SetProfile};


    // impl: implement functions specified in trait
    #[abi(embed_v0)]
    impl HomeImpl of IHome<ContractState> {
        // intialize all args
        // TODO: set as real args
        fn setUserProfile(world: IWorldDispatcher, name: felt252){
            let Player = get_caller_address();
            let mut counter = get!(world, 0, (GlobalState));
            if (counter.user_index == 0){
                counter.user_index = 1;
            }
            else{
                counter.user_index += 1;
            }
            let mut profile = get!(world, counter.user_index, (UserProfile));
            profile.player = Player;
            profile.name = name;
            set!(world, (profile));
            set!(world, (counter));
            emit!(world, (SetProfile { player: Player, id: counter.user_index, profile: profile }));
        }
        // fn initialize(world: IWorldDispatcher) {}
        fn createStrategy(world: IWorldDispatcher, Strength: u8, Agility: u8, Intelligence: u8) {
            let Player = get_caller_address();
            let mut counter = get!(world, 0, (GlobalState));
            if (counter.strategy_index == 0){
                counter.strategy_index = 1;
            }
            else{
                counter.strategy_index += 1;
            }
            let mut attributes = get!(world, counter.strategy_index, (Strategy));
            let uid = counter.strategy_index;
            let attribute = Strategy{
                id : counter.strategy_index,
                player : Player,
                ranking: uid,
                strength : Strength,
                agility : Agility,
                intelligence : Intelligence,
            };
            set!(world, (attribute));
            set!(world, (counter));
            // Emit the CreateStrategy event:
            emit!(world, (CreatedStrategy { player: Player, id: counter.strategy_index, strategies: attribute }));
        }
        
        
        fn battleField(world: IWorldDispatcher, challengerID: u8, defenderID: u8, result: bool) {
            let mut counter = get!(world, 0, (GlobalState));
            let mut challenger_strategy = get!(world, challengerID, (Strategy));
            let mut defender_strategy = get!(world, defenderID, (Strategy));
            let strategyOwner = challenger_strategy.player;
            let currentUser = get_caller_address();
            if(strategyOwner == currentUser){panic!("Owner of Strategy does not match currentUser address.");};
            if result {
                let tmp = challenger_strategy.ranking;
                challenger_strategy.ranking = defender_strategy.ranking;
                defender_strategy.ranking = tmp;
                if (counter.game_index == 0) {
                    counter.game_index = 1;
                } else {
                    counter.game_index += 1;
                }
            } else {
                let tmp = defender_strategy.ranking;
                defender_strategy.ranking = challenger_strategy.ranking;
                challenger_strategy.ranking = tmp;
                if (counter.game_index == 0) {
                    counter.game_index = 1;
                } else {
                    counter.game_index += 1;
                }
            }
            set!(world, (challenger_strategy));
            set!(world, (defender_strategy));
            set!(world, (counter));
        }

        // fn challengeBattle(world: IWorldDispatcher, gameID: u8, result: bool, zkprove: u8) {
        //     let challenger = get_caller_address();
        //     let counter = get!(world, 0, (GlobalState));
        //     let game = counter.game_index;
        //     let challenger_strategy = get!(world, gameID, (Strategy));
        // }
    }
}

#[cfg(test)]
mod tests {
    use starknet::class_hash::Felt252TryIntoClassHash;

    // import world dispatcher
    use dojo::world::{IWorldDispatcher, IWorldDispatcherTrait};


    use debug::PrintTrait;

    #[test]
    #[available_gas(10000000000)]
    fn test_spwan() { // caller
        let caller = starknet::contract_address_const::<0x0>();
    }
}
