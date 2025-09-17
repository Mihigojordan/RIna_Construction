import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Collapse } from "bootstrap";
import Header from "../components/Header";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

 const faqs = [
  {
    question: "Where can I hire construction services in Rwanda?",
    answer:
      "Rina Construction provides professional construction services for residential, commercial, and industrial projects. You can contact us directly or visit our office for consultations.",
  },
  {
    question: "Do you supply authentic construction materials?",
    answer:
      "Yes. We supply high-quality cement, steel, bricks, tiles, and other construction materials with verified quality standards and warranties where applicable.",
  },
  {
    question: "Do your services come with a warranty?",
    answer:
      "Yes. All our construction projects include a workmanship warranty, and we provide ongoing support to ensure your project stands the test of time.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes. We offer flexible payment plans to help clients manage costs for both construction projects and materials.",
  },
  {
    question: "Do you deliver materials outside Kigali?",
    answer:
      "Absolutely. We deliver construction materials to all districts in Rwanda safely and on time through our reliable transport network.",
  },
  {
    question: "Do you also provide construction equipment rental?",
    answer:
      "Yes. We offer rental of tools and machinery like mixers, scaffolding, drills, and more to support your construction needs.",
  },
  {
    question: "Can I trade in old construction equipment?",
    answer:
      "Yes. Rina Construction accepts trade-ins for certain equipment, allowing you to offset the cost of new rentals or purchases.",
  },
  {
    question: "Do you provide after-project support?",
    answer:
      "Yes. We offer maintenance, inspections, and technical advice after project completion to ensure your building remains safe and durable.",
  },
  {
    question: "Do you help with project planning and approvals?",
    answer:
      "Yes. Our team assists with architectural planning, obtaining necessary permits, and ensuring compliance with local regulations.",
  },
  {
    question: "Which types of construction projects do you handle?",
    answer:
      "We handle residential buildings, commercial offices, industrial facilities, and renovation projects, delivering quality results at competitive prices.",
  },
];


  const handleToggle = (index) => {
    const element = document.getElementById(`faq-answer-${index}`);
    const bsCollapse = new Collapse(element, { toggle: true });
    bsCollapse.toggle();

    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }, []);

  return (
    <div className="relative z-10">
      <Header title="FAQ" />
      <h1 className="text-5xl font-bold mb-6 text-center p-4 ">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="relative bg-gray-100 text-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-start"
          >
            <div className="flex justify-between items-center w-full">
              <h2 className="text-md font-semibold mr-4">{faq.question}</h2>
              <button
                className="text-gray-700 hover:text-gray-900 focus:outline-none text-xl"
                onClick={() => handleToggle(index)}
              >
                {openIndex === index ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div id={`faq-answer-${index}`} className="collapse">
              <p className="mt-2 text-sm leading-5 text-gray-900 rounded p-3 w-full bg-white shadow-inner">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
