// import { useState } from "react";

const ColorSlider = ({ color, handleSliderChange }) => {

  return (
    <div>
      <input
        type="range"
        min="160"
        max="210"
        value={color}
        onChange={handleSliderChange} // Call the parent function when the slider changes
        style={{ width: '200px' }}
      />
    </div>
  );
};


export default ColorSlider;
