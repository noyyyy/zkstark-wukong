import { useDojo } from "../hooks/useDojo";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { Button } from "../components/button";
import { ShowItem, useUIStore } from "../../store";

const totalPoints = 30;

export function CreateStrategy() {
    const {
        clientComponents: { Strategy },
        systemCalls: { createStrategy },
        account: { account },
    } = useDojo();

    const show = useUIStore((state) => state.getShow(ShowItem.CreateStrategy));

    const [attributes, setAttributes] = useState({
        intelligence: 10,
        strength: 10,
        agility: 10,
    });

    const handleSliderChange =
        (attribute: keyof typeof attributes) =>
        (event: Event, newValue: number | number[]) => {
            const newAttributes = { ...attributes };
            newAttributes[attribute] = newValue as number;

            const sum = Object.values(newAttributes).reduce((a, b) => a + b, 0);
            if (sum !== totalPoints) {
                const diff = totalPoints - sum;
                const others = Object.keys(newAttributes).filter(
                    (key) => key !== attribute
                ) as Array<keyof typeof attributes>;

                const firstOther = others[0];
                const secondOther = others[1];

                if (diff < 0) {
                    const remainingDiff = Math.min(
                        0,
                        diff + newAttributes[firstOther]
                    );
                    newAttributes[firstOther] = Math.max(
                        0,
                        newAttributes[firstOther] + diff
                    );
                    newAttributes[secondOther] = Math.max(
                        0,
                        newAttributes[secondOther] + remainingDiff
                    );
                }
            }

            setAttributes(newAttributes);
        };

    if (!show) {
        return null;
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div>Create Strategy</div>
            <p>Total Points: {totalPoints}</p>
            {Object.entries(attributes).map(([attribute, value]) => (
                <div className="w-80" key={attribute}>
                    <label>
                        {attribute}: {value}
                    </label>
                    <Slider
                        value={value}
                        onChange={handleSliderChange(
                            attribute as keyof typeof attributes
                        )}
                        min={0}
                        max={30}
                        step={1}
                    />
                </div>
            ))}
            <Button
                onClick={() => {
                    const sum = Object.values(attributes).reduce(
                        (a, b) => a + b,
                        0
                    );
                    if (sum != totalPoints) {
                        alert("invalid strategy, please choice again");
                    }

                    createStrategy({
                        account,
                        Strength: attributes.strength,
                        Agility: attributes.agility,
                        Intelligence: attributes.intelligence,
                    });
                }}
            >
                Create Strategy
            </Button>
        </div>
    );
}
