'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How much does a taxi from Patiala to Delhi cost?',
    answer: 'A one-way taxi from Patiala to Delhi costs ₹3,400 for a Sedan, ₹4,200 for an Ertiga, and ₹5,900 for an Innova Crysta. The 240 km route via NH44 takes approximately 4.5–5 hours. ModgillTravels offers transparent fixed fares — no hidden charges or surge pricing. Book via phone or WhatsApp for instant confirmation.',
  },
  {
    question: 'Which is the best taxi service in Patiala?',
    answer: "ModgillTravels is Patiala's top-rated outstation taxi service, founded in 2025 with 5,000+ completed trips across Punjab, Haryana, Delhi, and Himachal Pradesh. We offer 24/7 availability, background-verified drivers, AC vehicles with GPS tracking, and transparent fixed fares. Book by phone or WhatsApp at +91-62849-92669.",
  },
  {
    question: 'How do I book a cab from Patiala to Delhi?',
    answer: 'Booking a Patiala to Delhi cab with ModgillTravels takes under 2 minutes: WhatsApp us at +91-62849-92669 with your pickup location, travel date, and time. We confirm your driver and vehicle within 15 minutes. Alternatively, call us directly or use the online booking form on our website.',
  },
  {
    question: 'Can I book a one-way taxi from Patiala to Chandigarh?',
    answer: 'Yes. ModgillTravels offers one-way taxi from Patiala to Chandigarh starting at ₹1,400 for a Sedan. One-way trips have no return fare — you pay only for the distance traveled (67 km via NH44). Same-day bookings are available 24/7. Book via WhatsApp at +91-62849-92669.',
  },
  {
    question: 'Does Modgill Travels offer 24-hour taxi service in Patiala?',
    answer: 'Yes. ModgillTravels operates 24 hours a day, 7 days a week, including late nights, early mornings, and all public holidays. Whether you need a last-minute cab at 2 AM or want to pre-book a week in advance, our drivers are always available. Call or WhatsApp +91-62849-92669 any time.',
  },
  {
    question: 'What is the taxi fare from Patiala to Shimla?',
    answer: 'The Patiala to Shimla taxi fare starts at ₹2,600 for a Sedan one-way. The 180 km hill route typically takes 4–5 hours depending on traffic near Kalka and the Shimla ghats. For hill routes, we recommend an Ertiga or Innova Crysta for extra comfort and luggage space.',
  },
  {
    question: 'Is there a taxi service from Patiala to Amritsar Airport?',
    answer: 'Yes. ModgillTravels provides airport taxi from Patiala to Amritsar Airport (Sri Guru Ram Dass Jee International Airport), approximately 130 km away. We offer pre-booked airport pickups with flight tracking and on-time arrival guarantee. Book at least 2 hours before departure. Call +91-62849-92669.',
  },
  {
    question: 'What type of vehicles are available for Patiala to Delhi taxi?',
    answer: 'ModgillTravels offers three vehicle categories for Patiala to Delhi: Sedan (Dzire/Etios, up to 4 passengers, ₹3,400 one-way), Ertiga (up to 6 passengers, ₹4,200 one-way), and Innova Crysta (up to 7 passengers, ₹5,900 one-way). All vehicles are air-conditioned with GPS tracking and professional drivers.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(prev => (prev === index ? null : index));
  }

  return (
    <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl overflow-hidden transition-all duration-200 hover:border-gray-600"
          >
            {/* Question row — clickable */}
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="accordion-btn w-full flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/50 rounded-xl"
            >
              <h4
                itemProp="name"
                className="text-white font-semibold text-xs sm:text-xs leading-snug"
              >
                {faq.question}
              </h4>

              {/* Chevron icon */}
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? 'rotate-180 border-gray-500 bg-slate-700' : ''
                }`}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            {/* Answer — animated expand/collapse */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className="px-5 pb-5 pt-1 border-t border-gray-700/60"
                >
                  <p
                    itemProp="text"
                    className="text-gray-300 text-xs sm:text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
