import React from "react";
import { Hotel, HotTub, LocationCity, Business } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const payingGuest = () => {
    navigate("/paying-guest");
  };
  const rentHomes = () => {
    navigate("/rent-homes");
  };
  const commercialProperties = () => {
    navigate("/commercial-properties");
  };
  const hotelsAndResorts = () => {
    navigate("/hotels&resorts");
  };
  return (
    <div>
      <h3>Services</h3>
      <div className='services-flex-row'>
        <div className='services-flex-item' onClick={payingGuest}>
          <HotTub />
          Paying Guest
        </div>
        <div className='services-flex-item' onClick={rentHomes}>
          <Hotel />
          Rent Homes
        </div>
        <div className='services-flex-item' onClick={commercialProperties}>
          <LocationCity />
          Commercial Properties
        </div>
        <div className='services-flex-item' onClick={hotelsAndResorts}>
          <Business />
          Hotels and Resorts
        </div>
      </div>
    </div>
  );
}

export default Services;
