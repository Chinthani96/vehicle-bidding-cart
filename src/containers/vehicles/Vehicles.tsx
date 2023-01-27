import VehicleCard from "../../components/vehicle/VehicleCard";

const Vehicles = () => {
  return (
    <>
      <div className="grid w-100 h-5/6 p-5 m-10 grid-cols-3 gap-x-8 gap-y-3 ">
        <VehicleCard />
      </div>
    </>
  );
};

export default Vehicles;
