import { Vehicle } from "../../store/vehicle-slice";
import BiddingForm from "../bidding/BiddingForm";

const VehicleCard = (props: Vehicle) => {
  const { name, details, id } = props;
  return (
    <div className="w-100 h-[30rem] rounded-md shadow-2xl p-5 text-text-color">
      <h3>{name}</h3>
      <hr className="my-2" />
      <img src={details.image} alt="car" className="min-h-[15rem]" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
        assumenda, nemo nam suscipit ullam neque sit laudantium provident, culpa
        officiis repellendus obcaecati quam fuga in reiciendis fugit possimus
        nesciunt molestias.
      </p>
      <BiddingForm />
    </div>
  );
};

export default VehicleCard;
