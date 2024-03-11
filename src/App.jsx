import "./App.css";
import "./ColorButtons";
import Bar from "./Bar";
import ColorButtons from "./ColorButtons";

const random = Math.floor(Math.random() * 120) + 60;

function App() {
  const buildings = [
    {
      id: 1,
      height: random - 40,
      color: 'skyblue',
      windows: false
    },
    {
      id: 2,
      height: random,
      color: 'skyblue',
      windows: true
    },
    {
      id: 3,
      height: random - 20,
      color: 'skyblue',
      windows: true
    }
  ];
  const width = 70;

  return (
    <div className="app">
      <h1>Generate your town!</h1>
      <button>randomize</button>
      <div className="city-cont">
        {buildings.map((building, index) => (
          <Bar
            key={building.id}
            height={building.height}
            data={building}
            index={index}
            width={width}
            color={building.color}
            // windows={building.windows}
          />
        ))}

      </div>
        <ColorButtons />
    </div>
  );
}

export default App;
