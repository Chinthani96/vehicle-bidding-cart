import "./App.css";
import VBHeader from "./components/header/VBHeader";
import Vehicles from "./containers/vehicles/Vehicles";

const App = () => {
  return (
    <div className="App bg-slate-800">
      <VBHeader />
      <Vehicles />
    </div>
  );
};

export default App;
