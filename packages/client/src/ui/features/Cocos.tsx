import { ShowItem, useUIStore } from "../../store";
import { cn } from "../lib/utils";

export function Cocos() {
    const show = useUIStore((state) => state.getShow(ShowItem.Cocos));

    return (
        <iframe
            id="Cocos Game"
            className={cn(" absolute inset-0 h-screen w-screen t-0 l-0 z-50", {
                invisible: !show,
            })}
            src="/cocos-build/index.html"
            title="Embedded Content"
        />
    );
}
