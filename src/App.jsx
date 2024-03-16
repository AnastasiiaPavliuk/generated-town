import "./App.css";
import Bar from "./components/Bar";

// import ColorButtons from "./ColorButtons";
// import IncrementButton from "./IncrementButton";
// import DecrementButton from "./DecrementButton";


//  const [newcolor, setColor] = useState(color);

function App() {

  const random = Math.floor(Math.random() * 120) + 60;

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
      height: random - 20,
      windows: true
    }
  ];

  const width = 70;

  // const colorsArray = [ "skyblue"];

  return (
    <div className="app">
      <h1>Generate your town!</h1>
      <button>randomize</button>
        {/* <ColorButtons color = {colorsArray[0]} /> */}
      <div className="city-cont">
        {buildings.map((building) => (
          <Bar
            key={building.id}
            // buildingsdata={building}
            width={width}
            height={building.height}
            color={"skyblue"}

            // windows={building.windows}
          />
        ))}

      </div>

    </div>
  );
}

export default App;
