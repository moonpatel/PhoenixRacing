import React from "react";
import './Cars.css';
import CarouselComponent from "./CarsCarousel";
import InfoWrapper from "./infowrapper";
function Cars()
{
    return (
        <div className="cars-page">
            <CarouselComponent />
            <InfoWrapper />
        </div>
    );
}
export default Cars;
