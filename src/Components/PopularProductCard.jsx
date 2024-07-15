import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ products }) => {
  return (
    <div className="px-4 my-6  w-auto">
      <img
        src={products.imgURL}
        alt="shoe colletion"
        width={282}
        height={282}
      />
      <div className="mt-8 flex gap-2  ">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <div className=" mt-2 text-2xl leading-normal font-semibold font-palanquin">
        <p>{products.name}</p>
      </div>

      <div className=" mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        <p>{products.price}</p>
      </div>
    </div>
  );
};
export default PopularProductCard;
