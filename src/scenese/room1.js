import { makeDrone } from "../entities/enemyDrone.js";
import { makePlayer } from "../entities/player.js";
import { BgColor, 
    setCameraControls,
     setCameraZones,
     setMapColliders, 
      } from "./roomUtils.js";

export  function room1(k, roomData)
{
    BgColor(k, "#a3aed5");

    k.camScale(4);
    k.camPos(170, 100);
    k.setGravity(1000);

    const roomLayers = roomData.layers;

    const map = k.add([k.pos(0,0), k.sprite("room1")]);



    const colliders = [];

    const positions = [];

    const cameras = [];

    for (const layer of roomLayers)
        {
            if (layer.name === "cameras") {
                cameras.push(...layer.objects);
               
            }


            if (layer.name === "positions") {
                positions.push(...layer.objects);
                continue;
            }



            if(layer.name === "colliders")
                {
                    colliders.push(...layer.objects);
                }
        }

        setMapColliders(k, map, colliders);

        setCameraZones(k, map, cameras);

       

        const player = map.add(makePlayer(k));
        setCameraControls(k, player, map, roomData);

        for (const p of positions) {
            if (p.name === "player") {
                player.setPosition(p.x, p.y)
                player.setControls();
                player.setEvents();
                player.enablePassthrough();
                continue;
            }

            if (p.type === "drone")
                {
                    const drone = map.add(makeDrone(k, k.vec2(p.x, p.y)));
                    drone.setBehavior();
                    drone.setEvents();
             
                }
        }


}