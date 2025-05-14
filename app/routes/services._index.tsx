import React, { useState, useEffect } from "react";
import HeroBlog from "../components/blog/HeroBlog";
import Btn from "../components/Btn";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import FaqComponent from "../components/FaqComponent";
import { useGetServicesQuery } from "../redux/apiSlice";
import Loader from "../components/Loader";
import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "canonical", href: "https://sheraian.co.uk/services" },
];

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Sheraian Services: Web Development, UI/UX, Problem Solving, IT Consulting",
    },
    {
      name: "description",
      content:
        "Sheraian offers Full Stack Development solutions including Mobile Apps, UI, E-Commerce, Website Development, API integration, Performance Tuning and Maintenance Support.",
    },
  ];
};

function ServicePage() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const [services, setServices] = useState([]);

  const {
    data: ServiceData,
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetServicesQuery({ page, limit });

  useEffect(() => {
    if (ServiceData?.data) {
      setServices((prev) => [...prev, ...ServiceData.data]);
    }
  }, [ServiceData]);

  return (
    <>
      <div className="flex flex-col items-center gap-16 bg-[#F5F5F5]">
        <HeroBlog
          P_BtnText={"Services"}
          H_Text={<>Services & Solutions</>}
          M_Text={"Take your company to new heights with our solutions."}
          isSBtnShow={false}
          S_BtnText={"Explore More"}
          onpress={undefined}
        />
        <div className="flex flex-col items-center py-5 gap-10 w-[90%] mx-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-4">
            {isLoading && page === 1 ? (
              <Loader />
            ) : services.length > 0 ? (
              services.map((service, index) => (
                <motion.div
                  key={service.id || index} // Ensure unique key
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard item={service} />
                </motion.div>
              ))
            ) : (
              <p className="text-black">No data available</p>
            )}
          </div>
          {ServiceData?.next_page && (
            <Btn
              S_BtnText={"Load More"}
              onpress={() => setPage((prev) => prev + 1)}
            />
          )}
        </div>
        <FaqComponent />
      </div>
    </>
  );
}

export default ServicePage;
