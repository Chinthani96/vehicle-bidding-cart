import { useState } from "react";
import Biddings from "../components/bidding/Biddings";
import VBHeader from "../components/header/VBHeader";
import { useSelector } from "react-redux";
import { uiSelector } from "../store/ui-slice";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { cartVisible } = useSelector(uiSelector);

  return (
    <>
      {cartVisible && <Biddings />}
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
