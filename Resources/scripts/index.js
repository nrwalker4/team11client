document.getElementById("gardenForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form data and do something with it
  var gardenSize = document.getElementById("gardenSize").value;
  var sunExposure = document.getElementById("sunExposure").value;
  // Add more form field data as needed

  // TODO: Process the form data and display recommended plant
});

// Clear modal form fields when modal is closed
$('#exampleModal').on('hidden.bs.modal', function() {
  $('#gardenForm').trigger("reset");
});