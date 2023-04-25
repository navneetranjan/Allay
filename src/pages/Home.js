import Appbar from "../components/Appbar";
import Crousel from "../components/Crousel";
import Services from "../components/Services";
import React from "react";

function Home() {
  return (
    <div>
      <Appbar />
      <Crousel />
      <Services />
    </div>
  );
}

export default Home;
