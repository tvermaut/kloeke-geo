var kaart = L.map('kaart').setView({lon: 52, lat: 5}, 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: 'Team Geo @ HuC, KNAW'
}).addTo(map);
