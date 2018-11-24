function findLocation(x, y) {
  for (var i = 0; i < places.length; i++){
    if (places[i].lokasi[0] == x && places[i].lokasi[1] == y) {
      return i;
    }
  }
  return -1;
}

function showLocation(e) {
  //console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
  let ix = findLocation(e.latlng.lat, e.latlng.lng);
  if (ix >= 0) {
    img.src = places[ix].gambar;
    par.textContent = places[ix].review;
  }
}

let gmb= document.getElementById("gmb");
let rev= document.getElementById("review");
let img= document.createElement("img");
let par= document.createElement("p");
gmb.appendChild(img);
rev.appendChild(par);

const URL = "peta.json";
var places = [];
getAPIURL(URL);

async function getAPIURL(URL) {
  try {
    var response1 = await fetch(URL);
    var response2 = await response1.json();
    places = response2.places;
    initialMap(places);
    // localStorage.setItem('places', JSON.stringify(response2.places));
  } catch (e) {
    console.log("Error");
  }
}

// let places = JSON.parse(localStorage.getItem('places'));
console.log(places);

async function initialMap(places) {
  for (var p of places.values()) {
    console.log(p);
    var marker= L.marker(p.lokasi).addTo(mymap)
    .bindPopup(p.sponsor);
    marker.on('click', showLocation);
  }
}