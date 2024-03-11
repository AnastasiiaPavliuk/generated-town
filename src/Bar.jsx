import { useState } from "react";
import PropTypes from "prop-types";

const Bar = ({ data, width, color }) => {
  const [height, setHeight] = useState(data.height);
  const [newcolor, setColor] = useState(color);

  const handleIncrement = () => {
    setHeight(height => height + 10);
  };

  const handleDecrement = () => {
    setHeight(height => height - 10);
  };

  const changeColor = (e) => {
    setColor(e.target.id);
  }


 return (
    <div style={{ width: 'fit-content', display:'flex', flexDirection: 'column'} }>
      <svg width="100" height="250">
        <g key={data.id}>
          <rect
            x= {0}
            y={220 - height}
            height={height}
            width={width}
              fill="transparent"
            border={newcolor}
              stroke={newcolor}
            strokeWidth="4"
          />
<polygon points={`0,${220 - height} ${width / 2},${200 - height} ${width},${220 - height}`}              fill="transparent"
            border={newcolor}
              stroke={newcolor}
            strokeWidth="4" />

        </g>
      </svg>

      <button onClick={handleIncrement} disabled={height >= 200}> {height}+</button>
      <button onClick={handleDecrement} disabled={height <= 20}>-</button>

      <div className="color-picker-container">
        <button  onClick={changeColor} className="color-picker" style={{ backgroundColor: 'skyblue' }}  id="skyblue"></button>
        <button onClick={changeColor} className="color-picker" style={{ backgroundColor: 'blue' }} id="blue"></button>
        <button onClick={changeColor} className="color-picker" style={{ backgroundColor: 'green' }} id="green"></button>
        <button onClick={changeColor} className="color-picker" style={{ backgroundColor: 'aqua' }} id="aqua"></button>
      </div>

    </div>
);
};

Bar.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    // color: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  // windows: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default Bar;
