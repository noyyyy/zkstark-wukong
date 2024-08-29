import { store } from "../store";
import { logDebug } from "./lib/utils";
import { Home } from "./Home";
import { Loading } from "./features/Loading";

export const UI = () => {
    const layers = store((state) => {
        return {
            networkLayer: state.networkLayer,
            phaserLayer: state.phaserLayer,
        };
    });

    logDebug("layers", layers);

    if (!layers.networkLayer || !layers.phaserLayer) return <Loading />;

    return <Home />;
};
