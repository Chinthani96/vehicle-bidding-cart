import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart-slice";
import { setHasCartItems } from "../../store/ui-slice";

type BiddingFormProps = {
  name: string;
  image: string;
  price: number;
};

const BiddingForm = (props: BiddingFormProps) => {
  const { name, image, price } = props;
  const dispatch = useDispatch();
  const [biddingPrice, setBiddingPrice] = useState<string>();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBiddingPrice(event.target.value);
  };

  const addToCartHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setHasCartItems());
    dispatch(addToCart({ name, price, image, biddingPrice }));
  };

  // TODO: Add form validation
  return (
    <form onSubmit={addToCartHandler} className="my-2">
      <input
        type="text"
        className="rounded-sm h-[2rem]"
        onChange={onChangeHandler}
      />
      <button className="rounded-sm bg-header-color text-bg mx-2 w-20 h-[2rem]">
        + Add
      </button>
    </form>
  );
};

export default BiddingForm;
