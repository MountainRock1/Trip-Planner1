console.log("Its working!!!");
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibW91bnRhaW5yb2NrMSIsImEiOiJja2h1dDd0eGIwejZwMzBwZ2twZGUxaWoxIn0.r9VSKDBteMoHJjmJAafPDA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10", // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago

/*
*
*
    Below for link to ... marker.js?
*
*
*/

/* When your module is done, you should be able to require it in other files and use it like this: */
// import buildMarker from "./marker";

// const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
// marker.addTo(map);</
