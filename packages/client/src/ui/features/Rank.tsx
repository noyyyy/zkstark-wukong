import { useEntityQuery } from "@dojoengine/react";
import { useDojo } from "../hooks/useDojo";
import { HasValue, getComponentValueStrict } from "@dojoengine/recs";
import { useMemo } from "react";
import { shortenAddress } from "../lib/utils";
import { Account } from "starknet";
import { Button } from "../components/button";
import { useUIStore } from "../../store";
import { useStartBattle } from "../hooks/useStartBattle";

export function Rank() {
    const {
        clientComponents: { Strategy },
        account: {
            account: { address },
        },
    } = useDojo();

    const setPreparedBattle = useUIStore((state) => state.setPreparedBattle);

    const { startBattle } = useStartBattle();

    const allStrategyEntities = useEntityQuery([HasValue(Strategy, {})]);

    const strategies = useMemo(() => {
        return allStrategyEntities
            .map((entity) => getComponentValueStrict(Strategy, entity))
            .sort((a, b) => Number(a.ranking) - Number(b.ranking));
    }, [Strategy, allStrategyEntities]);

    return (
        <div className="h-1/2 overflow-y-auto flex flex-col items-center justify-start">
            <div className="text-4xl font-bold">Hall of Fame</div>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 text-left">Rank</th>
                        <th className="py-2 px-4 text-left">Player</th>{" "}
                        <th className="py-2 px-4 text-left">Strength</th>{" "}
                        <th className="py-2 px-4 text-left">Agility</th>{" "}
                        <th className="py-2 px-4 text-left">Intelligence</th>{" "}
                        <th className="py-2 px-4 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {strategies.map((strategy, index) => (
                        <tr
                            key={index}
                            className="border-b border-gray-200 last:border-b-0"
                        >
                            <td className="py-2 px-4 font-semibold">
                                {strategy.ranking}
                            </td>
                            <td className="py-2 px-4 text-gray-600">
                                {shortenAddress(strategy.player.toString())}
                            </td>{" "}
                            <td className="py-2 px-4 font-semibold">
                                {strategy.strength}
                            </td>{" "}
                            <td className="py-2 px-4 font-semibold">
                                {strategy.agility}
                            </td>{" "}
                            <td className="py-2 px-4 font-semibold">
                                {strategy.intelligence}
                            </td>{" "}
                            <td className="py-2 px-4 font-semibold">
                                <Button
                                    onClick={() => {
                                        startBattle(strategy.id);
                                    }}
                                >
                                    Battle
                                </Button>{" "}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
