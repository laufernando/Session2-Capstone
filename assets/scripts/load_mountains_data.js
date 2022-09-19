"use strict"

let mountainsArray = []

window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountains) => {
        mountainsArray = mountains.mountains;
    })

}

//function that can "fetch" the sunset/sunrise times
let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}

function get_info_mount(name) {
    let info = "";
    loadJsonData("assets/data/mountains.json").then((mountains) => {
        let arrayMount = mountains.mountains;
        
        arrayMount.forEach(element => {
            if (name === element.name){
                info = element.desc;
                return info;
            }            
        });
    });

}

console.log( get_info_mount("Mt. Tom"));