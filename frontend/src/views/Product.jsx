import React, { useState } from "react";
import {
  ChevronRight,
  Heart,
  Star,
  Eye,
  Filter,
  Search,
  Building2,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import Header from "../components/Header";

const ArrowUpIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ProjectCard = ({ project, isFavorite, onToggleFavorite }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#47B2E4] to-[#293751] opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Badges and Actions */}
        <div className="absolute top-4 left-4">
          <span
            className={`${project.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}
          >
            {project.badge}
          </span>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-[#47B2E4] hover:text-white transition-all backdrop-blur-sm">
            <Eye size={18} />
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      {/* Content */}
      <div className="px-4 pb-4 mt-4 ">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#47B2E4] group-hover:to-[#293751] transition-all duration-300">
          {project.name}
        </h3>

        {/* Project Details */}
        {/* <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={14} className="text-[#47B2E4]" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={14} className="text-[#47B2E4]" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users size={14} className="text-[#47B2E4]" />
            <span>{project.teamSize} Team Members</span>
          </div>
        </div> */}

        <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">
          {project.description}
        </p>

        <a
          href="https://wa.me/250788495535"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#47B2E4] to-[#293751] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="mr-2 text-sm">contact for more info</span>
          <ArrowUpIcon className="w-3 h-3 transform rotate-45 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      name: "Kigali Heights Tower",
      category: "Commercial",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=400&fit=crop",
      location: "Kigali City Center",
      duration: "24 Months",
      teamSize: 45,
      description:
        "A 30-story modern commercial tower featuring state-of-the-art office spaces, retail outlets, and underground parking facilities in the heart of Kigali.",
      badge: "Completed",
      badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
      rating: 4.9,
      reviews: 127,
      icon: Building2,
    },
    {
      id: 2,
      name: "Nyarutarama Residential Complex",
      category: "Residential",
      image:
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=400&fit=crop",
      location: "Nyarutarama, Gasabo",
      duration: "18 Months",
      teamSize: 32,
      description:
        "Luxury residential complex with 120 modern apartments, community facilities, swimming pool, and beautiful landscaping.",
      badge: "completed",
      badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
      rating: 4.8,
      reviews: 89,
      icon: Building2,
    },
    {
      id: 3,
      name: "Kigali Convention Center Extension",
      category: "Infrastructure",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
      location: "Kimihurura, Gasabo",
      duration: "36 Months",
      teamSize: 78,
      description:
        "Major extension project adding 15,000 sqm of exhibition space, conference halls, and hospitality facilities to the existing convention center.",
      badge: "completed",
      badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
      rating: 4.9,
      reviews: 156,
      icon: Building2,
    },
    {
      id: 4,
      name: "Kimisagara Bridge Project",
      category: "Infrastructure",
      image:
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=400&fit=crop",
      location: "Nyarugenge District",
      duration: "15 Months",
      teamSize: 28,
      description:
        "Construction of a modern cable-stayed bridge spanning 250 meters, connecting Kimisagara to the city center with pedestrian walkways and cycling lanes.",
      badge: "completed",
      badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
      rating: 4.7,
      reviews: 203,
      icon: Building2,
    },
    {
      id: 5,
      name: "Gisozi Industrial Park",
      category: "Industrial",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
      location: "Gisozi, Gasabo",
      duration: "30 Months",
      teamSize: 65,
      description:
        "Development of a 50-hectare industrial park with manufacturing facilities, warehouses, administrative buildings, and supporting infrastructure.",
      badge: "completed",
      badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
      rating: 4.6,
      reviews: 94,
      icon: Building2,
    },
    {
      id: 6,
      name: "University of Rwanda Campus",
      category: "Educational",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop",
      location: "Nyarugenge District",
      duration: "42 Months",
      teamSize: 85,
      description:
        "Construction of modern university campus including lecture halls, laboratories, library, student dormitories, and recreational facilities for 5,000 students.",
      badge: "completed",
      badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
      rating: 4.8,
      reviews: 178,
      icon: Building2,
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (projectId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(projectId)) {
      newFavorites.delete(projectId);
    } else {
      newFavorites.add(projectId);
    }
    setFavorites(newFavorites);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-4 ">
      <Header title="Our projects " />
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Bar */}
        {/* <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#47B2E4] focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Filter className="text-gray-500 my-auto" size={20} />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#47B2E4] to-[#293751] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isFavorite={favorites.has(project.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#47B2E4] to-[#293751] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how Rani Construction can bring your vision to life
              with our expertise and dedication.
            </p>
            <a
              href="https://wa.me/250788495535"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-[#47B2E4] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Contact Us Today
              <ChevronRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
