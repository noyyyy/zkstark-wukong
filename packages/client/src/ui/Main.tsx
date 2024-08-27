import { Cocos } from "./features/Cocos";
import { useDojo } from "./hooks/useDojo";
import { ShowItem, useUIStore } from "../store";
import { Button } from "./components/button";

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
                    setShow(ShowItem.Cocos, !getShow(ShowItem.Cocos));
                }}
            >
                set cocos show
            </Button>
            <Cocos />
        </div>
    );
}
