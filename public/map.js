// Initialize and add the map
setTimeout(
function initMap() {
    const latDiv = document.getElementById("lat");
    const longDiv = document.getElementById("long");
    const lat = parseFloat(latDiv.className)
    const long = parseFloat(longDiv.className)
    // The location of the event
    const location = { lat: lat, lng: long };
    // The map, centered at the event
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });
    // The marker, positioned at the event
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
,500);