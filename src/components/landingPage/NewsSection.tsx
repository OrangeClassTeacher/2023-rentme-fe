import React from "react";
// import axios from "axios";
// import harizm from "../../images/harizm.jpeg";
import dog from "../../images/dog.png";
import Image from "next/image";

export const NewsSection = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <h1>News Section</h1>
      </div>

      <div className="w-full h-96 flex justify-evenly  my-8">
        <Image src={dog} className="w-auto h-auto" />
        <Image src={dog} className="w-auto h-auto" />
        <Image src={dog} className="w-auto h-auto" />
        <Image src={dog} className="w-auto h-auto" />
        {/* <div className="w-2/4">
        <Image src={harizm} className="w-full h-full" />
      </div>
      <div className="w-2/4">
        <Image src={logo} className="w-full h-full" />
      </div> */}
      </div>
    </div>
  );
};
