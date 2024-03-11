// import React, { useState } from "react";
// import PropTypes from "prop-types";

const ColorButtons = () => {
  // const [currentColor, setCurrentColor] = useState(initialColor);

  const changeColor = (e) => {
    console.log(e.target.id);
    // const newColor = e.target.id;
    // setCurrentColor(newColor);
    // onColorChange(newColor); // call the onColorChange callback with the new color
  };

  return (
    <div className="color-picker-container">
      <button onClick={changeColor} className="color-picker" style={{ backgroundColor: 'skyblue' }} id="skyblue"></button>
      <button onClick={changeColor} className="color-picker" style={{ backgroundColor: 'blue' }} id="blue"></button>
      <button onClick={changeColor} className="color-picker" style={{ backgroundColor: 'green' }} id="green"></button>
      <button onClick={changeColor} className="color-picker" style={{ backgroundColor: 'aqua' }} id="aqua"></button>
    </div>
  );
};

// ColorButtons.propTypes = {
//   initialColor: PropTypes.string, // specify the type of initialColor prop
//   onColorChange: PropTypes.func.isRequired // specify the type of onColorChange prop (a required function)
// };

// ColorButtons.defaultProps = {
//   initialColor: "skyblue" // set default value for initialColor prop
// };

export default ColorButtons;
