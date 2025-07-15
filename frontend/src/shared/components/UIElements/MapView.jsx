import {
  MapContainer,
  TileLayer,
  ScaleControl,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView(props) {
  return (
    <MapContainer
      center={props.position}
      zoom={11}
      zoomControl={true}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png"
        attribution="Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
      />

      <Marker position={props.position}>
        <Popup>{props.name}</Popup>
      </Marker>
      <ScaleControl position="bottomleft" imperial={false} maxWidth={300} />
    </MapContainer>
  );
}

export default MapView;
