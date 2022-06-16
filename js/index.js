const moveToLocation = document.getElementById("move_to_location")
let fxx = {
    "points":
        [{
            "pointname": "地点的名字",
            "type": "001",
            "location": {
                "x": 120.09416198730469,
                "y": 30.177175521850586,
                "z": 30
            },
            "properties": "自定义"
        },
        {
            "pointname": "地点的名字",
            "type": "002",
            "location": {
                "x": 120.05451965332031,
                "y": 30.136625289916992,
                "z": 30
            },
            "properties": "自定义"
        },
        {
            "pointname": "地点的名字",
            "type": "003",
            "location": {
                "x": 120.11903381347656,
                "y": 30.166170120239258,
                "z": 30
            }, "properties": "自定义"
        }
        ], "eventname": "Event_spawn_geometry"

};
const xx = { "points": [{ "name": "linrisheng", "type": "002", "location": { "x": 120.18958282470703, "y": 30.147602081298828, "z": 30 }, "properties": "point001", "color": { "r": 0, "g": 0, "b": 0, "a": 1 } }, { "name": "二号", "type": "002", "location": { "x": 120.23531341552734, "y": 30.329814910888672, "z": 30 }, "properties": "point002", "color": { "r": 0, "g": 0, "b": 255, "a": 0.60000002384185791 } }, { "name": "三号", "type": "003", "location": { "x": 120.21071624755859, "y": 30.190139770507812, "z": 30 }, "properties": "point003", "color": { "r": 255, "g": 0, "b": 0, "a": 1 } }], "lines": [], "faces": [], "eventname": "Event_spawn_geometry" }
moveToLocation.onclick = function (event) {
    console.log("传输开始")
    let descriptor = {
        interactButton: '1'
    };
    emitUIInteraction(xx);
    console.log("传输结束")

};