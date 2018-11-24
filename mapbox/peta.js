function map() {
  var mymap = L.map('mapid').setView([-6.187333, 106.831901], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', { 
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>,Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>", 
    maxZoom: 20,
    id: 'mapbox.streets', 
    accessToken: 'pk.eyJ1IjoicHJhbmF0b2JpbmciLCJhIjoiY2puZzlpNmx2MDB1NjNwbnkyY3ZhaWoxeCJ9.B-8lO7LnmwzmUReV2MblCg'
  }).addTo(mymap);

  let places= [
    {"lokasi": [-6.186543, 106.831046], "sponsor" : "KalaKopi"},
    {"lokasi": [-6.183951, 106.831511], "sponsor" : "MNC Tower"}
  ];

  for (var p of places) {
    var marker= L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
  }

  var circle = L.circle([-6.187333, 106.831901], { 
    color: 'red', 
    fillColor: '#f03', 
    fillOpacity: 0.5, 
    radius: 500 
  }).addTo(mymap);

  var popup = L.popup();
  function onMapClick(e) {
    popup.setLatLng(e.latlng)
      .setContent("Location: " + e.latlng.toString())
      .openOn(mymap);
  }
  mymap.on('click', onMapClick);
}

map();