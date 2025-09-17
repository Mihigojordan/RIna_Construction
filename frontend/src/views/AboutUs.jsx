import React, { useEffect } from "react";
import AboutUsImage from "../assets/static/about1.jpg"; // Replace with construction image
import { aboutUsText, powerPatnersData } from "../staticData/data.js";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

const AboutUs = () => {
  const items = [
    'Homeowners seeking quality construction services',
    'Businesses looking for reliable building contractors',
    'Clients needing renovation or remodeling services',
    'Architects and engineers collaborating on projects',
    'Investors wanting sustainable and modern buildings'
  ];

  const navigate = useNavigate();

  // Power partners jsx element
  const powerPatnersElement = powerPatnersData.map((data) => {
    return (
      <div key={data.id} className="flex items-center gap-4">
        <div className="bg-[#47B2E4] w-20 text-white p-4 rounded-full">
          <img src={data.logo} alt="logos" className="w-full" />
        </div>
        <div>
          <h4 className="font-semibold text-xl leading-10 ">{data.title}</h4>
          <p className="text-gray-600 text-sm">{data.description}</p>
        </div>
      </div>
    );
  });

  // Scroll to top on page load
  useEffect(() => {
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header title="About Us" />

      {/* About Section */}
      <section className="relative py-4 lg:py-32 bg-gradient-to-br from-slate-50 via-primary-50 to-primary-50 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-red-400/20 to-primary-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-400/10 to-primary-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

            {/* Left Section - Content */}
            <div className="lg:w-1/2 w-full space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20 animate-fade-in-up">
                <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-primary-600 bg-clip-text text-transparent uppercase tracking-wider">
                  Our Story
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <span className="bg-gradient-to-r from-gray-900 via-primary-900 to-primary-900 bg-clip-text text-transparent">
                  {aboutUsText.headerTitle || "RIna Construction Ltd"}
                </span>
              </h1>

              <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At <span className="font-semibold text-primary-600">RIna Construction Ltd</span>, we specialize in providing top-notch construction services for residential, commercial, and industrial projects. Our mission is to deliver quality, reliability, and innovation in every building we create.
                </p>
              </div>

              <div className="flex items-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-primary-500 rounded-full"></div>
                <div className="h-1 w-8 bg-gradient-to-r from-primary-500 to-primary-500 rounded-full"></div>
                <div className="h-1 w-4 bg-gradient-to-r from-primary-500 to-primary-500 rounded-full"></div>
              </div>

              {/* Power Partners */}
              <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {powerPatnersElement.map((partner, index) => (
                    <div 
                      key={index}
                      className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 hover:border-primary-200/50 animate-fade-in-up"
                      style={{animationDelay: `${0.5 + index * 0.1}s`}}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                      {partner}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="lg:w-[47%] w-full ">
              <div className="relative animate-fade-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-500/20 rounded-3xl blur-2xl transform rotate-3 scale-105"></div>
                
                <div className="relative bg-white/20 backdrop-blur-sm p-3 rounded-3xl shadow-2xl border border-white/30">
                  <img
                    src={AboutUsImage}
                    alt="About Us"
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-br from-primary-400/30 to-primary-400/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-gradient-to-br from-primary-400/30 to-red-400/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in-right {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }

          .animate-fade-in-right {
            animation: fade-in-right 0.8s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </section>
    </div>
  );
};

export default AboutUs;
