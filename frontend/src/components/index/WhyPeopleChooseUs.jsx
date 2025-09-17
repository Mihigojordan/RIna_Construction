import React from "react";
import { NavLink } from "react-router-dom";
import {
  TruckIcon,
  HeartIcon,
  GlobeAltIcon,
  ClipboardDocumentIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from "@heroicons/react/16/solid";
import QualityCard from "../QualityCard";

const WhyPeopleChooseUs = () => {
  const qualities = [
    {
      icon: TruckIcon,
      title: "Timely Project Delivery",
      par: "Efficient and on-schedule completion of construction projects, from residential homes to commercial buildings.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: HeartIcon,
      title: "Expert Craftsmanship",
      par: "Skilled engineers and builders delivering high-quality construction with precision and care.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: GlobeAltIcon,
      title: "Comprehensive Services",
      par: "Wide range of civil engineering solutions, including house plans, structural design, and site management.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ClipboardDocumentIcon,
      title: "Quality Assurance",
      par: "All projects backed by rigorous quality checks and warranties for lasting durability and client satisfaction.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: ClockIcon,
      title: "Efficient Processes",
      par: "Streamlined project management and fast turnaround times to keep your construction on track.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: UserGroupIcon,
      title: "Client Support",
      par: "Dedicated support team to guide you through every step of your construction or design project.",
      color: "from-teal-500 to-cyan-500"
    },
  ];

  return (
    <div className="py-20 px-2 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-9xl mx-auto -mt-20">
        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="space-y-4">
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  Why Choose BuildEasy
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Your Trusted Construction
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                    & Engineering Partner
                  </span>
                </h1>
                <p className="text-gray-300 text-lg max-w-2xl">
                  Discover why clients choose BuildEasy for expert construction, innovative house plans, and reliable engineering services.
                </p>
              </div>
              <NavLink
                to="/about"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View More
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </NavLink>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualities.map((quality, i) => (
                <QualityCard
                  key={i}
                  SvgIcon={quality.icon}
                  title={quality.title}
                  des={quality.par}
                  color={quality.color}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPeopleChooseUs;