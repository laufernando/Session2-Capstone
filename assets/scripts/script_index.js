const btn_w = document.getElementById("wildcat");
const card = document.getElementById("info_body");

btn_w.addEventListener("click",function () {
    card.innerHTML = "";
    mountainsArray.forEach(element => {

        if (element.name = "Wildcat Mountain"){

            //Using the function to fetch the sunset/sunrise times for a specific mountain 
            getSunsetForMountain(element.coords.lat , element.coords.lng).then(sunsetData => {
                card.innerHTML += `
                <div class="card col-lg-4 col-sm-12 center" >
                    <img src="assets/images/mountains/${element.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.desc}</p>
                    <p class="card-text">Elevation: ${element.elevation} ft</p>
                    <p class="card-text">Sunrise is at: ${sunsetData.results.sunrise} UTC and sunset is at: ${sunsetData.results.sunset}UTC</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=${element.coords.lat},${element.coords.lng}&zoom=20" target="_blank" class="btn btn-primary">Go Maps</a>
                    </div>
                </div>`
            });
            
        }
    });
    
})

    //function that can "fetch" the sunset/sunrise times
    async function getSunsetForMountain(lat, lng){
        let response = await fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`)
        let data = await response.json()
        return data
    }