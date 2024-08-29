use starknet::ContractAddress;

// #[derive(Model, Copy, Drop, Serde)]
// struct Example {
//     #[key]
//     index: u32,
//     value: u32
// }


#[derive(Model, Copy, Drop, Serde)]
struct UserProfile {
    #[key]
    id: u32,
    player: ContractAddress,
    name: felt252,
}
#[derive(Model, Copy, Drop, Serde)]
struct Strategy {
    #[key]
    id: u32,
    player: ContractAddress,
    ranking: u32,
    strength: u32,
    agility: u32,
    intelligence: u32,
}
#[derive(Model, Copy, Drop, Serde)]
struct GlobalState {
    #[key]
    id: u32,
    strategy_index : u32,
    game_index : u32,
    user_index : u32,
}

// define event that will be used later
#[derive(Copy, Drop, Serde)]
#[dojo::event]
struct SetProfile {
    #[key]
    player: ContractAddress,
    #[key]
    id: u32,
    profile: UserProfile,
}

#[derive(Copy, Drop, Serde)]
#[dojo::event]
struct CreatedStrategy {
    #[key]
    player: ContractAddress,
    #[key]
    id: u32,
    strategies: Strategy,
}

