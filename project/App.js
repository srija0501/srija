import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import ScrollToTop from "./components/ScrollToTop";
import Featured from "./components/featured/Featured";
import PropertyList from "./components/propertyList/PropertyList";
import SignUpPage from "./pages/login/sign";
import Loginpage from "./pages/login/log";
import HotelDetails from "./Room/details";
import Hotels from "./Room/room";
import HotelDet from "./pages/list/hotel";
import BookingDetails from "./bookings/booking";
import OrderSummary from "./pages/list/summary";

function App() {
  return (

    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
       <Route path="/hotels/:hotelId" element={<HotelDet/>} />
       {/*  <Route path="/hotels/:Id" element={<HotelDetails />} /> */}
          <Route path="/hotels" element={<List />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/booking-details" element={<BookingDetails />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/propertyList" element={<PropertyList />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/room" element={<Hotels />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
