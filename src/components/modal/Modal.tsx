import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { hideCart } from "../../store/ui-slice";

const Backdrop = (props: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  return (
    <section
      className="h-screen bg-backdrop flex justify-center absolute bottom-0 left-0 right-0"
      onClick={() => {
        dispatch(hideCart());
      }}
    >
      {props.children}
    </section>
  );
};

const ModalOverlay = (props: { children: React.ReactNode }) => {
  return (
    <div className="h-5/6 bg-header-color m-6 p-6 rounded-md w-4/6">
      {props.children}
    </div>
  );
};

const PortalElement: any = document.getElementById("overlay");

const Modal = (props: { children: React.ReactNode }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop>
          <ModalOverlay>{props.children}</ModalOverlay>
        </Backdrop>,
        PortalElement
      )}
    </>
  );
};

export default Modal;
