import React from "react";

const ServiceCard = ({ services }) => {
  return (
    <section className="  flex-1  sm:min-w-[300px] w-full rounded-[20px] shadow-2xl   px-6 py-16 ">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img
          src={services.imgURL}
          alt={services.label}
          width={24}
          height={24}
        />
      </div>
      <h1 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {services.label}{" "}
      </h1>
      <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-lg leading-7">
        {services.subtext}
      </p>
    </section>
  );
};
export default ServiceCard;
