import { useEffect } from "react";
import { useNetworkLayer } from "./ui/hooks/useNetworkLayer";
import { UI } from "./ui";
import { store } from "./store";
import { PhaserLayer } from "./phaser/phaserLayer";

function App() {
    const networkLayer = useNetworkLayer();

    useEffect(() => {
        if (!networkLayer || !networkLayer.account) return;

        console.log("Setting network layer");

        store.setState({ networkLayer });
    }, [networkLayer]);

    if (!networkLayer) {
        return <div />;
    }

    return (
        <div>
            <UI />
            <PhaserLayer networkLayer={networkLayer} />
        </div>
    );
}

export default App;
