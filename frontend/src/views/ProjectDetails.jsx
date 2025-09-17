import React, { useState } from 'react';
import { ArrowLeft, Phone, MessageCircle, ArrowRight } from 'lucide-react';

const ProjectViewMore = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with breadcrumb */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&h=600&fit=crop" 
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Header Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Designing Tomorrow's Cities</h1>
            <div className="flex items-center justify-center gap-2 text-lg">
              <span>Home</span>
              <span>—</span>
              <span>Residential Architecture</span>
              <span>—</span>
              <span>Designing Tomorrow's Cities</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        
        {/* Interior Design Image */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop"
            alt="Modern Interior"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left Column - Et Magnis Dis */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Et Magnis Dis</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Nisl sodales consequat magna ante condimentum neque at. Euismod quam justo lectus commodo augue arcu dignissim. Dui felis venenatis ultrices proin libero feugiat tristique. Dolor sit amet consectetur adipiscing elit quisque faucibus. Urna tempor pulvinar vivamus fringilla lacus nec metus. Torquent per conubia nostra inceptos himenaeos orci varius.
              </p>
              <p>
                Fermentum odio phasellus non purus est efficitur laoreet. Finibus facilisis dapibus etiam interdum tortor ligula congue. Imperdiet mollis nullam volutpat porttitor ullamcorper.
              </p>
              <div className="mt-8 p-4 bg-gray-100 rounded-lg italic text-gray-700">
                "Ad litora torquent per conubia nostra inceptos himenaeos. Maximus eget fermentum odio phasellus non purus est. Luctus nibh finibus facilisis dapibus etiam interdum tortor. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper."
              </div>
            </div>
          </div>

          {/* Right Column - Ex Sapien Vitae Pellentesque */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ex Sapien Vitae Pellentesque</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Mauris pharetra vestibulum fusce dictum risus blandit quis. Sollicitudin erat viverra ac tincidunt nam porta elementum. Cras eleifend turpis fames primis vulputate ornare sagittis. Curabitur facilisi cubilia curae hac habitasse platea dictumst. Pretium tellus duis convallis tempus leo eu aenean. Ut hendrerit semper vel class sodales consequataptent taciti sociosqu. Donec rhoncus eros lobortis nulla molestie mattis scelerisque.
              </p>
            </div>
            
            {/* Checkmark List */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Dolor sit amet consectetur adipiscing elit quisque faucibus.Urna tempor pulvinar vivamus fringilla lacus nec metus.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Torquent per conubia nostra inceptos himenaeos orci varius. Fermentum odio phasellus non purus est efficitur laoreet.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Imperdiet mollis nullam volutpat porttitor ullamcorper rutrum gravida. Potenti ultricies habitant morbi senectus netus suscipit auctor.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Et magnis dis parturient montes nascetur ridiculus mus. Vestibulum fusce dictum risus blandit quis suspendisse aliquet.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Duis Convallis Tempus Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Duis Convallis Tempus</h2>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl">
            Eros lobortis nulla molestie mattis scelerisque maximus eget. Consequat magna ante condimentum neque at luctus nibh. Justo lectus commodo augue arcu dignissim velit aliquam. Venenatis ultrices proin libero feugiat tristique accumsan maecenas.Amet consectetur adipiscing elit quisque faucibus ex sapien. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Conubia nostra inceptos himenaeos orci varius natoque penatibus.
          </p>
          
          {/* Call to Action Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Card - Need Expert Architects */}
            <div className="bg-yellow-600 rounded-2xl p-8 text-white">
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider opacity-80">ENQUIRE HERE</span>
              </div>
              <h3 className="text-3xl font-bold mb-8 leading-tight">
                Need Expert Architects For Your Project?
              </h3>
              <button className="inline-flex items-center text-white hover:text-yellow-100 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Right Card - Be Our Next Client */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="mb-6">
                <p className="text-gray-300 mb-8">
                  Id nisl veniam ut nulla odit vel doloremque expedita est accusamus nostrum sit voluptas quia et adipisci labore eos ipsa repellendus.
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                  <ArrowRight size={18} />
                  Be Our Next Client
                </button>
                
                {/* Client Images */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" className="w-10 h-10 rounded-full border-2 border-gray-700" alt="" />
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face" className="w-10 h-10 rounded-full border-2 border-gray-700" alt="" />
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" className="w-10 h-10 rounded-full border-2 border-gray-700" alt="" />
                  </div>
                  <span className="text-gray-400 ml-2">200k+ More</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#47B2E4] to-[#293751] text-white font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewMore;