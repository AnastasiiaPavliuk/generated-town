import { useState } from "react";
import PropTypes from "prop-types";
import Controller from "./Controller";

const Bar = ({ width, height, color }) => {
  const [isControllerVisible, setControllerVisible] = useState(false);

  const test = () => {
    console.log("+");
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
            y={250 - height}
            height={height}
            width={width}
            fill="transparent"
            border={color}
            stroke={color}
            strokeWidth="2"
          />
          <polygon
            points={`0,${250 - height} ${width / 2},${200 - height} ${width},${250 - height}`}
            fill="transparent"
            border={color}
            stroke={color}
            strokeWidth="2"
          />
        </g>
      </svg>

      {isControllerVisible && <Controller height={height} onIncrement={test} onDecrement={test}/>}
    </div>
  );
};

Bar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Bar;
