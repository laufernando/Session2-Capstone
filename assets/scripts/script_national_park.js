"use strict"
const select_type = document.getElementById("type_filter");
const select_search = document.getElementById("search");
const table = document.getElementById('tabla_parks');


select_type.addEventListener("change", function() {

    table.innerHTML = "";
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
        
        table.innerHTML = "";


    if (select_type.value === "1"){
       table.innerHTML = `<thead>
       <tr>
         <th scope="col">Location Name</th>
         <th scope="col">Address</th>
         <th scope="col">City</th>
         <th scope="col">State</th>
         <th scope="col">Location ID</th>
         <th scope="col">Visit</th>
       </tr>
     </thead>
     <tbody>`;
        nationalParksArray.forEach(element=>{
            let url = element.Visit  ? `<a href=${element.Visit} target="_blank">Visit</a>` : "N/A";
            if (element.State === select_search.value){
                
                table.innerHTML += `
                <tr>
                    <td>${element.LocationName}</td>
                    <td>${element.Address}</td>
                    <td>${element.City}</td>
                    <td>${element.State}</td>
                    <td>${element.LocationID}</td>
                    <td>${url}</td>
                </tr>
                `;
            }else if (select_search.value === "-1"){
                table.innerHTML += `
                <tr>
                    <td>${element.LocationName}</td>
                    <td>${element.Address}</td>
                    <td>${element.City}</td>
                    <td>${element.State}</td>
                    <td>${element.LocationID}</td>
                    <td>${url}</td>
                </tr>
                `;
            }
        });
        table.innerHTML += `<tbody>`;
    }else if (select_type.value == "2"){
        nationalParksArray.forEach(element=>{
            let url = element.Visit  ? `<a href=${element.Visit} target="_blank">Visit</a>` : "N/A";
            if (element.LocationName.includes(select_search.value)){
                table.innerHTML += `
                <tr>
                    <td>${element.LocationName}</td>
                    <td>${element.Address}</td>
                    <td>${element.City}</td>
                    <td>${element.State}</td>
                    <td>${element.LocationID}</td>
                    <td>${url}</td>
                </tr>
                `;
            }else if (select_search.value === "-1"){
                table.innerHTML += `
                <tr>
                    <td>${element.LocationName}</td>
                    <td>${element.Address}</td>
                    <td>${element.City}</td>
                    <td>${element.State}</td>
                    <td>${element.LocationID}</td>
                    <td>${url}</td>
                </tr>
                `;
            }
        });

    }
    

});


function agregar_filtro_location() {
    for (let i = select_search.options.length; i >= 0; i--) {
        select_search.remove(i);
      }
      const option = document.createElement('option');
            option.value = "0";
            option.text = "Choose...";
            select_search.appendChild(option);
      const ele = document.createElement('option');
            ele.value = "-1";
            ele.text = "All Parks";
            select_search.appendChild(ele);
      locationsArray.forEach(element => {
        const option = document.createElement('option');
            option.value = element;
            option.text = element;
            select_search.appendChild(option);
            
        }); 
}

function agregar_filtro_type_parks() {
    for (let i = select_search.options.length; i >= 0; i--) {
        select_search.remove(i);
      }
      const option = document.createElement('option');
            option.value = "0";
            option.text = "Choose...";
            select_search.appendChild(option);
      const ele = document.createElement('option');
            ele.value = "-1";
            ele.text = "All Parks";
            select_search.appendChild(ele);
      parkTypesArray.forEach(element => {
            const option = document.createElement('option');
            option.value = element;
            option.text = element;
            select_search.appendChild(option);
            
        });
  
}

