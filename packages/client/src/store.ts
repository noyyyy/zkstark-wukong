import { create } from "zustand";
import { NetworkLayer } from "./dojo/createNetworkLayer";
import { PhaserLayer } from "./phaser";

export type Store = {
    networkLayer: NetworkLayer | null;
    phaserLayer: PhaserLayer | null;
};

export enum ShowItem {
    Cocos,
    CreateStrategy,
}

export type UIStore = {
    loggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
    shows: Map<ShowItem, boolean>;
    getShow: (i: ShowItem) => boolean;
    setShow: (i: ShowItem, shouldShow: boolean) => void;
    preparedBattle: { challenger: number; defender: number };
    setPreparedBattle: (args: { c?: number; d?: number }) => void;
};

export const store = create<Store>(() => ({
    networkLayer: null,
    phaserLayer: null,
}));

export const useUIStore = create<UIStore>((set, get) => ({
    loggedIn: false,
    setLoggedIn: (loggedIn: boolean) => set(() => ({ loggedIn })),
    shows: new Map(),
    getShow: (i: ShowItem) => {
        return get().shows.get(i) || false;
    },
    setShow(i: ShowItem, shouldShow: boolean) {
        set((state) => {
            const newMap = new Map(state.shows);
            newMap.set(i, shouldShow);
            return { shows: newMap };
        });
    },
    preparedBattle: { challenger: 0, defender: 0 },
    setPreparedBattle: ({ c, d }: { c?: number; d?: number }) =>
        set((state) => ({
            preparedBattle: {
                challenger: c ?? state.preparedBattle.challenger,
                defender: d ?? state.preparedBattle.defender,
            },
        })),
}));
