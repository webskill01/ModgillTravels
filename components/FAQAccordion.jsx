// components/FAQAccordion.jsx
// The one accordion on the site. Native <details>, so it needs no client JS
// and works before hydration — the contact page had a second, hand-rolled
// <details> variant and the city pages had flat non-collapsing cards, which
// meant three different FAQ treatments across the site.
//
// Styling lives in the .faq-item / .faq-content rules in globals.css, which
// were written for exactly this markup and were previously unused.
import { ChevronDownIcon } from "@/components/Icons";

const defaultFaqs = [
  {
    question: 'How far is Patiala from Delhi by road?',
    answer: 'Patiala to Delhi is about 250 km via NH44, and the drive takes 4.5 to 5 hours in normal traffic. Leaving before 7 AM usually clears the Panipat and Sonipat stretch before it builds up. Send your pickup point on WhatsApp and we confirm the vehicle and a fixed quote before the trip.',
  },
  {
    question: 'Which is the best taxi service in Patiala?',
    answer: "ModgillTravels is a 24/7 outstation taxi service based in Patiala, rated 5.0 on Google, with 5,000+ completed trips across Punjab, Haryana, Delhi and Himachal Pradesh. Background-verified drivers, AC vehicles with GPS tracking, and a quote fixed before you travel. Call or WhatsApp us.",
  },
  {
    question: 'How do I book a cab from Patiala to Delhi?',
    answer: 'Send a WhatsApp message with your pickup location, travel date and time. We reply within 15 minutes with the driver, the vehicle and a fixed quote. You can also just call. There is no form to fill in and no account to create.',
  },
  {
    question: 'Can I book a one-way taxi from Patiala to Chandigarh?',
    answer: 'Yes. Patiala to Chandigarh is 68 km via NH64 and takes about an hour and a half. One-way trips are charged for the distance you travel, with no return leg added. Same-day bookings are available around the clock.',
  },
  {
    question: 'Does ModgillTravels offer 24-hour taxi service in Patiala?',
    answer: 'Yes. We operate 24 hours a day, seven days a week, including late nights, early mornings and public holidays. Whether it is a 2 AM airport run or a trip booked a week ahead, someone answers the phone. Call or WhatsApp us any time.',
  },
  {
    question: 'How far is Patiala from Shimla by taxi?',
    answer: 'Patiala to Shimla is about 170 km and takes 4 to 5 hours, climbing through Kalka and Solan. The last stretch of ghats slows things down, especially in the afternoon. An Ertiga or Innova Crysta is the comfortable choice on this route for luggage space and the hill sections.',
  },
  {
    question: 'Is there a taxi service from Patiala to Amritsar Airport?',
    answer: 'Yes. Amritsar Airport (Sri Guru Ram Dass Jee International) is about 230 km from Patiala, roughly a 4 hour drive. We pre-book airport runs with flight tracking so pickups adjust if your flight moves. Book at least 2 hours before departure.',
  },
  {
    question: 'What vehicles are available for a Patiala to Delhi taxi?',
    answer: 'Three categories: Sedan (Dzire or Etios, up to 4 passengers), Ertiga (up to 6) and Innova Crysta (up to 7). All are air-conditioned with GPS tracking and a professional driver. Tell us the group size and luggage on WhatsApp and we will suggest the right one.',
  },
];

// `name` groups the <details> so the browser closes the open one when another
// is opened — exclusive accordion with no state and no JS. Pass a distinct
// name if two accordions ever share a page, or they will interlock.
export default function FAQAccordion({ faqs = defaultFaqs, name = "faq" }) {
  return (
    <div itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          name={name}
          className="faq-item"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <summary>
            <span itemProp="name">{faq.question}</span>
            <span>
              <ChevronDownIcon className="w-5 h-5" />
            </span>
          </summary>
          <div
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div className="faq-content" itemProp="text">
              {faq.answer}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
