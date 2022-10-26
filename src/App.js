import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
export default function App() {
  return (
    <div className="grid grid-rows-2 w-full justify-center items-center ">
      <Header />
      <Body />
    </div>
  );
}
