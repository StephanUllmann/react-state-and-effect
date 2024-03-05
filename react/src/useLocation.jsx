import { useState, useEffect } from 'react';

export default function useLocation() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function onSuccess(data) {
          const {
            coords: { latitude: lat },
            coords: { longitude: long },
          } = data;
          setLocation({ lat, long });
        },
        function onError(err) {
          console.log(err);
        }
      );
    }
  }, []);
  return location;
}
