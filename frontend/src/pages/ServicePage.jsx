import { useState } from "react";
import { 
  Building, 
  HardHat, 
  PenTool, 
  Wrench, 
  Hammer, 
  Shield, 
  Clock, 
  Award,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  Users,
  Headphones,
  Home,
  FileText,
  Ruler,
  Truck,
  TreePine
} from "lucide-react";
import HeaderBanner from "../components/HeaderBanner";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('construction');

  const navigate = useNavigate()

  const constructionServices = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Residential Construction",
      description: "Complete home building services from foundation to finishing",
      features: ["Custom homes", "Home extensions", "Kitchen & bathroom remodels", "Basement finishing"]
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Commercial Buildings",
      description: "Professional construction for offices, retail, and industrial spaces",
      features: ["Office buildings", "Retail spaces", "Warehouses", "Industrial facilities"]
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Renovation & Remodeling",
      description: "Transform your existing spaces with expert renovation services",
      features: ["Interior renovations", "Exterior upgrades", "Structural modifications", "Heritage restorations"]
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Landscaping & Outdoor",
      description: "Complete outdoor construction and landscaping solutions",
      features: ["Deck construction", "Patio installation", "Retaining walls", "Garden structures"]
    }
  ];

  const planningServices = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Architectural Design",
      description: "Professional architectural planning and design services",
      features: ["Floor plan design", "3D visualizations", "Building permits", "Code compliance"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Engineering Services",
      description: "Structural and civil engineering expertise for your projects",
      features: ["Structural analysis", "Foundation design", "MEP planning", "Site surveys"]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Project Planning",
      description: "Comprehensive project management and timeline planning",
      features: ["Timeline development", "Resource planning", "Budget estimation", "Quality control"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Permits & Compliance",
      description: "Navigate building codes and permit requirements seamlessly",
      features: ["Permit applications", "Code compliance", "Inspection coordination", "Documentation"]
    }
  ];

  const features = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Licensed Professionals",
      description: "Certified contractors and architects with proven expertise"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "On-Time Delivery",
      description: "Projects completed on schedule without compromising quality"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Quality Guarantee",
      description: "All work backed by comprehensive warranties and insurance"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Dedicated Support",
      description: "Personalized service from initial consultation to project completion"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      rating: 5,
      comment: "Rina Construction exceeded our expectations. Our dream home became reality with their expert craftsmanship."
    },
    {
      name: "David Thompson",
      rating: 5,
      comment: "Professional planning and execution. They handled all permits and delivered our office renovation on time."
    },
    {
      name: "Maria Rodriguez",
      rating: 5,
      comment: "Outstanding attention to detail and quality. Highly recommend for any construction project."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      
 <HeaderBanner
        title="Construction & Planning Services"
        subtitle="Building Excellence"
        description="From architectural planning to construction completion - we bring your building visions to life with professional expertise, quality craftsmanship, and guaranteed satisfaction."
        icon={<Building className="w-10 h-10" />}
        breadcrumb={[
          { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
          { label: "Services", href: "/services" }
        ]}
        primaryButton={{
          text: "Get Quote",
          icon: <Phone className="w-5 h-5" />,
          onClick: () => navigate('/contact')
        }}
      
        backgroundStyle="image"
      />

    

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
               <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-orange-500 to-gray-800 bg-clip-text text-transparent mb-4">
            Our Services
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction and planning solutions for your building needs
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-orange-50 p-2 rounded-xl flex space-x-2">
              <button
                onClick={() => setActiveTab('construction')}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'construction' 
                    ? 'bg-orange-600 text-white shadow-lg' 
                    : 'text-orange-700 hover:bg-orange-100'
                }`}
              >
                <Hammer className="w-5 h-5" />
                <span>Construction</span>
              </button>
              <button
                onClick={() => setActiveTab('planning')}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'planning' 
                    ? 'bg-orange-600 text-white shadow-lg' 
                    : 'text-orange-700 hover:bg-orange-100'
                }`}
              >
                <PenTool className="w-5 h-5" />
                <span>Planning & Design</span>
              </button>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === 'construction' ? constructionServices : planningServices).map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:-translate-y-2">
                <div className="text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-orange-50 text-orange-700 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-orange-600 group-hover:text-white">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Rina Construction Ltd?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional construction services with unmatched expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <div className="text-orange-600">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-xl text-gray-600">Building trust through quality construction</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonial.comment}</p>
                <p className="font-semibold text-orange-700">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

     
    </div>
  );
}