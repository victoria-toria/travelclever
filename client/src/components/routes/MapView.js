// import React from "react";
// import mapboxgl from "mapbox-gl";
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

// // import "mapbox-gl/dist/mapbox-gl.css"; // Updating node module will keep css up to date.
// // import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"; // Updating node module will keep css up to date.

// mapboxgl.accessToken =
//   "pk.eyJ1IjoidmljdG9yaWF0b3JpYSIsImEiOiJja2EzbHVrMnowMzBzM2tyd2VsNnI2YnFiIn0.rZpPyrN5hdNxsnVtAWWCOQ";

// export default class MapView extends React.Component {
//   componentDidMount() {
//     const { lng, lat, zoom } = {
//       lng: 144.9685,
//       lat: -37.8101,
//       zoom: 13.4,
//     };

//     const map = new mapboxgl.Map({
//       container: this.mapContainer, // See https://blog.mapbox.com/mapbox-gl-js-react-764da6cc074a
//       style: "mapbox://styles/mapbox/streets-v9",
//       center: [lng, lat],
//       zoom,
//     });

//     var directions = new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//       unit: "metric",
//       profile: "mapbox/cycling",
//     });

//     map.addControl(directions, "top-left");
//   }

//   render() {
//     return (
//       <div className="map-wrapper">
//         <div ref={(el) => (this.mapContainer = el)} className="map" />
//       </div>
//     );
//   }
// }
