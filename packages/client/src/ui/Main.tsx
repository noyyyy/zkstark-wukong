import { Cocos } from "./features/Cocos";
import { useDojo } from "./hooks/useDojo";
import { ShowItem, useUIStore } from "../store";
import { Button } from "./components/button";

const data = {
    challenger: {
        strength: 10,
        agility: 0,
        intelligence: 20,
    },
    defender: {
        strength: 10,
        agility: 0,
        intelligence: 20,
    },
};

export function Main() {
    const {
        clientComponents: {},
        account: {},
    } = useDojo();

    const setShow = useUIStore((state) => state.setShow);
    const getShow = useUIStore((state) => state.getShow);

    return (
        <div className="w-screen h-screen">
            <div>hello world</div>
            <Button
                onClick={() => {
                    const iframe = document.getElementById(
                        "Cocos Game"
                    ) as HTMLIFrameElement;

                    const d = JSON.stringify(data);
                    iframe.contentWindow!.postMessage(d, "*");

                    setShow(ShowItem.Cocos, !getShow(ShowItem.Cocos));
                }}
            >
                set cocos show
            </Button>
            <Cocos />
        </div>
    );
}
