import React from "react";
import images from "@/assets";
import ServiceItem from "./Card";

const Services = () => {
  const services = [
    {
      title: "Partload",
      image: images.partload,
      description:
        "Prompt Customer Service support, Booking all types of goods in Partload",
      link: "/partload",
    },
    {
      title: "Truck Load",
      image: images.truck,
      description: "Online pickup requests, Offer all types of Full truck.",
      link: "/truck-load",
    },
    {
      title: "Trailers",
      image: images.trailers,
      description:
        "Prompt Customer Support with safe, in-time efficient service.",
      link: "/trailers",
    },
    {
      title: "Containers",
      image: images.containers,
      description:
        "Offer all types of 20,40 feet container, and project loads booking",
      link: "/containers",
    },
    {
      title: "Warehousing",
      image: images.warehouse,
      description: "Safe and competent services.",
      link: "/warehousing",
    },
    {
      title: "Customer Support",
      image: images.customers,
      description: "Reach out us for any queries.",
      link: "/customer-support",
    },
  ];
  return (
    <section id="services" className="m-5">
      <h2 className="font-semibold text-lg text-center">Our Services</h2>
        <hr className="text-black mx-auto w-5/6 border-green-600" />
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6">
        {services.map((item) => (
          <ServiceItem
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link}
          />
        ))}
    </div>
    </section>
  );
};

export default Services;
