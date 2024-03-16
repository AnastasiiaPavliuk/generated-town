import PropTypes from "prop-types";

const Controller = ({height, onIncrement, onDecrement}) => {

  return (
    <div className="controller-cont">
      <button onClick={onIncrement} >  {height}+</button>
      <button onClick = {onDecrement}> {height}-</button>
      <button>bin</button>
    </div>
  );
}

Controller.propTypes = {
  height: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Controller;
