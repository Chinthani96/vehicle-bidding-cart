import BrandFilter from "../vehicle/BrandFilter";
import CartButton from "./CartButton";

const VBHeader = () => {
  return (
    <header className=" bg-header-color w-full h-20 flex py-5 px-10 justify-between">
      <h2 className="text-2xl font-bold text-bg">Bidding Cart</h2>
      <BrandFilter />
      <CartButton />
    </header>
  );
};

export default VBHeader;
