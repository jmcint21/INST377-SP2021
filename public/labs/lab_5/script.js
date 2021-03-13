function mapInit() {
  const mymap = L.map('mapid').setView([38.9897, -76.9378], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZXVyenVhIiwiYSI6ImNrbTZuNWVtbTBxNG4yb281ejFwbmlwMGoifQ.fVeYUIJ-N3W5yEgcphjsxg'
}).addTo(mymap);
console.log('mymap', mymap);
  return mymap;
  // follow the Leaflet Getting Started tutorial here
  return map;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const locations = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => locations.push(...data))

function findMatches(word) {
  return locations.filter(location =>
    location.name.toLowerCase().indexOf(word) > -1);
}

function displayMatches() {
  const matchArray = findMatches(searchInput.value);
  document.querySelector('.suggestions').innerHTML = matchArray.map(location => {
    return `
        <li class="bgcolor">
            <div class="name">${location.name}</div>
            <div class="category">${location.category}</div>
            <div class="address">${location.address_line_1}</div>
            <div class="city">${location.city}</div>
            <div class="zip">${location.zip}</div>
            <div class="space"> </div>
        </li>
        `;
  }).join('');
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
}

async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;