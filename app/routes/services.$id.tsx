import { useParams } from "@remix-run/react";
import HeroBlog from "../components/blog/HeroBlog";
import FaqComponent from "../components/FaqComponent";
import DOMPurify from "dompurify";
import "react-quill/dist/quill.snow.css";
import { useGetServicesDetailsQuery } from "../redux/apiSlice";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import BenefitsComp from "../components/BenefitsComp";
import { useEffect } from "react";

function ServiceDetailPage() {
  const { slug, id } = useParams();
  const { data, isLoading, isError, error } = useGetServicesDetailsQuery({
    id,
  });
  useEffect(() => {
    if (data?.name) {
      document.title = data?.name;
      const metaDescription = document.querySelector(
        "meta[name='description']"
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", data?.description || "");
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = data?.description || "";
        document.head.appendChild(newMeta);
      }
      let canonicalLink = document.querySelector("link[rel='canonical']");
      const canonicalURL = `https://sheraian.co.uk/services/${id}`;
      if (canonicalLink) {
        canonicalLink.setAttribute("href", canonicalURL);
      } else {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        canonicalLink.setAttribute("href", canonicalURL);
        document.head.appendChild(canonicalLink);
      }
    }
  }, [data]);
  console.log(data);

  return isLoading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader />
    </div>
  ) : isError ? (
    <NotFound />
  ) : (
    <div className=" flex flex-col items-start gap-10 lg:gap-20 bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"Careers"}
        H_Text={<>{data?.name || slug}</>}
        M_Text={data?.description}
        isSBtnShow={false}
        S_BtnText={"Explore More"}
        onpress={undefined}
      />
      <div className="w-[90%] mx-auto flex flex-col items-start justify-center text-start gap-5">
        <img
          src={data?.img}
          alt="Blog Image"
          className="w-full h-auto  object-cover rounded-xl"
        />
        <span
          className="w-full text-[1.5rem] sm:text-[2.0rem] md:text-[2.5rem] lg:text-[3.0rem] text-start font-semibold 
  leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem] break-words capitalize"
        >
          {data?.name || slug}
        </span>
        <div
          className="ql-editor w-full v text-base md:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.content),
          }}
        />
      </div>
      <BenefitsComp serviceId={id} />
      <FaqComponent />
    </div>
  );
}

export default ServiceDetailPage;
