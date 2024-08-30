
# zkStark: WuKong

zkStark Wukong is a strategy auto battle game. Player distribute 30 points among strength, agility, intelligence to create strategy, then use strategy to battle with other strategy.

The intent of this project is to research how to make provable game using cairo and verify on chain.

It uses [stone-prover](https://github.com/starkware-libs/stone-prover/) to generate stark proof and use [integrity](https://github.com/HerodotusDev/integrity) to verify on chain.


# Get started

Require:

1. Linux/MacOS/WSL
2. [dojo](https://book.dojoengine.org/) = 0.6.0
3. [node](https://nodejs.org/) >=18
4. [pnpm](https://pnpm.io/)

git clone recursively

```bash
git clone --recurse-submodules https://github.com/noyyyy/zkstark-wukong.git
```

Install dependencies

```bash
pnpm install
```

start local preview 

```bash
pnpm dev
```