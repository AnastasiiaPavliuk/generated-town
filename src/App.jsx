import "./App.css";
import Bar from "./components/Bar";

// import ColorButtons from "./ColorButtons";
// import IncrementButton from "./IncrementButton";
// import DecrementButton from "./DecrementButton";


//  const [newcolor, setColor] = useState(color);

function App() {

  let random;
  random = Math.floor(Math.random() * 120) + 60;

  const randomize = () => {
    window.location.reload();
    // random = Math.floor(Math.random() * 140) + 60;
    // console.log(random);
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
      height: random - 20,
      windows: true
    }
  ];

  const width = 70;

  // const colorsArray = [ "skyblue"];

  return (
    <div className="app">
      <h1>Generate your town!</h1>
      <button onClick={randomize}>randomize</button>
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
