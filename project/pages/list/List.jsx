import "./list.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import SearchItem from "../../components/searchItem/SearchItem";
import Empty from "./Empty";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || "");
  const [dates, setDates] = useState(location.state?.dates || [
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/countries`);
        const countries = response.data;

        console.log("Countries fetched:", countries); // Debugging log

        const selectedCountry = countries.find(
          (country) =>
            country.countryName.toLowerCase() === destination.toLowerCase()
        );

        setFilteredHotels(selectedCountry ? selectedCountry.hotels : []);
      } catch (err) {
        console.error("Error fetching hotels:", err);
        setError("Failed to load hotels");
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [destination]);

  return (
    <div>
      <Header type="list" />
      <div className="listContainer container">
        <h3>Choose from a wide range of reservations</h3>
        <div className="listWrapper row gy-5">
          <div className="col-md-12 col-lg-8">
            <div className="listResult">
              {loading ? (
                <p>Loading hotels...</p>
              ) : error ? (
                <p>{error}</p>
              ) : filteredHotels.length === 0 ? (
                <Empty />
              ) : (
                <div className="row gy-4">
                  {filteredHotels.map((hotel) => (
                    <SearchItem date={dates} item={hotel} key={hotel.id} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
