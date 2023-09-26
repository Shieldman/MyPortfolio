import React from "react";
import './MainSlider.css'
import SliderLeft from "../SliderLeft/SliderLeft";
import SliderRight from "../SliderRight/SliderRight";

const MainSlider = ({title}) => {

    return (
        <div className="main-slider">
            <SliderLeft />
            <SliderRight />
        </div>
    )
}

export default MainSlider;