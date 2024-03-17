import "./App.css";
import { useState } from "react";
import Bar from "./components/Bar";
import ColorSlider from "./components/ColorSlider";

function App() {

  let random;
  random = Math.floor(Math.random() * 120) + 60;

  const randomize = () => {
    window.location.reload();
    // random = Math.floor(Math.random() * 140) + 60;
    // console.log(random);
  };

   const [color, setColor] = useState(160);

   const handleSliderChange = (event) => {
    setColor(parseInt(event.target.value)); // Update color with slider value
  };



  const buildings = [
    {
      id: 1,
      height: random - 40,
      windows: false
    },
    {
      id: 2,
      height: random,
      windows: true
    },
    {
      id: 3,
      height: random - 20,
      windows: true
    }

    ,{
      id: 4,
      height: random - 10,
      windows: true
    }
  ];

  const width = 70;


  return (
    <div className="app">
      <h1>Generate your town!</h1>
      <button onClick={randomize}>randomize</button>

        <ColorSlider color={color} handleSliderChange={handleSliderChange}/>

      <div className="city-cont" style={{ gap: '2px', borderColor: `hsl(${color}, 100%, 50%)`, }}>
        {buildings.map((building) => (
          <Bar
            key={building.id}
            width={width}
            height={building.height}
            color={`hsl(${color}, 70%, 50%)`}
            // windows={building.windows}
          />
        ))}
      </div>
      <button style={{ height: "40px" }}>Add Building</button>

    </div>
  );
}

export default App;
