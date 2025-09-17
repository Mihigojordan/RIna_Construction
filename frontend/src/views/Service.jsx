import React from "react";
import Header from "../components/Header";
import { Phone, Mail, MapPin } from "lucide-react";
import image1 from '../assets/Service/image1.jpg'
import image2 from '../assets/Service/image2.jpg'
import image3 from '../assets/Service/image3.jpg'
import image4 from '../assets/Service/image4.jpg'
import image5 from '../assets/Service/image5.jpg'
import image6 from '../assets/Service/image6.jpg'



const Service = () => {
  const ArrowUpIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

  const services = [
    {
      id: 1,
      name: "Construction Services",
      description: "Complete construction solutions from foundation to finishing with expert craftsmanship and quality materials.",
      image: image1,
      contact: "+250 788 123 456"
    },
    {
      id: 2,
      name: "Raw Materials Supply",
      description: "Premium quality construction materials including cement, steel, bricks, and aggregates sourced from trusted suppliers.",
      image: image6,
      contact: "+250 788 123 457"
    },
    {
      id: 3,
      name: "primaryprint & Design",
      description: "Professional architectural primaryprints and structural designs tailored to your vision and requirements.",
      image: image2,
      contact: "+250 788 123 458"
    },
    {
      id: 4,
      name: "Project Management",
      description: "End-to-end project management ensuring timely delivery, quality control, and budget optimization.",
      image: image3,
      contact: "+250 788 123 459"
    },
    {
      id: 5,
      name: "Interior Finishing",
      description: "Expert interior finishing services including flooring, painting, electrical, and plumbing installations.",
      image: image4,
      contact: "+250 788 123 460"
    },
    {
      id: 6,
      name: "Maintenance & Repair",
      description: "Comprehensive maintenance and repair services to keep your property in excellent condition year-round.",
      image: image5,
      contact: "+250 788 123 461"
    }
  ];

  return (
    <div>
      <Header />
      
   

      {/* Services Grid */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-10">
        <div className="max-w-8xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 -mb-8 mt-4">
              What We Offer
            </h2>
            {/* <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-3xl">
                  <div className="p-6 pb-0">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-2 text-base">
                    {service.description}
                  </p>

               
   <a
          href="https://wa.me/250786136396"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#47B2E4] to-[#293751] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="mr-2 text-sm">Contact Rani Construction</span>
          <ArrowUpIcon className="w-3 h-3 transform rotate-45 transition-transform duration-300" />
        </a>
                </div>
              </div>
            ))}
          </div>
</div>
      </div>
    </div>
  );
};

export default Service;