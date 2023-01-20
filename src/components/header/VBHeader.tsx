import CartButton from "./CartButton";

const VBHeader = () => {
  return (
    <header className=" bg-teal-700 w-full h-20 flex py-5 px-10 justify-between">
      <h2 className="text-2xl font-bold text-gray-800">Bidding Cart</h2>
      <CartButton />
    </header>
  );
};

export default VBHeader;
