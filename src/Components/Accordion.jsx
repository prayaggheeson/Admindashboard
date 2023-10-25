import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="border-t border-gray-200">
      <button
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? 'transform rotate-180' : 'transform rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`p-4 ${
          isOpen
            ? 'max-h-screen transition-max-height duration-300 ease-in-out delay-200'
            : 'max-h-0 overflow-hidden transition-max-height duration-300 ease-in-out delay-200'
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    {
      title: 'Section 1',
      content: 'Content for section 1.',
    },
    {
      title: 'Section 2',
      content: 'Content for section 2.',
    },
    {
      title: 'Section 3',
      content: 'Content for section 3.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="container bg-white mx-auto">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
