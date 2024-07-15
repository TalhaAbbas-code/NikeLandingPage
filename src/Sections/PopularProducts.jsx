import React from "react";
import { products } from "../constants";
import PopularProductCard from "../Components/PopularProductCard";

const PopularProducts = () => {
  return (
    <div className="">
      <div className="flex  flex-col ml-4  max-sm:ml-4  max-w-1440">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} products={product} />
        ))}
      </div>
    </div>
  );
};
export default PopularProducts;
