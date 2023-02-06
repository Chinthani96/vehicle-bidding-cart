import { useSelector } from "react-redux";
import { vehicleSelector } from "../../store/vehicle-slice";
import { useEffect, useState } from "react";

const BrandFilter = () => {
  const { vehicles } = useSelector(vehicleSelector) || [];
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    getBrands();
  }, [vehicles]);

  const getBrands = () => {
    const unique: string[] = [];
    vehicles.map((vehicle) =>
      unique.filter((a) => a == vehicle.details.brand).length > 0
        ? null
        : unique.push(vehicle.details.brand)
    );
    setBrands(unique);
  };

  return (
    <select name="cars" id="cars" className="w-1/4 h-7/6 bg-bg rounded-md px-4">
      {brands && brands.map((brand) => <option>{brand}</option>)}
      {/* <option value="volvo">Volvo</option> */}
    </select>
  );
};

export default BrandFilter;
