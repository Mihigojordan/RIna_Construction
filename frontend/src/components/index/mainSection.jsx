import React, { useState } from "react";
import { Play } from "lucide-react";

function MainSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  
  const teamMembers = [
    {
      id: 1,
      name: "Eng. Rajesh Rani",
      position: "Chief Engineer & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        Whatsapp: "+1 (555) 123-4567",
        Envelope: "rajesh@raniconstruction.com",
      },
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616c723e932?w=400&h=400&fit=crop&crop=face",
      social: {
        Whatsapp: "+1 (555) 987-6543",
        Envelope: "priya@raniconstruction.com",
      },
    },
  ];

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1590725175023-93c6d4bb2ac3?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
    },
  ];

  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate team members
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  // Auto-rotate project images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="md:flex pb-10 overflow-hidden h-[320px] md:h-[850px] m-auto w-[100%] mb-4 rounded-lg p-4">
      <div className="relative border-2 w-[24%] rounded-lg mx-auto overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop)`,
          }}
        ></div>

        {/* Animated Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button
            onClick={() => setShowVideoModal(true)}
            className="relative w-16 h-16 flex items-center justify-center"
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: "#f97316", // Orange color for construction theme
              color: "#ffffff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px 5px rgba(249, 115, 22, 0.7), 0 0 40px 10px rgba(249, 115, 22, 0.5)",
              transform: "scale(1)",
              animation: "highPulse 2s infinite",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Play style={{ width: "32px", height: "32px" }} />
          </button>

          <style>
            {`
              @keyframes highPulse {
                0%, 100% {
                  transform: scale(1);
                  box-shadow: 0 0 20px 5px rgba(249, 115, 22, 0.7), 0 0 40px 10px rgba(249, 115, 22, 0.5);
                }
                50% {
                  transform: scale(1.2);
                  box-shadow: 0 0 30px 10px rgba(249, 115, 22, 0.9), 0 0 60px 20px rgba(249, 115, 22, 0.8);
                }
              }
            `}
          </style>
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 mr-4 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-w-5xl">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-lg font-semibold">Company Overview</h5>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
              </div>
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  style={{
                    position: "absolute",
                    height: "98%",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Rani Construction Company Overview"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className="relative w-full ml-4 mr-4 md:w-3/4 lg:w-1/2 mx-auto rounded-lg p-4 overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), #1e293b), url(https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop)`,
        }}
      >
        {/* Announcement Text */}
        <div className="text-center z-10 relative p-5">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Building Excellence Since 2010!
          </h1>
          <p className="text-sm md:text-lg">
            <b>Rani Construction Company Ltd</b> - Your trusted partner for all construction needs. 
            From <b>residential buildings</b> to <b>commercial complexes</b>, we deliver quality 
            construction services, architectural planning, and civil engineering solutions.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="absolute bottom-6 w-full flex flex-wrap justify-center gap-5">
          <a
            href="tel:+15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            📞 Call Now
          </a>
          <a
            href="mailto:info@raniconstruction.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            ✉️ Get Quote
          </a>
        </div>
      </div>

      <div className="w-[24%] rounded-lg">
        <div className="w-[98%] rounded-lg h-[48%] bg-gray-50 border-none">
          <div className="team-slider rounded-lg bg-slate-100 h-[100%]">
            <div className="h-[100%] mt-20">
              <img
                src={teamMembers[currentTeamIndex].image}
                alt={teamMembers[currentTeamIndex].name}
                className="w-36 h-36 text-center rounded-full m-auto object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {teamMembers[currentTeamIndex].name}
                </h3>
                <p className="text-gray-600 mb-4">{teamMembers[currentTeamIndex].position}</p>
                <div className="flex mt-2 space-x-6 text-orange-500 justify-center">
                  <a
                    href={`https://wa.me/${teamMembers[currentTeamIndex].social.Whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-700"
                  >
                    📱
                  </a>
                  <a
                    href={`mailto:${teamMembers[currentTeamIndex].social.Envelope}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-700"
                  >
                    ✉️
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[98%] rounded-lg h-[48%] mt-4 overflow-hidden">
          <div className="h-full">
            <div className="relative h-full">
              <img
                src={images[currentImageIndex].url}
                alt={`Construction Project ${images[currentImageIndex].id}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-semibold">Project Gallery</p>
                <p className="text-xs">Building Dreams into Reality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;