use starknet::ContractAddress;

// #[derive(Model, Copy, Drop, Serde)]
// struct Example {
//     #[key]
//     index: u8,
//     value: u8
// }


#[derive(Model, Copy, Drop, Serde)]
struct Strategy {
    #[key]
    id: u8,
    player: ContractAddress,
    ranking: u8,
    strength: u8,
    agility: u8,
    intelligence: u8,
}
#[derive(Model,Copy, Drop, Serde)]
struct GlobalState {
    #[key]
    id: u8,
    counter: u8,
}

// define event that will be used later
#[derive(Copy, Drop, Serde)]
#[dojo::event]
struct CreatedStrategy {
    #[key]
    player: ContractAddress,
    #[key]
    id: u8,
    strategies: Strategy,
}

