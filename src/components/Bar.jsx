import { useState } from "react";
import PropTypes from "prop-types";
import Controller from "./Controller";

const Bar = ({ width, height, color }) => {
  const [isControllerVisible, setControllerVisible] = useState(false);
 const [heightUpd, setCurrentHeight] = useState(height);


  // function increment and decrement value
  const incrementHeight = () => {
    console.log("increment");
    setCurrentHeight(prevHeight => prevHeight + 20);
  };

  const decrementHeight = () => {
    console.log("decrement");
    setCurrentHeight(prevHeight => prevHeight - 20);
  }





  const toggleControllerVisibility = () => {
    setControllerVisible(!isControllerVisible);
  };

  return (
    <div
      style={{
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column'
      }}
       // Handle click event to toggle controller visibility
    >
      <svg width="100" height="250">
        <g onClick={toggleControllerVisibility} className="building">
          <rect
            x={0}
            y={250 - heightUpd}
            height={heightUpd}
            width={width}
            fill="transparent"
            border={color}
            stroke={color}
            strokeWidth="2"
          />
          <polygon
            points={`0,${250 - heightUpd} ${width / 2},${200 - heightUpd} ${width},${250 - heightUpd}`}
            fill="transparent"
            border={color}
            stroke={color}
            strokeWidth="2"
          />
        </g>
      </svg>

      {isControllerVisible && <Controller height={heightUpd} onIncrement={incrementHeight} onDecrement={decrementHeight}/>}
    </div>
  );
};

Bar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Bar;
