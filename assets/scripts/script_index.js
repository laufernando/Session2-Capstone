"use strict"

const information_MidCarter = document.getElementById("information_wildcat");


function getInfo(mount){
    
    mountainsArray.forEach(element=>{
        console.log(element);

    });

    mountainsArray.forEach(element=>{
        console.log("yes");
        if (element.name === mount){
            console.log(element.name);
        }
    });
}


getInfo("Mt. Tom");