use starknet::ContractAddress;

#[derive(Model, Copy, Drop, Serde)]
struct Example {
    #[key]
    index: u8,
    value: u8
}
