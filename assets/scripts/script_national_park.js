"use strict"
const select_type = document.getElementById("type_filter");
const select_search = document.getElementById("search");


select_type.addEventListener("change", function() {
    if (select_type.value === "1"){
        select_search.style.display = "block";
        agregar_filtro_location();

    }else if (select_type.value == "2"){
        select_search.style.display = "block";
        agregar_filtro_type_parks();

    }else{
        select_search.style.display = "none";
    }
    
});

select_search.addEventListener("change", function() {
    if (select_type.value === "1"){
       
        nationalParksArray.forEach(element=>{
            if (element.State === select_search.value){
                console.log(element);
            }
        });
    }else if (select_type.value == "2"){
        nationalParksArray.forEach(element=>{
            if (element.LocationName.includes(select_search.value)){
                console.log(element);
            }
        });

    }
    

});


function agregar_filtro_location() {
    for (let i = select_search.options.length; i >= 0; i--) {
        select_search.remove(i);
      }
      locationsArray.forEach(element => {
            const option = document.createElement('option');
            option.value = element;
            option.text = element.toLowerCase();
            select_search.appendChild(option);
            
        }); 
}

function agregar_filtro_type_parks() {
    for (let i = select_search.options.length; i >= 0; i--) {
        select_search.remove(i);
      }

      parkTypesArray.forEach(element => {
            const option = document.createElement('option');
            option.value = element;
            option.text = element.toLowerCase();
            select_search.appendChild(option);
            
        });
  
}

