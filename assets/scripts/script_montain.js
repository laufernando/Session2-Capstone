


const select_mount = document.getElementById("mount");
const cards = document.getElementById("target_mounts");

select_mount.addEventListener("change", function(){
    cards.innerHTML = "";
    mountainsArray.forEach(element => {

        if (element.name.includes(select_mount.value)){

            //Using the function to fetch the sunset/sunrise times for a specific mountain 
            getSunsetForMountain(element.coords.lat , element.coords.lng).then(sunsetData => {
                cards.innerHTML += `
                <div class="card col-lg-4 col-sm-12 center" >
                    <img src="assets/images/mountains/${element.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.desc}</p>
                    <p class="card-text">Elevation: ${element.elevation} ft</p>
                    <p class="card-text">Sunrise is at: ${sunsetData.results.sunrise} UTC and sunset is at: ${sunsetData.results.sunset}UTC</p>
                    </div>
                </div>`
            });
            
        }
    });

    //function that can "fetch" the sunset/sunrise times
async function getSunsetForMountain(lat, lng){
    let response = await fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`)
    let data = await response.json()
    return data
}


});

