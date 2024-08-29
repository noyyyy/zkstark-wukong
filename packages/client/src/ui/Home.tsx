import { Cocos } from "./features/Cocos";
import { useDojo } from "./hooks/useDojo";
import { ShowItem, useUIStore } from "../store";
import { Button } from "./components/button";
import { Story } from "./features/Story";
import { CreateStrategy } from "./features/createStrategy";
import { MyStrategy } from "./features/MyStrategy";
import { Rank } from "./features/Rank";

export function Home() {
    const {
        clientComponents: {},
        account: {},
    } = useDojo();

    const setShow = useUIStore((state) => state.setShow);
    const getShow = useUIStore((state) => state.getShow);

    const loggedIn = useUIStore((state) => state.loggedIn);

    if (!loggedIn) {
        return <Story />;
    }

    return (
        <div className="w-screen h-screen flex">
            <div className="w-1/5 flex flex-col items-center justify-center space-y-12">
                <Button>Check My Strategy</Button>
                <Button onClick={() => setShow(ShowItem.CreateStrategy, true)}>
                    Go Create Strategy
                </Button>
                <Button onClick={() => {}}>set cocos show</Button>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
                <CreateStrategy />

                <MyStrategy />
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <Rank />
            </div>{" "}
            <Cocos />
        </div>
    );
}
