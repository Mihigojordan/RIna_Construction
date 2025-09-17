import { useState } from "react";
import { 
  Users, 
  Target, 
  Award, 
  Clock, 
  Shield, 
  Zap,
  Heart,
  CheckCircle,
  Star,
  ArrowRight,
  Eye,
  TrendingUp,
  Building,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  GraduationCap
} from "lucide-react";
import HeaderBanner from "../components/HeaderBanner";

export default function AboutPage() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const stats = [
    { number: "200+", label: "Completed Projects", icon: <Building className="w-8 h-8" /> },
    { number: "15+", label: "Years Experience", icon: <Calendar className="w-8 h-8" /> },
    { number: "100+", label: "Expert Architects & Engineers", icon: <Award className="w-8 h-8" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Star className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trust & Reliability",
      description: "We build strong, safe, and sustainable structures that our clients can trust."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovative Design",
      description: "Our designs combine aesthetics, functionality, and efficiency to bring your vision to life."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Client-Focused",
      description: "We prioritize your needs and collaborate closely to exceed expectations on every project."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Continuous Growth",
      description: "We constantly adopt new technologies and best practices to deliver cutting-edge construction solutions."
    }
  ];

  const teamMembers = [
    {
      name: "Rina Mehra",
      position: "Founder & CEO",
      experience: "20 Years",
      specialization: "Construction Management & Planning",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      description: "Visionary leader with a passion for delivering landmark construction projects with precision and quality."
    },
    {
      name: "Vikram Singh",
      position: "Chief Architect",
      experience: "15 Years",
      specialization: "Architectural Design & Urban Planning",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Expert in creating innovative and functional building designs that blend aesthetics and practicality."
    },
    {
      name: "Anjali Rao",
      position: "Project Manager",
      experience: "12 Years",
      specialization: "Construction Oversight & Quality Control",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Ensures every project is executed on time, within budget, and to the highest standards."
    },
    {
      name: "Rohit Verma",
      position: "Client Relations Manager",
      experience: "10 Years",
      specialization: "Client Consultation & Support",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Dedicated to providing exceptional support and guidance to clients from concept to completion."
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started Rina Construction Ltd with a vision to create quality buildings and urban spaces."
    },
    {
      year: "2015",
      title: "Major Projects Expansion",
      description: "Completed 50+ large-scale residential and commercial projects across the city."
    },
    {
      year: "2018",
      title: "Innovation in Planning",
      description: "Introduced advanced architectural and planning tools to improve efficiency and design quality."
    },
    {
      year: "2022",
      title: "Award-Winning Projects",
      description: "Recognized for excellence in sustainable building and innovative architectural designs."
    },
    {
      year: "2025",
      title: "Future Ready",
      description: "Investing in smart building technology and eco-friendly construction practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
      {/* Header Section */}
      <HeaderBanner
        title="About Us"
        subtitle="Rina Construction Ltd"
        description="Your trusted partner in building and planning exceptional spaces since 2010. We turn visions into sustainable, high-quality structures."
        icon={<Building className="w-10 h-10" />}
        backgroundStyle="image"
      />
      
      <section className="py-20 bg-white">
        <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-primary-500 to-gray-800 bg-clip-text text-transparent mb-4">
              About Rina Construction Ltd
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in planning, designing, and constructing residential, commercial, and industrial buildings with a focus on quality, sustainability, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Principles that guide every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-100">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped Rina Construction Ltd
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            <div className="lg:hidden absolute left-8 top-0 h-full w-0.5 bg-primary-200"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  window.innerWidth >= 1024 
                    ? (index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end')
                    : 'justify-start'
                }`}>
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="lg:hidden absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className={`
                    w-full lg:w-5/12 
                    pl-16 lg:pl-0
                    ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}
                  `}>
                    <div className="bg-primary-50 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-xl sm:text-2xl font-bold text-primary-700 mb-2">{milestone.year}</div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{milestone.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
