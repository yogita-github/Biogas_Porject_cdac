import React, { useState } from "react";
// import { Navbar } from "./Navbar";

export const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: "What is biogas, and how is it produced?",
      answer:
        "Biogas is a renewable energy source produced by the decomposition of organic matter such as food waste and agricultural residues. This process occurs in the absence of oxygen, resulting in methane-rich gas that can be used as clean energy."
    },
    {
      question: "How does waste management help the environment?",
      answer:
        "Efficient waste management reduces landfill usage, minimizes greenhouse gas emissions, and converts waste into valuable resources like biogas and compost."
    },
    {
      question: "Can biogas replace conventional fuels?",
      answer:
        "Biogas can supplement or replace conventional fuels in specific applications, such as cooking, heating, and generating electricity, offering a cleaner and more sustainable energy alternative."
    },
    {
      question: "How can I contribute to sustainable waste management?",
      answer:
        "You can start by segregating your waste, reducing plastic usage, composting organic materials, and supporting organizations that focus on sustainable waste solutions."
    },
    {
      question: "What are the benefits of using biogas?",
      answer:
        "Biogas is eco-friendly, reduces dependency on fossil fuels, provides a sustainable waste disposal solution, and generates energy that can be used for various purposes."
    },
    {
      question: "What types of waste can be used to produce biogas?",
      answer:
        "Organic waste such as food scraps, agricultural residues, animal manure, and sewage sludge can all be used to produce biogas."
    },
    {
      question: "Is biogas production safe?",
      answer:
        "Yes, when properly managed, biogas production is safe and can be an effective way to manage waste and produce renewable energy."
    },
    {
      question: "Can individuals set up biogas plants at home?",
      answer:
        "Yes, small-scale biogas plants can be set up at home for personal use, particularly in rural areas with access to organic waste."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-green-600 text-white py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/5433129/pexels-photo-5433129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-extrabold mb-4">FAQ</h1>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg shadow-md overflow-hidden ${
                  open === index ? "bg-green-100" : "bg-gray-50"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className={`w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center transition-colors duration-300 ${
                    open === index ? "bg-green-300" : "bg-gray-50"
                  }`}
                >
                  <span
                    className={`text-lg font-medium transition-colors duration-300 ${
                      open === index ? "text-green-800" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      open === index ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {open === index && (
                  <div className="px-6 py-4 text-gray-700 text-md transition-colors duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
