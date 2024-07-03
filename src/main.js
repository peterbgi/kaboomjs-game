import {k} from "./kaboomproject.js"
import { room1 } from "./scenese/room1.js"
import { room2 } from "./scenese/room2.js";


async function main() 
{
    const room1Data = await (await fetch("./maps/room1.json")).json();
    
    const room2Data = await (await fetch("./maps/room1.json")).json();

    k.scene("room1", () => {
        room1(k, room1Data);
    });
    
    k.scene("room2", () => {
        room2();
    });
    
}

main();

k.scene("intro", () => {
    k.onKeyPress("enter", () => {
        k.go("room1");
    });
});

k.go("intro");