var kaart = L.map('kaart').setView({lon: 5, lat: 52}, 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: 'Team Geo @ HuC, KNAW'
}).addTo(kaart);
