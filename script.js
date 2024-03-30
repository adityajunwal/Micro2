var busNumber = localStorage.getItem('busNumber');

fetch(`${busNumber}.json`)
  .then(response => response.json())
  .then(data => {
    // Use the parsed JSON data here
    console.log(data);
  })
  .catch(error => console.error('Error fetching JSON:', error));