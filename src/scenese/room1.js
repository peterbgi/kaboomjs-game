import { BgColor, setMapColliders } from "./roomUtils.js";

export  function room1(k, roomData)
{
    BgColor(k, "#a3aed5");

    const roomLayers = roomData.layers;

    const map = k.add([k.pos(0,0), k.sprite("room1")]);



    const colliders = [];

    for (const layer of roomLayers)
        {
            if(layer.name === "colliders")
                {
                    colliders.push(...layer.objects);
                    break;
                }
        }

        setMapColliders(k, map, colliders)

}