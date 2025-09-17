import React from 'react';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FeaturedServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      name: "Residential Construction",
      category: "Housing",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=400&fit=crop",
      features: ["Custom Home Design", "Quality Materials", "Timely Delivery"],
      badge: "Popular"
    },
    {
      id: 2,
      name: "Commercial Buildings",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
      features: ["Office Complexes", "Retail Spaces", "Industrial Buildings"],
      badge: "Best Choice"
    },
    {
      id: 3,
      name: "Architectural Planning",
      category: "Design",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop",
      features: ["3D Modeling", "Structural Design", "Building Permits"],
      badge: "Professional"
    },
    {
      id: 4,
      name: "Civil Engineering",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=400&fit=crop",
      features: ["Road Construction", "Bridge Building", "Site Development"],
      badge: "Expertise"
    },
    {
      id: 5,
      name: "Interior Construction",
      category: "Finishing",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=400&fit=crop",
      features: ["Modern Interiors", "Custom Fixtures", "Quality Finishes"],
      badge: "Luxury"
    },
    {
      id: 6,
      name: "Renovation & Remodeling",
      category: "Renovation",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
      features: ["Home Upgrades", "Kitchen Remodeling", "Bathroom Renovation"],
      badge: "Transform"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full xl:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          style={{
            opacity: 1,
            transform: 'translateY(0px)',
            transition: 'all 0.6s ease'
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Construction Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building excellence across residential, commercial, and infrastructure projects - delivering quality construction solutions with professional expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                opacity: 1,
                transform: hoveredCard === service.id ? 'translateY(-10px)' : 'translateY(0px)',
                boxShadow: hoveredCard === service.id ? '0 25px 50px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  style={{
                    transform: hoveredCard === service.id ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.7s ease'
                  }}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-orange-600 text-sm font-medium">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  style={{
                    transform: hoveredCard === service.id ? 'scale(1.02)' : 'scale(1)',
                    transition: 'all 0.2s ease'
                  }}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  Get Quote <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Construction Project?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact Rani Construction Company Ltd today for a free consultation and detailed project estimate. 
              Let us bring your construction dreams to life with our professional expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Call: +1 (555) 123-4567
              </button>
              <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
                ✉️ Email: info@raniconstruction.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;