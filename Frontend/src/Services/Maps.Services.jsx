import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    border: "none", // No border
    backgroundColor: "black",
  };

  const center = {
    lat: 37.7749, // Latitude of San Francisco (example)
    lng: -122.4194, // Longitude of San Francisco (example)
  };
  const [currentLocation, setCurrentLocation] = useState(center);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({
        lat: latitude,
        lng: longitude,
      });
    });
    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({
        lat: latitude,
        lng: longitude,
      });
    });
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    const updateLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({
          lat: latitude,
          lng: longitude,
        });
      });
    };
    updateLocation();
    const id = setInterval(updateLocation, 10000);
    return () => clearInterval(id);
  }, []);
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={15}
      >
        {/* Example marker */}
        <Marker position={currentLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
