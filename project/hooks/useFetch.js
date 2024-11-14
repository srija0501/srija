// src/hooks/useFetchHotels.js
import { useEffect, useState } from "react";

const useFetchHotels = (city) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      if (!city) return; // Do not fetch if city is not provided

      try {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${city}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer YOUR_API_KEY`, // Replace with your actual API key
          },
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorMessage}`);
        }
        
        const data = await response.json();
        setHotels(data.data); // Adjust according to the response structure
      } catch (err) {
        console.error("Fetch error: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [city]);

  return { hotels, loading, error };
};

export default useFetchHotels;
