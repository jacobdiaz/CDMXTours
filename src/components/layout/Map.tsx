import GoogleMapReact from "google-map-react";
import { useEffect } from "react";

type lpParams = {
  text: string;
};
const LocationPin = ({ text }: lpParams) => (
  <div className='pin'>
    <p className='pin-text'>{text}</p>
  </div>
);

const Map = () => {
  const location = {
    address: "Calle Versalles 88, 06600 Mexico City, Mexico",
    lat: 19.42755,
    lng: -99.15569,
  };

  useEffect(() => console.log(process.env.GOOGLE_MAPS_API_KEY), []);
  return (
    <div className='map'>
      <h2 className='map-h2'>Come Visit Us At Our Campus</h2>

      <div className='h-96 bg-red-500'>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: `${process.env.GOOGLE_MAPS_API_KEY}`,
          }}
          defaultCenter={location}
          defaultZoom={20}
        >
          <LocationPin text='Here' />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
