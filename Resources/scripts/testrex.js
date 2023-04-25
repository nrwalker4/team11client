
  const form = document.getElementById('recommendation-form');
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
    const recommendedPlant = getRecommendedPlant(soil, location, sun);

    // Display recommended plant
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = `<p>Recommended Plant: ${recommendedPlant}</p>`;
  });

  function getRecommendedPlant(soil, location, sun) {
    let recommendedPlant;

    if (soil === 'sandy' && location === 'outdoor' && sun === 'full sun') {
      recommendedPlant = 'Cactus';
    } else if (soil === 'loamy' && location === 'outdoor' && sun === 'full sun') {
      recommendedPlant = 'Tomato';
    } else if (soil === 'clay' && location === 'outdoor' && sun === 'partial sun') {
      recommendedPlant = 'Azalea';
    } else if (soil === 'low drainage potting mix' && location === 'indoor' && sun === 'low sunlight') {
      recommendedPlant = 'Snake Plant';
    } else if (soil === 'high drainage potting mix' && location === 'indoor' && sun === 'low sunlight') {
        recommendedPlant = 'Pothos';
    } else if (soil === 'low drainage potting mix' && location === 'indoor' && sun === 'high sunlight') {
        recommendedPlant = 'Aloe Vera';
    } else if (soil === 'high drainage potting mix' && location === 'indoor' && sun === 'high sunlight') {
        recommendedPlant = 'Spider Plant';
    } else {
      recommendedPlant = 'No plant recommendation found';
    }

    return recommendedPlant;
  }

