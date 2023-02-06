import { Vehicle } from "../../store/vehicle-slice";
import BiddingForm from "../bidding/BiddingForm";

const VehicleCard = (props: Vehicle) => {
  const { name, details, id } = props;
  return (
    <div className="w-100 h-[35rem] rounded-md shadow-2xl p-5 text-text-color">
      <h3>{name}</h3>
      <hr className="my-2" />
      <img src={details.image} alt="car" className="min-h-[15rem]" />
      <p className="min-h-[8rem]">
        <b>{details.description}</b>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        repellat! Suscipit eligendi...
      </p>
      <BiddingForm />
    </div>
  );
};

export default VehicleCard;
