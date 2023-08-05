import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

function LocationAutocomplete() {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const handleSelect = async (selectedAddress) => {
    const results = await geocodeByAddress(selectedAddress);
    const latLng = await getLatLng(results[0]);
    setAddress(selectedAddress);
    setCoordinates(latLng);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Enter a location',
                className: 'location-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {coordinates.lat && coordinates.lng && (
        <div>
          <h2>Selected Location:</h2>
          <p>Address: {address}</p>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
        </div>
      )}
    </div>
  );
}

export default LocationAutocomplete;


// /Mapbox api =------------------------------
// import React, { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "mapbox-gl-geocoder";
// import "mapbox-gl/dist/mapbox-gl.css";
// import "mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoiYXB1cnYxNTI1IiwiYSI6ImNsajN2bmQzNDA4YXozZW1qZ2g5ODg2NWkifQ.1Vsoa6PyVC8PQpHPffKBow";

// const MapboxAutocomplete = () => {
//   const mapContainerRef = useRef(null);

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [0, 0],
//       zoom: 1,
//     });

//     const geocoder = new MapboxGeocoder({
//       accessToken: mapboxgl.accessToken,
//       mapboxgl: mapboxgl,
//       countries: "IN", // Set the country to India
//       types: "place",
//     });

//     map.addControl(geocoder);

//     return () => map.remove();
//   }, []);

//   return <div ref={mapContainerRef} style={{ height: "400px" }} />;
// };

// export default MapboxAutocomplete;
