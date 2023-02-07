import Modal from "../modal/Modal";
import Bidding from "./Bidding";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../store/cart-slice";
import { hideCart } from "../../store/ui-slice";

const Biddings = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector(cartSelector);

  return (
    <Modal>
      <div className="h-5/6">
        {cartItems.map((item) => (
          <Bidding
            key={cartItems.indexOf(item)}
            name={item.name}
            price={item.price}
            image={item.image}
            biddingPrice={item.biddingPrice}
          />
        ))}
      </div>
      <hr />
      <div className="relative bottom-0 left-0">Total: ${totalAmount}</div>
      <button
        className="rounded-md bg-bg text-header-color my-2 w-20 h-[2rem]"
        onClick={() => {
          dispatch(hideCart());
        }}
      >
        Close
      </button>
    </Modal>
  );
};

export default Biddings;
