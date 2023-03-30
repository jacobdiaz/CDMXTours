import process from "process";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
    <div>
      <GoogleMapReact />
    </div>
  );
};

export default Map;
