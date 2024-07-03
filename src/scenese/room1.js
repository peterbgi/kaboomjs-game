import { makePlayer } from "../entities/player.js";
import { BgColor, setMapColliders } from "./roomUtils.js";

export  function room1(k, roomData)
{
    BgColor(k, "#a3aed5");

    k.camScale(4);
    k.camPos(170, 100);
    k.setGravity(1000);

    const roomLayers = roomData.layers;

    const map = k.add([k.pos(0,0), k.sprite("room1")]);



    const colliders = [];

    const position = [];

    for (const layer of roomLayers)
        {
            if (layer.name === "position") {
                position.push(...layer.objects);
                continue;
            }



            if(layer.name === "colliders")
                {
                    colliders.push(...layer.objects);
                }
        }

        setMapColliders(k, map, colliders);

        const player = k.add(makePlayer(k));

        for (const p of position) {
            if (p.name === "player") {
                player.setPosition(p.x, p.y)
                player.setControls();
            }
        }


}