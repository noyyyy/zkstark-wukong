import { Cocos } from "./components/Cocos";
import { useDojo } from "./hooks/useDojo";

export function Main() {
    const {
        clientComponents: {},
        account: { playerEntity },
    } = useDojo();

    return (
        <div>
            <div>hello world</div>
            <Cocos />
        </div>
    );
}
