import { Has, HasValue, getComponentValueStrict } from "@dojoengine/recs";
import { useDojo } from "../hooks/useDojo";
import { useEntityQuery } from "@dojoengine/react";
import { useMemo } from "react";
import { logDebug } from "../lib/utils";
import { Button } from "../components/button";
import { useUIStore } from "../../store";

export function MyStrategy() {
    const {
        clientComponents: { Strategy },
        account: {
            account: { address },
        },
    } = useDojo();

    const selectedId = useUIStore((state) => state.preparedBattle.challenger);

    const setPreparedBattle = useUIStore((state) => state.setPreparedBattle);

    const myStrategyEntities = useEntityQuery([HasValue(Strategy, {})]);

    const strategies = useMemo(() => {
        return myStrategyEntities
            .map((entity) => getComponentValueStrict(Strategy, entity))
            .sort((a, b) => Number(a.ranking) - Number(b.ranking));
    }, [Strategy, myStrategyEntities]);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">
                My Strategy (by ranking)
            </h2>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Rank</th>
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Strength</th>
                        <th className="border border-gray-300 p-2">Agility</th>
                        <th className="border border-gray-300 p-2">
                            Intelligence
                        </th>{" "}
                        <th className="border border-gray-300 p-2">Action </th>
                    </tr>
                </thead>
                <tbody>
                    {strategies.map((strategy, index) => (
                        <tr
                            key={index}
                            className={`${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            } ${
                                strategy.id === selectedId
                                    ? "bg-yellow-100"
                                    : ""
                            }`}
                        >
                            <td className="border border-gray-300 p-2">
                                {strategy.ranking.toString()}
                            </td>
                            <td className="border border-gray-300 p-2">
                                {strategy.id.toString()}
                            </td>
                            <td className="border border-gray-300 p-2">
                                {strategy.strength}
                            </td>
                            <td className="border border-gray-300 p-2">
                                {strategy.agility}
                            </td>
                            <td className="border border-gray-300 p-2">
                                {strategy.intelligence}
                            </td>
                            <td className="border border-gray-300 p-2">
                                {strategy.id === selectedId ? (
                                    <Button
                                        onClick={() => {
                                            setPreparedBattle({
                                                c: 0,
                                            });
                                        }}
                                    >
                                        Unselect
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => {
                                            setPreparedBattle({
                                                c: strategy.id,
                                            });
                                        }}
                                    >
                                        Select
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
