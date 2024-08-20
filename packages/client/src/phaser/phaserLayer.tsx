import { useEffect } from "react";
import { NetworkLayer } from "../dojo/createNetworkLayer";
import { UIStore, store, useUIStore } from "../store";
import { usePhaserLayer } from "../ui/hooks/usePhaserLayer";

type Props = {
    networkLayer: NetworkLayer | null;
};

export const PhaserLayer = ({ networkLayer }: Props) => {
    const loggedIn = useUIStore((state: UIStore) => state.loggedIn);
    const { phaserLayer, ref } = usePhaserLayer({ networkLayer });

    useEffect(() => {
        if (phaserLayer) {
            store.setState({ phaserLayer });
        }
    }, [phaserLayer, loggedIn]);

    return <div />;
};
