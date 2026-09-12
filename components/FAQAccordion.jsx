'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How far is Patiala from Delhi by road?',
    answer: 'Patiala to Delhi is about 240 km via NH44, and the drive takes 4.5 to 5 hours in normal traffic. Leaving before 7 AM usually clears the Panipat and Sonipat stretch before it builds up. Send your pickup point on WhatsApp and we confirm the vehicle and a fixed quote before the trip.',
  },
  {
    question: 'Which is the best taxi service in Patiala?',
    answer: "ModgillTravels is a 24/7 outstation taxi service based in Patiala, rated 5.0 on Google, with 5,000+ completed trips across Punjab, Haryana, Delhi and Himachal Pradesh. Background-verified drivers, AC vehicles with GPS tracking, and a quote fixed before you travel. Call or WhatsApp +91-62849-92669.",
  },
  {
    question: 'How do I book a cab from Patiala to Delhi?',
    answer: 'Send a WhatsApp message to +91-62849-92669 with your pickup location, travel date and time. We reply within 15 minutes with the driver, the vehicle and a fixed quote. You can also just call. There is no form to fill in and no account to create.',
  },
  {
    question: 'Can I book a one-way taxi from Patiala to Chandigarh?',
    answer: 'Yes. Patiala to Chandigarh is 67 km via NH64 and takes about an hour and a half. One-way trips are charged for the distance you travel, with no return leg added. Same-day bookings are available around the clock on +91-62849-92669.',
  },
  {
    question: 'Does ModgillTravels offer 24-hour taxi service in Patiala?',
    answer: 'Yes. We operate 24 hours a day, seven days a week, including late nights, early mornings and public holidays. Whether it is a 2 AM airport run or a trip booked a week ahead, someone answers the phone. Call or WhatsApp +91-62849-92669 any time.',
  },
  {
    question: 'How far is Patiala from Shimla by taxi?',
    answer: 'Patiala to Shimla is roughly 180 km and takes 4 to 5 hours, climbing through Kalka and Solan. The last stretch of ghats slows things down, especially in the afternoon. An Ertiga or Innova Crysta is the comfortable choice on this route for luggage space and the hill sections.',
  },
  {
    question: 'Is there a taxi service from Patiala to Amritsar Airport?',
    answer: 'Yes. Amritsar Airport (Sri Guru Ram Dass Jee International) is about 230 km from Patiala, roughly a 4 hour drive. We pre-book airport runs with flight tracking so pickups adjust if your flight moves. Book at least 2 hours before departure on +91-62849-92669.',
  },
  {
    question: 'What vehicles are available for a Patiala to Delhi taxi?',
    answer: 'Three categories: Sedan (Dzire or Etios, up to 4 passengers), Ertiga (up to 6) and Innova Crysta (up to 7). All are air-conditioned with GPS tracking and a professional driver. Tell us the group size and luggage on WhatsApp and we will suggest the right one.',
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
            className="bg-white border border-[--color-line] rounded-[--radius-lg] overflow-hidden transition-colors duration-200 hover:border-[--color-brand]"
          >
            {/* Question row — clickable */}
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="accordion-btn w-full flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/50 rounded-xl"
            >
              <h4
                itemProp="name"
                className="text-[--color-ink] font-semibold text-xs sm:text-xs leading-snug"
              >
                {faq.question}
              </h4>

              {/* Chevron icon */}
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full border border-[--color-line] flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? 'rotate-180 border-[--color-line] bg-[--color-surface]' : ''
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
                  className="px-5 pb-5 pt-1 border-t border-[--color-line]/60"
                >
                  <p
                    itemProp="text"
                    className="text-[--color-ink-muted] text-xs sm:text-sm leading-relaxed"
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
