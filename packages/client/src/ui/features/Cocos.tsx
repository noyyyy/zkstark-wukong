import { ShowItem, useUIStore } from "../../store";
import { cn } from "../lib/utils";

export function Cocos() {
    const show = useUIStore((state) => state.getShow(ShowItem.Cocos));

    return (
        <iframe
            id="Cocos Game"
            className={cn(
                "absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[850px] w-[1500px] z-50 max-h-[100vh] max-w-[100wh] overflow-hidden",
                {
                    invisible: !show,
                }
            )}
            style={{ objectFit: "contain" }}
            src="/cocos-build/index.html"
            title="Embedded Content"
        />
    );
}
