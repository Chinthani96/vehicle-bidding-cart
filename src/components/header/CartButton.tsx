import { BsMinecartLoaded } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { showCart, uiSelector } from "../../store/ui-slice";
import { cartSelector } from "../../store/cart-slice";

const CartButton = () => {
  const dispatch = useDispatch();
  const { hasCartItems } = useSelector(uiSelector);
  return (
    <div className="">
      <div className="w-2 h-5">
        {hasCartItems && (
          <AiFillDollarCircle className="text-badge relative left-4 bottom-2" />
        )}
      </div>
      <BsMinecartLoaded
        className="text-3xl text-bg relative bottom-5"
        onClick={() => {
          dispatch(showCart());
        }}
      />
    </div>
  );
};

export default CartButton;
