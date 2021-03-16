function initMap() {
  const myLatLng = { lat: -34.6045167, lng: -58.3961273 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
  });
}