import { ClientComponents } from "./createClientComponents";
import { IWorld } from "./generated/typescript/contracts.gen";
import { Account, RpcProvider } from "starknet";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
    { client }: { client: IWorld },
    clientComponents: ClientComponents,
    {}: ClientComponents,
    rpcProvider: RpcProvider
) {
    const createStrategy = async (props: {
        account: Account;
        Strength: number;
        Agility: number;
        Intelligence: number;
    }) => {
        try {
            const { transaction_hash: txHash } =
                await client.home.createStrategy(props);

            // const result =
            // await client.provider.provider.waitForTransaction(txHash);
        } catch (e) {
            console.error(e);
        }
    }; //
    const battlefield = async (props: {
        account: Account;
        challengerID: number;
        defenderID: number;
        result: number;
    }) => {
        try {
            const { transaction_hash: txHash } =
                await client.home.battlefield(props);

            // const result =
            // await client.provider.provider.waitForTransaction(txHash);
        } catch (e) {
            console.error(e);
        }
    };

    return {
        createStrategy,
        battlefield,
    };
}
