import { BsMinecartLoaded } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { showCart } from "../../store/ui-slice";

const CartButton = () => {
  const dispatch = useDispatch();
  return (
    <BsMinecartLoaded
      className="text-3xl text-bg"
      onClick={() => {
        dispatch(showCart());
      }}
    />
  );
};

export default CartButton;
