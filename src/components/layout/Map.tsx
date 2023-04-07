import GoogleMapReact from "google-map-react";
import Link from "next/link";

const LocationPin = ({ lat, lng }: { lat: number; lng: number }) => (
  <Link href='https://goo.gl/maps/dHSVvem2Y6D4KMrA9' target='_blank'>
    <div
      data-tip='Calle Versalles 88, 06600 Mexico City, Mexico'
      className='tooltip tooltip-open absolute top-0 left-{{lng}}% transform -translate-x-1/2 -translate-y-full flex justify-center'
    >
      <div className='w-20 h-20 rounded-full bg-gray-500 bg-opacity-50 relative'>
        <div className='absolute w-10 h-10 rounded-full bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='w-full p-2'>
            <svg
              fill='#FFFFFF'
              viewBox='0 0 32 32'
              id='Icons'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M26,17c-0.5,0-1,0.1-1.5,0.2L22,6.8C21.9,6.3,21.5,6,21,6h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.2l1.2,5H10.9 c-0.1-0.8,0.2-1.7,0.8-2.3c0.3-0.3,0.4-0.7,0.2-1.1C11.8,9.2,11.4,9,11,9H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.2 c-0.3,0.9-0.4,1.8-0.2,2.7l-1.5,3.5C7,17.1,6.5,17,6,17c-3.3,0-6,2.7-6,6s2.7,6,6,6c3,0,5.4-2.2,5.9-5H15c0,0,0,0,0,0c0,0,0,0,0,0 c0.1,0,0.3,0,0.4-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0,0,0,0l6.3-8.1l0.6,2.5c-1.6,1.1-2.7,2.9-2.7,5 c0,3.3,2.7,6,6,6s6-2.7,6-6S29.3,17,26,17z M10.1,16.2l3.2,5.8h-1.4c-0.3-1.7-1.2-3.1-2.6-4L10.1,16.2z M8.5,19.9 c0.7,0.5,1.2,1.3,1.4,2.1H7.5L8.5,19.9z M6,27c-2.2,0-4-1.8-4-4s1.8-4,4-4c0.2,0,0.4,0,0.7,0.1l-1.6,3.5c-0.1,0.3-0.1,0.7,0.1,1 S5.7,24,6,24h3.9C9.4,25.7,7.9,27,6,27z M15.1,21.2L11.8,15H20L15.1,21.2z M26,27c-2.2,0-4-1.8-4-4c0-1.1,0.5-2.1,1.2-2.8l0.4,1.7 c0,0.2,0.1,0.4,0.3,0.5l1.4,1.3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-1.2-1.1l-0.5-2 c0.3-0.1,0.7-0.1,1-0.1c2.2,0,4,1.8,4,4S28.2,27,26,27z'></path>{" "}
            </svg>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const Map = () => {
  const location = {
    address: "Calle Versalles 88, 06600 Mexico City, Mexico",
    lat: 19.42755,
    lng: -99.15569,
  };
  // TODO setup api key in Amplify env
  return (
    <div>
      <div className='h-banner'>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: `${process.env.GOOGLE_MAPS_API_KEY}`,
          }}
          defaultCenter={location}
          defaultZoom={15}
        >
          <LocationPin lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
