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

    const data = useMemo(() => {
        if (!preparedBattle?.challenger || !preparedBattle?.defender) {
            return undefined;
        }
        const c = getComponentValueStrict(
            Strategy,
            getEntityIdFromKeys([BigInt(preparedBattle.challenger)])
        );
        const d = getComponentValueStrict(
            Strategy,
            getEntityIdFromKeys([BigInt(preparedBattle.defender)])
        );

        return {
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
    }, [Strategy, preparedBattle]);

    const startBattle = useCallback(() => {
        if (!data) {
            alert("invalid battle input");
        }

        const iframe = document.getElementById(
            "Cocos Game"
        ) as HTMLIFrameElement;

        const d = JSON.stringify(data);
        iframe.contentWindow!.postMessage(d, "*");

        setShow(ShowItem.Cocos, !getShow(ShowItem.Cocos));
    }, [data, setShow, getShow]);
    return { startBattle };
}
