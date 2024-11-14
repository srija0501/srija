import im1 from "../../images/im1.jpg";
import "./featured.scss";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();

  const handleExploreClick = (city) => {
    // Navigate to the list page with the correct destination (city) in the state
    navigate("/hotels", { state: { destination: city } });
  };

  return (
    <div className="container">
      <h1 className="homeTitle mb-3">Property by Cities</h1>
      <div className="featured row gy-3 gx-md-3 gx-3 justify-content-center">
        <div className="col-md-6 col-lg-3 col-6">
          <div className="featuredItem">
            <img src="https://i.pinimg.com/control/236x/01/1e/65/011e655237835f908bfd1f8a872e2d6a.jpg" alt="" className="featuredImg img-fluid" />
            <div className="featuredTitles">
              <h1>Malaysia</h1>
              <button
                className="exploreButton"
                onClick={() => handleExploreClick("Malaysia")}>
                Explore
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 col-6">
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="featuredImg img-fluid"
            />
            <div className="featuredTitles">
              <h1>Sweden</h1>
              <button
                className="exploreButton"
                onClick={() => handleExploreClick("Sweden")}
              >
                Explore
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 col-6">
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/3458997/pexels-photo-3458997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="featuredImg img-fluid"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <button
                className="exploreButton"
                onClick={() => handleExploreClick("London")}
              >
                Explore
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 col-6">
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/564x/95/d2/c3/95d2c3a166788eed8a6c49c0208896d8.jpg"
              alt=""
              className="featuredImg img-fluid"
            />
            <div className="featuredTitles">
              <h1>Dubai</h1>
              <button
                className="exploreButton"
                onClick={() => handleExploreClick("Dubai")}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
