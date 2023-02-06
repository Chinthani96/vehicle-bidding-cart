import Vehicles from "./containers/vehicles/Vehicles";
import Layout from "./hoc/Layout";
import { useDispatch } from "react-redux";
import { addToVehicles } from "./store/vehicle-slice";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllVehicles();
  }, []);

  const fetchAllVehicles = async () => {
    await fetch("http://157.245.61.32:7979/vehicles")
      .then((resp) => resp.json())
      .then((data) => dispatch(addToVehicles(data)))
      .catch((err) => console.log(err));
  };
  return (
    <Layout>
      <Vehicles />
    </Layout>
  );
};

export default App;
