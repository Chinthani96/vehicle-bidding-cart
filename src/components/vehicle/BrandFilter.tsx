import { useDispatch, useSelector } from "react-redux";
import { setBrand, vehicleSelector } from "../../store/vehicle-slice";
import { ChangeEvent, useEffect, useState } from "react";

const BrandFilter = () => {
  const { vehicles } = useSelector(vehicleSelector) || [];
  const [brands, setBrands] = useState<string[]>([]);
  const dispatch = useDispatch();

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

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value == "None") {
      dispatch(setBrand(""));
    } else {
      dispatch(setBrand(e.target.value));
    }
  };

  return (
    <select
      name="cars"
      id="cars"
      className="w-1/4 h-7/6 bg-bg rounded-md px-4"
      onChange={handleOnChange}
    >
      {brands &&
        brands.map((brand) => (
          <option key={brands.indexOf(brand)} value={brand}>
            {brand}
          </option>
        ))}
      <option defaultValue="">None</option>
    </select>
  );
};

export default BrandFilter;
