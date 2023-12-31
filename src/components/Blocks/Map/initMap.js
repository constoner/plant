import L from "../../../vendor/leaflet/leaflet.js";
import "../../../vendor/leaflet/leaflet.css";
import LATLNG from "./LATLNG.js";

let map = null;

const initMap = () => {
  if (map && map !== undefined && map !== null) {
    map.remove();
  }

  const markerIcon = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/images/vector/map-pin.svg",
    iconSize: [60, 120],
    iconAnchor: [30, 120],
  });

  const markerOptions = {
    icon: markerIcon,
  };

  const mapCenter = LATLNG.mapCenter;
  const shopPlace = LATLNG.shopCenter;

  const mapOptions = {
    attributionControl: false,
    zoomControl: false,
    scrollWheelZoom: false,
    boxZoom: true,
    keyboard: false,
    center: mapCenter,
    zoom: 12,
  };

  const enableMapZoom = (evt, map) => {
    if (evt.shiftKey === true) {
      map.scrollWheelZoom.enable();
    }
  };

  map = L.map("map", mapOptions);

  window.addEventListener("keydown", (evt) => enableMapZoom(evt, map));
  window.addEventListener("keyup", () => map.scrollWheelZoom.disable());

  L.tileLayer(
    "https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}@2x.jpg?key=oJPXf6zaBAZnjnBlkWnf"
  ).addTo(map);
  L.marker(shopPlace, markerOptions).addTo(map);
};

export default initMap;
