import {
    defineSceneConfig,
    AssetType,
    defineScaleConfig,
    defineMapConfig,
    defineCameraConfig,
} from "@latticexyz/phaserx";
import { TileAnimations, Tileset } from "../../assets/world";
import {
    Assets,
    Maps,
    Scenes,
    TILE_HEIGHT,
    TILE_WIDTH,
    TILE_IMAGE_WEIGHT,
    TILE_IMAGE_HEIGHT,
} from "./constants";
import { getSprites } from "./spriteConfig";
import { getAnimations } from "./animationConfig";

const ANIMATION_INTERVAL = 200;

const mainMap = defineMapConfig({
    chunkSize: TILE_WIDTH * 8,
    tileWidth: TILE_WIDTH,
    tileHeight: TILE_HEIGHT,
    backgroundTile: [Tileset.Land],
    animationInterval: ANIMATION_INTERVAL,
    tileAnimations: TileAnimations,
    layers: {
        layers: {
            Background: { tilesets: ["Default"] },
        },
        defaultLayer: "Background",
    },
});

export const phaserConfig = {
    sceneConfig: {
        [Scenes.Main]: defineSceneConfig({
            assets: {
                [Assets.Tileset]: {
                    type: AssetType.Image,
                    key: Assets.Tileset,
                    path: "assets/tilesets/land.png",
                },
            },
            maps: {
                [Maps.Main]: mainMap,
            },
            sprites: getSprites(),
            animations: getAnimations() as any,
            tilesets: {
                Default: {
                    assetKey: Assets.Tileset,
                    tileWidth: TILE_IMAGE_WEIGHT,
                    tileHeight: TILE_IMAGE_HEIGHT,
                },
            },
        }),
    },
    scale: defineScaleConfig({
        parent: "phaser-game",
        // mode: Phaser.Scale.RESIZE,
        // zoom: 1,
        // height: "100%",
        // width: "100%",
        // autoCenter: Phaser.Scale.Center.NO_CENTER,
    }),
    cameraConfig: defineCameraConfig({
        pinchSpeed: 1,
        wheelSpeed: 1,
        maxZoom: 3,
        minZoom: 1,
    }),
    cullingChunkSize: 64,
};
