import Featured from "../../components/featured/Featured";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import PropertyList from "../../components/propertyList/PropertyList";
import Reserve from "../../components/reserve/Reserve";
import Hotels from "../../Room/room";
import Hotel from "../hotel/Hotel";
import List from "../list/List";
import "./home.css";

const Home = () => {
  return (
    <div>

      <Header/>
      <div className="homeContainer">
      
    <Featured/>
    <Hotels/>
<PropertyList/>
        <Footer/>
  
      </div>
    </div>
  );
};

export default Home;
