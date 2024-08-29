import { useUIStore } from "../../store";
import { Button } from "../components/button";

export function Story() {
    const setLoggedIn = useUIStore((state) => state.setLoggedIn);
    return (
        <div className="fixed inset-0 flex flex-col justify-center items-center text-2xl bg-center bg-cover bg-no-repeat bg-[url('/assets/bg.png')] text-white">
            <div className="absolute w-full h-full bg-gray-500 opacity-50 -z-10"></div>
            <div className="w-1/2 flex flex-col justify-center items-center space-y-12">
                <div>
                    On your journey to find the Great Sage's will, you suddenly
                    encounter other monkeys. They're also searching for
                    fragments of the will, their eyes gleaming with hostility.
                </div>
                <div>
                    You realize conflict is inevitable. Quickly assessing the
                    situation, you begin to consider your battle strategy.
                    Should you strike first or wait and observe? Focus on
                    attacking one or divide your attention? Adrenaline starts to
                    surge, your muscles tense, ready for combat.
                </div>
                <div>
                    Taking a deep breath, you assume a fighting stance. Prepare
                    yourself for this intense battle; victory will bring you one
                    step closer to your goal.{" "}
                </div>
                <div className="text-6xl">Are you the destined one?</div>
            </div>
            <Button
                onClick={() => {
                    setLoggedIn(true);
                }}
                className="text-2xl mt-12 w-180 h-12"
            >
                Continue the journey
            </Button>
        </div>
    );
}
