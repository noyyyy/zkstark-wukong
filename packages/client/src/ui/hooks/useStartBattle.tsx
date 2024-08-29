import { useCallback, useMemo } from "react";
import { ShowItem, useUIStore } from "../../store";
import { getComponentValueStrict } from "@dojoengine/recs";
import { useDojo } from "./useDojo";
import { getEntityIdFromKeys } from "@dojoengine/utils";

export function useStartBattle() {
    const {
        clientComponents: { Strategy },
    } = useDojo();

    const setShow = useUIStore((state) => state.setShow);

    const getShow = useUIStore((state) => state.getShow);

    const preparedBattle = useUIStore((state) => state.preparedBattle);

    const startBattle = useCallback(
        (defenderId: number) => {
            const c = getComponentValueStrict(
                Strategy,
                getEntityIdFromKeys([BigInt(preparedBattle.challenger)])
            );
            const d = getComponentValueStrict(
                Strategy,
                getEntityIdFromKeys([BigInt(defenderId)])
            );

            const data = {
                challenger: {
                    strength: c.strength,
                    agility: c.agility,
                    intelligence: c.intelligence,
                },
                defender: {
                    strength: d.strength,
                    agility: d.agility,
                    intelligence: d.intelligence,
                },
            };
            if (!preparedBattle?.challenger) {
                alert("invalid battle input");
                return;
            }

            const iframe = document.getElementById(
                "Cocos Game"
            ) as HTMLIFrameElement;

            const jsonStr = JSON.stringify(data);
            iframe.contentWindow!.postMessage(jsonStr, "*");

            setShow(ShowItem.Cocos, !getShow(ShowItem.Cocos));
        },
        [setShow, getShow, Strategy, preparedBattle.challenger]
    );
    return { startBattle };
}
