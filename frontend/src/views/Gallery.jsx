import React, { useState } from 'react';
import { ChevronRight, Heart, Eye, Filter, Search, Download, Share2, ZoomIn, X, MapPin, Calendar } from 'lucide-react';
import Header from '../components/Header';

const ImageModal = ({ image, isOpen, onClose }) => {
  if (!isOpen || !image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-h-full" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X size={32} />
        </button>
        <img
          src={image.url}
          alt={image.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
              <p className="text-gray-200 text-sm mb-2">{image.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{image.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{image.date}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all">
                <Download size={18} />
              </button>
              <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all">
                <Share2 size={18} />
              </button>
              <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all">
                <Heart size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      id: 1,
      title: "Kigali Heights Tower Construction",
      category: "Commercial",
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      location: "Kigali City Center",
      date: "March 2024",
      description: "Aerial view of the 30-story Kigali Heights Tower during construction, showcasing modern architectural design.",
      views: 1245,
      likes: 89,
      height: 'h-96'
    },
    {
      id: 2,
      title: "Nyarutarama Residential Complex",
      category: "Residential",
      url: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop",
      location: "Nyarutarama, Gasabo",
      date: "February 2024",
      description: "Modern residential apartments with beautiful landscaping and community facilities.",
      views: 987,
      likes: 134,
      height: 'h-80'
    },
    {
      id: 3,
      title: "Convention Center Architecture",
      category: "Infrastructure",
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      location: "Kimihurura, Gasabo",
      date: "January 2024",
      description: "State-of-the-art conference facilities and exhibition spaces for Rwanda's business sector.",
      views: 2156,
      likes: 201,
      height: 'h-112'
    },
    {
      id: 4,
      title: "Modern Bridge Engineering",
      category: "Infrastructure",
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      location: "Nyarugenge District",
      date: "December 2023",
      description: "Cable-stayed bridge construction showcasing advanced engineering techniques.",
      views: 1876,
      likes: 167,
      height: 'h-96'
    },
    {
      id: 5,
      title: "Industrial Manufacturing Facility",
      category: "Industrial",
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      location: "Gisozi, Gasabo",
      date: "November 2023",
      description: "Large-scale industrial park with modern manufacturing facilities and warehouses.",
      views: 1432,
      likes: 98,
      height: 'h-80'
    },
    {
      id: 6,
      title: "University Campus Development",
      category: "Educational",
      url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      location: "Nyarugenge District",
      date: "October 2023",
      description: "Modern university campus with cutting-edge facilities and student accommodations.",
      views: 1654,
      likes: 142,
      height: 'h-112'
    },
    {
      id: 7,
      title: "Construction Workers in Action",
      category: "Behind the Scenes",
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      location: "Various Sites",
      date: "September 2023",
      description: "Professional construction team demonstrating expertise and safety protocols.",
      views: 892,
      likes: 76,
      height: 'h-96'
    },
    {
      id: 8,
      title: "Heavy Construction Machinery",
      category: "Equipment",
      url: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
      location: "Construction Sites",
      date: "August 2023",
      description: "Advanced construction equipment for large-scale project operations.",
      views: 756,
      likes: 54,
      height: 'h-80'
    },
    {
      id: 9,
      title: "Architectural Detail Work",
      category: "Commercial",
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      location: "Kigali Projects",
      date: "July 2023",
      description: "Detailed architectural elements showcasing precision and quality craftsmanship.",
      views: 1123,
      likes: 187,
      height: 'h-112'
    },
    {
      id: 10,
      title: "Concrete Foundation Work",
      category: "Infrastructure",
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      location: "Multiple Sites",
      date: "June 2023",
      description: "Foundation construction demonstrating structural engineering excellence.",
      views: 945,
      likes: 112,
      height: 'h-96'
    },
    {
      id: 11,
      title: "Steel Frame Construction",
      category: "Commercial",
      url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
      location: "Kigali Business District",
      date: "May 2023",
      description: "Steel framework construction for high-rise commercial building.",
      views: 1287,
      likes: 156,
      height: 'h-80'
    },
    {
      id: 12,
      title: "Interior Construction Progress",
      category: "Residential",
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
      location: "Residential Complex",
      date: "April 2023",
      description: "Interior construction work showing attention to detail and modern design.",
      views: 834,
      likes: 93,
      height: 'h-112'
    },
    {
      id: 13,
      title: "Site Safety Protocols",
      category: "Behind the Scenes",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      location: "All Construction Sites",
      date: "March 2023",
      description: "Safety measures and protocols ensuring worker protection on construction sites.",
      views: 678,
      likes: 67,
      height: 'h-96'
    },
    {
      id: 14,
      title: "Excavation and Earthwork",
      category: "Equipment",
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      location: "Project Sites",
      date: "February 2023",
      description: "Heavy machinery performing excavation work for foundation preparation.",
      views: 1045,
      likes: 78,
      height: 'h-80'
    },
    {
      id: 15,
      title: "Completed Building Facade",
      category: "Commercial",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      location: "Downtown Kigali",
      date: "January 2023",
      description: "Completed commercial building showcasing modern facade design and urban architecture.",
      views: 1567,
      likes: 234,
      height: 'h-112'
    }
  ];

  const categories = ['All', ...new Set(images.map(img => img.category))];

  const filteredImages = images.filter(image => {
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (imageId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(imageId)) {
      newFavorites.delete(imageId);
    } else {
      newFavorites.add(imageId);
    }
    setFavorites(newFavorites);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-4">
    <Header title="Our Gallery" />
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mb-12">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 ${image.height || 'h-96'} mb-6 break-inside-avoid hover:-translate-y-2 hover:-rotate-1`}
            >
              <div className={`relative w-full ${image.height || 'h-96'} overflow-hidden border-4 border-white/90 rounded-2xl`}>
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 border-2 border-[#47B2E4]/30 group-hover:border-[#47B2E4]/50 transition-colors duration-300 rounded-2xl"></div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{image.title}</h3>
                  <p className="text-gray-200 text-sm mb-3 flex items-center gap-1.5">
                    <MapPin size={14} />
                    {image.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#47B2E4] bg-white/90 px-3 py-1.5 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(image.id);
                        }}
                        className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                          favorites.has(image.id)
                            ? 'bg-[#47B2E4] text-white'
                            : 'bg-white/90 text-gray-600 hover:bg-[#47B2E4] hover:text-white'
                        }`}
                      >
                        <Heart size={16} fill={favorites.has(image.id) ? 'currentColor' : 'none'} />
                      </button>
                      <button className="p-2 rounded-full bg-white/90 text-gray-600 hover:bg-[#47B2E4] hover:text-white transition-all duration-300 backdrop-blur-md">
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white/95 p-4 rounded-full shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <ZoomIn size={28} className="text-[#47B2E4]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#47B2E4] to-[#293751] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to See Your Project Here?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contact Rani Construction to discuss your next project and become part of our growing portfolio of successful developments.
            </p>
            <a
              href="https://wa.me/250788495535"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-[#47B2E4] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start Your Project
              <ChevronRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
        
      </div>

      {/* Image Modal */}
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Gallery;