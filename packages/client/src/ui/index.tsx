import { store } from "../store";
import { logDebug } from "./lib/utils";
import { Main } from "./Main";

export const UI = () => {
    const layers = store((state) => {
        return {
            networkLayer: state.networkLayer,
            phaserLayer: state.phaserLayer,
        };
    });

    logDebug("layers", layers);

    if (!layers.networkLayer || !layers.phaserLayer) return <div>loading</div>;

    return <Main />;
};
