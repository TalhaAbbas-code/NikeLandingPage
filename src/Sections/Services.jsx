import React from "react";
import { services } from "../constants";
import ServiceCard from "../Components/ServiceCard";

const Services = () => {
  return (
    <div className="flex my-0   justify-center w-full flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} services={service} />
      ))}
    </div>
  );
};
export default Services;
