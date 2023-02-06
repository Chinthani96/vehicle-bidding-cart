import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VehicleCard from "../../components/vehicle/VehicleCard";
import { Vehicle, vehicleSelector } from "../../store/vehicle-slice";

const Vehicles = () => {
  const { brand } = useSelector(vehicleSelector) || [];
  const [vehiclesByBrand, setVehiclesByBrand] = useState<Vehicle[]>([]);

  useEffect(() => {
    getVehiclesByBrand();
  }, [brand]);

  const getVehiclesByBrand = async () => {
    if (brand) {
      await fetch("http://157.245.61.32:7979/vehicles?details.brand=" + brand)
        .then((resp) => resp.json())
        .then((data) => setVehiclesByBrand(data))
        .catch((err) => console.log(err));
    } else {
      await fetch("http://157.245.61.32:7979/vehicles")
        .then((resp) => resp.json())
        .then((data) => setVehiclesByBrand(data))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {vehiclesByBrand.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          name={vehicle.name}
          details={vehicle.details}
          id={vehicle.id}
        />
      ))}
    </>
  );
};

export default Vehicles;
