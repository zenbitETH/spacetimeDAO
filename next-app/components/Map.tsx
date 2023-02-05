import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo } from 'react';

const containerStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
    borderBottomLeftRadius: '22px',
    borderBottomRightRadius: '22px',
};

const Map: NextPage = () => {
  const libraries = useMemo(() => ['places'], []);

  const mapCenter = useMemo(
    () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className='GMAPS'>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={containerStyle}
        onLoad={() => console.log('Map Component Loaded...')}    
      >
          <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
    </GoogleMap>
    </div>
  );
};



export default Map;