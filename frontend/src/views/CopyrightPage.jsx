import React from 'react';
import { Shield, AlertTriangle, Mail, FileText, Lock, Users } from 'lucide-react';
import Header from '../components/Header';

const CopyrightPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <Header title="Copyright Policy" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Overview</h3>
              <p className="text-gray-700 leading-relaxed">
                Rina Construction&apos;s copyright and intellectual property policy protects the company&apos;s assets and client rights. All intellectual property—including software, designs, logos, trademarks, and all content—is owned by Rina Construction or its licensors.
              </p>
            </div>
          </div>
        </div>

        {/* Your License */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your License to Use Our Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use Rina Construction services, you are granted a limited, non-exclusive, and non-transferable license to use our content and tools solely for their intended purposes as outlined in our Terms.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">What this means for you:</p>
                <p className="text-green-700 mt-1">You may use our services and materials as intended, but cannot copy, modify, or distribute Rina Construction&apos;s intellectual property without permission.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prohibited Activities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Copying, modifying, distributing, or creating derivative works based on our services or content is strictly prohibited unless you have explicit written consent from Rina Construction.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">Important:</p>
                <p className="text-red-700 mt-1">Unauthorized use of Rina Construction&apos;s intellectual property may result in legal action. All rights not expressly granted are reserved.</p>
              </div>
            </div>
          </div>
        </div>

        {/* User Contributions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Feedback & Contributions</h3>
              <p className="text-gray-700 leading-relaxed">
                Any feedback, suggestions, or designs you provide become the property of Rina Construction without obligation or compensation. This helps us improve our services for all clients.
              </p>
            </div>
          </div>
        </div>

        {/* Your Responsibilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Responsibilities</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Respect all copyrights, trademarks, and proprietary rights while using our services</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Do not infringe on Rina Construction&apos;s intellectual property or that of any third party</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">Regularly review the Terms and Conditions to stay informed about your rights and responsibilities</p>
            </div>
          </div>
        </div>

        {/* Enforcement */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Enforcement</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rina Construction reserves the right to suspend, restrict, or terminate access to services if these terms are violated, and may pursue legal remedies if necessary. These policies ensure integrity and security for all clients.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CopyrightPage;
