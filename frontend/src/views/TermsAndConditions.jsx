import { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Shield, Users, CreditCard, AlertTriangle, Phone } from 'lucide-react';
import Header from '../components/Header';

export default function TermsAndConditions() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };
const termsData = [
  {
    id: 1,
    icon: FileText,
    title: "Introduction and Acceptance",
    content: "By hiring Rina Construction services or purchasing materials from us, you agree to these Terms and our Privacy Policy. If you do not agree, you must not use our services. Rina Construction may update these Terms at any time, and continued use signifies acceptance. Clients are encouraged to review the Terms regularly."
  },
  {
    id: 2,
    icon: Users,
    title: "Eligibility",
    content: "Clients must be at least 18 years old (or the legal age in their jurisdiction) and provide accurate, up-to-date information. Rina Construction reserves the right to verify credentials and decline service for ineligibility or violations."
  },
  {
    id: 3,
    icon: Shield,
    title: "Account Registration and Security",
    content: "Clients may need to create an account for service requests or online orders. You are responsible for safeguarding your login credentials and must report unauthorized use immediately. Sharing accounts is prohibited, and identity verification may be required for security and compliance."
  },
  {
    id: 4,
    icon: FileText,
    title: "Service Description",
    content: "Rina Construction provides professional construction services, material supply, and equipment rental. All projects are subject to agreement terms, availability, and applicable regulations. We act as the service provider and do not subcontract without prior consent."
  },
  {
    id: 5,
    icon: CreditCard,
    title: "Payments and Fees",
    content: "Payments for services and materials are processed securely. Prices are based on project scope, material type, and additional services. Late or failed payments may result in suspension of services. Refunds are handled according to Rina Construction’s policy."
  },
  {
    id: 6,
    icon: Users,
    title: "Client Conduct and Responsibilities",
    content: "Clients must provide accurate information and comply with all applicable laws. Harassment, discrimination, or unsafe requests are prohibited. Misuse of services or false information can result in termination of agreements or legal action."
  },
  {
    id: 7,
    icon: Shield,
    title: "Privacy and Data",
    content: "Rina Construction collects and uses client information as described in our Privacy Policy, including for project management, communication, and legal compliance. Data is protected with industry-standard measures and shared only as necessary. Clients have rights to access and correct their data."
  },
  {
    id: 8,
    icon: AlertTriangle,
    title: "Termination and Suspension",
    content: "Rina Construction may suspend or terminate services for violations, safety concerns, or non-payment, with or without notice. Clients may also terminate services at any time. Termination does not release obligations incurred prior to termination, and some data may be retained for legal reasons."
  },
  {
    id: 9,
    icon: AlertTriangle,
    title: "Disclaimers and Limitation of Liability",
    content: "Services and materials are provided \"as is\" with no implied warranties beyond what is stated in agreements. Rina Construction is not liable for indirect losses or delays, except as required by law. Clients assume certain risks when using our services."
  },
  {
    id: 10,
    icon: Shield,
    title: "Indemnification",
    content: "Clients agree to indemnify Rina Construction against claims, damages, or losses arising from misuse, violations, or third-party rights infringements. This obligation continues even after termination of services."
  },
  {
    id: 11,
    icon: FileText,
    title: "Governing Law and Dispute Resolution",
    content: "These Terms are governed by the laws of Rwanda. Disputes should first be resolved informally; if unresolved, they may go to binding arbitration or court. Clients waive rights to jury trials or class actions. Arbitration is confidential, and Rina Construction may seek legal relief to protect its rights."
  },
  {
    id: 12,
    icon: FileText,
    title: "Changes to Terms",
    content: "Rina Construction may update these Terms at any time, with notice provided via email or website. Continued use after changes indicates acceptance. Clients who disagree must stop using our services. Changes do not affect prior rights or obligations."
  },
  {
    id: 13,
    icon: Phone,
    title: "Contact Information",
    content: "For questions or feedback about these Terms, clients can contact Rina Construction via email or at our office. We provide prompt assistance and value client feedback for ongoing improvement."
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <Header title="Terms and Conditions" />
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="space-y-4">
          {termsData.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === section.id;
            
            return (
              <div key={section.id} className="bg-white rounded-lg shadow-md overflow-hidden w-full ">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center w-full space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#293751]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {section.id}. {section.title}
                      </h3>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="pl-13">
                      <div className="h-px bg-gray-200 mb-4"></div>
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}