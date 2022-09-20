"use strict"

let mountainsArray = []

window.onload = function(){

    loadJsonData("assets/data/mountains.json").then((mountain) => {
        mountainsArray = mountain.mountains;
    })

}



let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}
