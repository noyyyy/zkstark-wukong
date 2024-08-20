import {
    Type,
    World,
    defineComponent,
    overridableComponent,
} from "@dojoengine/recs";
import { ContractComponents } from "./generated/typescript/models.gen";

export type ClientComponents = ReturnType<typeof createClientComponents>;

export function createClientComponents({
    contractComponents,
    world,
}: {
    contractComponents: ContractComponents;
    world: World;
}) {
    return {
        ...contractComponents,
        // create overridable component for optimistic rendering
    };
}
