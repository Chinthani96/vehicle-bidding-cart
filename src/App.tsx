import "./App.css";
import VBHeader from "./components/header/VBHeader";
import Vehicles from "./containers/vehicles/Vehicles";

const App = () => {
  return (
    <div className="App bg-bg overflow-auto">
      <VBHeader />
      <Vehicles />
    </div>
  );
};

export default App;
