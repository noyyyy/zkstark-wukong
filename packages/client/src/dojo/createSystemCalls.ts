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
    const spawn = async (account: Account) => {
        try {
            const { transaction_hash: txHash } = await client.home.initialize({
                account,
            });

            // const result =
            // await client.provider.provider.waitForTransaction(txHash);
        } catch (e) {
            console.error(e);
        }
    };

    return {
        spawn,
    };
}
