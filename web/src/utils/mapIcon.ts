import Leaflet from 'leaflet';

import mapMarkerImg from '../images/logo-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 10]
})

export default mapIcon;