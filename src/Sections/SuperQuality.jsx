import React from "react";

import Button from "../Components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section className="flex justify-between px-4 items-center max-lg:flex-col gap-10 w-full max-w-1440">
      <div className="lg:w-2/5">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You <span className="text-coral-red"> Super Quality </span>{" "}
          Shoes
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-lg leading-7">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="lg:max-w-lg mt-3 mb-11 font-montserrat text-slate-gray text-lg leading-7">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label="View Details" />
      </div>
      <div className="flex-1 lg:w-1/2 flex justify-center items-center   ">
        {" "}
        <img
          src={shoe8}
          alt="shoe colletion"
          width={570}
          height={522}
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
};
export default SuperQuality;
