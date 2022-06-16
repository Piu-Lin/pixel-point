const moveToLocation= document.getElementById("move_to_location")
let fxx= {
    "points":[
        {"pointname":"地点的名字",
        "type":"001",
        "location":{
            "x":120.09416198730469,
            "y":30.177175521850586,
            "z":30
        },
        "properties":"自定义"}
    ],"eventname":"Event_move_to_location"
};
moveToLocation.onclick = function (event) {
    console.log("传输开始")
    let descriptor = {
        interactButton: '1'
    };
    emitUIInteraction(descriptor);
    console.log("传输结束")

};