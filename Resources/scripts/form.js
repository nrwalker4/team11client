const formURL = 'http://localhost:5138/api/Form'
const plantURL = 'http://localhost:5138/api/plant'

async function getPlants(){
    let response = await fetch(plantURL)
    let data = await response.json()
    console.log(data)
    return data
}
async function matchPlant(){
    const form = document.getElementById('recommendation-form')
    
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const soil = formData.get('soil');
        const location = formData.get('location');
        const sun = formData.get('sun');

        // Save user's choices to local storage
        localStorage.setItem('soil', soil);
        localStorage.setItem('location', location);
        localStorage.setItem('sun', sun);

        let newForm = {
            formId: -1,
            indoorOutdoor: localStorage.getItem('location'),
            sunExposure: localStorage.getItem('sun'),
            soil: localStorage.getItem('soil'),
            username: 'N/A'
        }

        console.log(newForm)

        handleFormPost(newForm)

        // Get recommended plant based on user's choices
        getPlants().then(function(plants){
                         
            let recommendedPlant

            recommendedPlant = plants.find(plant => plant.soil == soil && plant.indoorOutdoor == location && plant.sunExposure == sun)
    
            console.log(recommendedPlant)

            // Display recommended plant
            const recommendationsDiv = document.getElementById('recommendations');
            if(recommendedPlant === undefined)
            {
                recommendationsDiv.innerHTML = `<p>Recommended Plant: No plant recommendation found</p>`;
            }
            else{
                recommendationsDiv.innerHTML = `<h1>Recommended Plant: ${recommendedPlant.plantName}</h1>
                <p>Plant Type: ${recommendedPlant.plantType}</p>
                <p>Description: ${recommendedPlant.plantDescription}</p>
                <p>Average Lifespan: ${recommendedPlant.lifespan}</p>
                <img src="${recommendedPlant.imageLink}" alt="${recommendedPlant.plantName}" style="width: 200px; height: auto;">
                <a href="${recommendedPlant.externalLink}" target="_blank">Read More about ${recommendedPlant.plantName}</a>
                <a href="./shop.html">Shop for ${recommendedPlant.plantName}</a>`
            }
        })
    })
}

async function handleFormPost(form){
    
    console.log("inside handle post")

    console.log(form)

    await fetch(formURL, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    })
    // window.location.reload(true)
}