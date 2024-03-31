var busNumber = localStorage.getItem('busNumber');

fetch(`{busNumber}.json`)
  .then(response => response.json())
  .then(data => {
    
    document.getElementById("bus-number").innerText = `Bus Number: ${data["busNumber"]}`;
    document.getElementById("driver-name").innerText = `Driver: ${data["driverName"]}`;
    document.getElementById("bus-reg").innerText = `Bus Registration: ${data['registrationNumber']}`;

    var table = "";
    data["routeTable"].forEach(element => {
      var row = `<tr>
                <td>${element["serialNumber"]}</td>
                <td>${element["busStop"]}</td>
                <td>${element["timing1"]}</td>
                <td>${element["timing2"]}</td>
                </tr>`
      table += row;
    });

    document.getElementById("table-body").innerHTML = table;
    console.log(data["busNumber"]);
  })
  .catch(error => console.error('Error fetching JSON:', error));

