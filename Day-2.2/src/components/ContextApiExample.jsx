import React, { useContext } from "react";
import DummyHeader from "./DummyHeader";
import DummySection from "./DummySection";
import DummyFooter from "./DummyFooter";
import { DataContext } from "../context/UserContext";

const ContextApiExample = () => {
  const Data = useContext(DataContext);

  return (
    <>
      <div>I am Context Api Example {Data.city} </div>
      <DummyHeader name={Data.name} />
      <DummySection age={Data.age} />
      <DummyFooter email={Data.email} />
    </>
  );
};

export default ContextApiExample;
