// CaseStudy.jsx
import React from "react";
import CaseStudyCard from "./CaseStudyCard";
import { BuildingLibraryIcon, PencilSquareIcon, TruckIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import caseImg1 from "../../assets/images/casestudy/hair.jpg";
import caseImg2 from "../../assets/images/casestudy/home2.webp";
import caseImg3 from "../../assets/images/casestudy/english.jpg";
import caseImg4 from "../../assets/images/casestudy/home.jpg";

const CaseStudy = () => {
  const Cases = [
    {
      imageBg: caseImg1,
      Icon: BuildingLibraryIcon,
      head: "Commercial Building Construction",
      category: "Commercial Projects"
    },
    {
      imageBg: caseImg3,
      Icon: PencilSquareIcon,
      head: "Architectural Design & Planning",
      category: "Design Services"
    },
    {
      imageBg: caseImg2,
      Icon: TruckIcon,
      head: "Infrastructure Development",
      category: "Civil Engineering"
    },
    {
      imageBg: caseImg4,
      Icon: UserGroupIcon,
      head: "Residential Construction",
      category: "Housing Projects"
    },
  ];

  return (
    <div className="py-2 px-2 mb-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-9xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Construction Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how Rani Construction Company Ltd has delivered exceptional building solutions through innovative design and quality construction
          </p>
        </div>

        {/* Cards Grid - 4 per row on xl screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {Cases.map((caseStudy, i) => (
            <CaseStudyCard
              key={i}
              bgImage={caseStudy.imageBg}
              SvgIcon={caseStudy.Icon}
              h1={caseStudy.head}
              category={caseStudy.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;