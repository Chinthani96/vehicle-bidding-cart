import Modal from "../modal/Modal";
import Bidding from "./Bidding";

const Biddings = () => {
  return (
    <Modal>
      <div className="h-5/6">
        <Bidding />
      </div>
      <hr />
      <div className="relative bottom-0 left-0">Total: $2000000</div>
    </Modal>
  );
};

export default Biddings;
