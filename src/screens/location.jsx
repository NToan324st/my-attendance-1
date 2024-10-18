import React, { useEffect, useState } from "react";
import { getPosition } from "rsuite/esm/DOMHelper";

function Location() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    async function getLocation() {
      try {
        await navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
    getLocation();
  }, []);
  return (
    <div className="border flex flex-col bg-gray">
      <div className="latitude flex ">
        <p className="bg-gray-dark px-5 py-2 w-28 text-center text-white">
          Vĩ độ
        </p>
        <p className="pl-4 w-full h-full ">{location.latitude}</p>
      </div>
      <div className="longitude flex">
        <p className="bg-gray-dark px-5 py-2 w-28 text-center text-white">
          Kinh độ
        </p>
        <p className="pl-4 w-full h-full">{location.longitude}</p>
      </div>
    </div>
  );
}

export default Location;
