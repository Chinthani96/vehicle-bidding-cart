import { useState } from "react";
import Biddings from "../components/bidding/Biddings";
import VBHeader from "../components/header/VBHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const [showCart, setShowCart] = useState(true);

  return (
    <>
      {showCart && <Biddings />}
      <div className="h-screen bg-bg overflow-auto">
        <VBHeader />
        <div className="grid w-100 h-5/6 p-5 m-10 grid-cols-3 gap-x-8 gap-y-3 ">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;
