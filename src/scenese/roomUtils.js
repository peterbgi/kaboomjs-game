export function BgColor(k, hexColorCode)
{
    k.add([
        k.rect(k.width(), k.height()),
        k.color(k.Color.fromHex(hexColorCode)),
        k.fixed(),
    ]);
};

export function setMapColliders(k, map, colliders)
{
    for (const collider of colliders)
        {
            if (collider.polygon)
                {
                    const coordinates = [];
                    for (const point of collider.polygon)
                        {
                            coordinates.push(k.vec2(point.x, point.y))
                        }

                    map.add([
                        k.pos(collider.x, collider.y),
                        k.area({
                            shape: new k.Polygon(coordinates),
                            colIgnore: ["collider"]
                        }),
                        "collider",
                        collider.type,
                    ]);
                    continue;
                }

                if  (collider.name === "boss-barier")
                    {
                        //ToDo
                        continue;
                    }

                    map.add([
                        k.pos(collider.x, collider.y),
                        k.area({
                            shape: new k.Rect(k.vec2(0), collider.width, collider.height),
                            colIgnore: ["collider"],
                        }),
                        k.body({isStatic: true}),
                        "collider",
                        collider.type,
                    ]);
        }
}