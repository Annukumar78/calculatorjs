
// Function to set default values for current date fields
window.onload = function() {
  document.getElementById('dob-d').value = new Date().getDate();
  document.getElementById('dob-m').value = new Date().getMonth() + 1;
  document.getElementById('dob-y').value = new Date().getFullYear();
};

function showDate() {
  // Get day, month, and year input values for date of birth
  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;

  // Get day, month, and year input values for current date
  var dobDay = document.getElementById('dob-d').value;
  var dobMonth = document.getElementById('dob-m').value;
  var dobYear = document.getElementById('dob-y').value;

  // Validate the input values for date of birth
  if (day === '' || month === '' || year === '') {
      alert('Please enter valid date of birth');
      return;
  }

  // Validate the input values for current date
  if (dobDay === '' || dobMonth === '' || dobYear === '') {
      alert('Please fill in the current date');
      return;
  }

  // Construct the date strings in YYYY-MM-DD format for date of birth and current date
  var dobDateString = year + '-' + month + '-' + day;
  var currentDateString = dobYear + '-' + dobMonth + '-' + dobDay;

  // Create Date objects from the constructed date strings
  var dobDate = new Date(dobDateString);
  var currentDate = new Date(currentDateString);

  // Calculate the difference in milliseconds between current date and date of birth
  var difference = currentDate - dobDate;

  // Convert the difference to years, months, and days
  var ageDate = new Date(difference);
  var years = ageDate.getUTCFullYear() - 1970;
  var months = ageDate.getUTCMonth();
  var days = ageDate.getUTCDate() - 1;

  // Display the age in a custom alert box
  var customAlertMessage = document.getElementById('customAlertMessage');
  customAlertMessage.innerHTML = "Your age is: " + years + " years, " + months + " months, and " + days + " days.";
  var customAlert = document.getElementById('customAlert');
  customAlert.style.display = 'block';
}

// Function to close the custom alert box
function closeCustomAlert() {
  var customAlert = document.getElementById('customAlert');
  customAlert.style.display = 'none';
}

// Function to clear the form and hide the alert box
function clearForm() {
  document.getElementById('myForm').reset(); // Reset the form
  closeCustomAlert(); // Hide the alert box
}

 