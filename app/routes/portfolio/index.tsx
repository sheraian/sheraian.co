import { LinksFunction, MetaFunction } from "@remix-run/node";
import HeroBlog from "../../components/blog/HeroBlog";
import FaqComponent from "../../components/FaqComponent";
import PortfolioComp from "../../components/PortfolioComp";
export const links: LinksFunction = () => [
  { rel: "canonical", href: "https://sheraian.co.uk/portfolio" },
];

export const meta: MetaFunction = () => {
  return [
    {
      title: "Web & App Development Projects by Sheraian",
    },
    {
      name: "description",
      content:
        "Sheraian offers Full Stack Development solutions including Mobile Apps, UI, E-Commerce, Website Development, API integration, Performance Tuning and Maintenance Support.",
    },
  ];
};

function PortfolioPage() {
  return (
    <div className=" flex flex-col items-center gap-5 bg-[#F5F5F5]">
      <HeroBlog
        P_BtnText={"Portfolio"}
        H_Text={<>Portfolio</>}
        M_Text={
          "We specialize in delivering custom IT projects that enhance efficiency, streamline operations, and drive business growth."
        }
        isSBtnShow={false}
        S_BtnText={"Explore More"}
        onpress={undefined}
      />
      <div className="w-full overflow-hidden">
        <PortfolioComp />
      </div>

      <FaqComponent />
    </div>
  );
}

export default PortfolioPage;
