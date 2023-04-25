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
                recommendationsDiv.innerHTML = `<p>Recommended Plant: ${recommendedPlant.plantName}</p>`;
            }
        })
    })
}