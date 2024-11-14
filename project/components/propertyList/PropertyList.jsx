import { useNavigate } from "react-router-dom";
import "./propertyList.scss";

const PropertyList = () => {
  // Static mock data for property types
  const data = [
    { type: "Hotel", count: 10 },
    { type: "Apartment", count: 5 },
    { type: "Resort", count: 8 },
    { type: "Villa", count: 3 },
   
  ];

  const images = [
    "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    "https://images.pexels.com/photos/3351868/pexels-photo-3351868.jpeg",
    "https://images.pexels.com/photos/1996163/pexels-photo-1996163.jpeg",
   
  ];

  const navigate = useNavigate();

  return (
    <div className="list container" id="list">
      <br></br>
      <br></br>
      <h1 className="homeTitle mb-3">Property by type</h1>
      <div className="pList row">
        {data.length === 0 ? (
          <div className="loading">Loading...</div>
        ) : (
          images.map((img, i) => (
            <div className="col" key={i}>
              <div className="pListItem" onClick={() => navigate("/hotels", { state: { type: data[i]?.type } })}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PropertyList;
