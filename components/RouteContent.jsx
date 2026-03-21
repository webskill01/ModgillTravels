// components/RouteContent.jsx
import { InfoIcon, CheckCircleIcon, LocalOfferIcon, HelpOutlineIcon } from '@/components/Icons';

export default function RouteContent({ route }) {
  // Calculate starting fare from route data
  const startingFare = route?.displayFare || route?.fare?.['Sedan'] || route?.fare?.Sedan || 0;

  return (
    <div className="space-y-6">
      {/* About This Route */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
            <InfoIcon className="text-cyan-400" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            About {route.from} to {route.to} Route
          </h2>
        </div>

        <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
          {/* GEO direct-answer rewrite (geo_003 supersedes patch_012) */}
          <p>
            The {route.from} to {route.to} taxi fare with ModgillTravels starts at ₹{startingFare} for a Sedan one-way. The {route.distanceKm}km route takes approximately {route.duration} by road. We offer Sedan, Ertiga, and Innova Crysta options — all AC vehicles with GPS tracking and background-verified drivers. Book via WhatsApp or call +91-62849-92669 for instant confirmation 24/7.
          </p>

          {/* patch_013 */}
          <p>
            We offer one-way and round-trip options for the {route.from} to {route.to} route. One-way fares start from ₹{startingFare.toLocaleString()} — you pay only for the distance traveled, with no return charges on one-way bookings. Book by calling +91-62849-92669 or WhatsApp for instant confirmation. All taxis include GPS tracking, fuel charges, and driver charges — no hidden fees.
          </p>

          {/* patch_016 — internal links */}
          <p className="text-gray-400 text-sm mt-4">Also explore: <a href="/city/patiala" className="text-cyan-400 hover:underline">Patiala local taxi service</a> | <a href="/booking" className="text-cyan-400 hover:underline">All outstation routes from Patiala</a></p>

          {/* geo_009 — freshness timestamp */}
          <p className="text-gray-500 text-xs mt-3">Fares and route information last verified: March 2026. <a href="/contact" className="text-cyan-400 hover:underline">Contact us</a> for current availability.</p>
        </div>
      </section>

      {/* Why Choose Us - 2 Column Grid */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <CheckCircleIcon className="text-green-400" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Why Book With Us?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex gap-3 p-3 bg-slate-700/30 rounded-lg">
            <CheckCircleIcon className="text-green-400 flex-shrink-0 mt-0.5 w-5 h-5" />
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">Verified Drivers</h3>
              <p className="text-gray-400 text-xs">
                Experienced drivers familiar with {route.from}-{route.to} route
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-slate-700/30 rounded-lg">
            <CheckCircleIcon className="text-green-400 flex-shrink-0 mt-0.5 w-5 h-5" />
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">No Hidden Charges</h3>
              <p className="text-gray-400 text-xs">
                Transparent pricing for the entire {route.distanceKm}km journey
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-slate-700/30 rounded-lg">
            <CheckCircleIcon className="text-green-400 flex-shrink-0 mt-0.5 w-5 h-5" />
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">24/7 Available</h3>
              <p className="text-gray-400 text-xs">
                Book anytime for immediate or advance bookings
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-slate-700/30 rounded-lg">
            <CheckCircleIcon className="text-green-400 flex-shrink-0 mt-0.5 w-5 h-5" />
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">Multiple Vehicles</h3>
              <p className="text-gray-400 text-xs">
                Choose Sedan, SUV based on group size
              </p>
            </div>
          </div>
        </div>

        {/* patch_044 — contextual internal links */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-gray-300 text-sm">Also looking for routes? Explore <a href="/routes/patiala-to-chandigarh" className="text-cyan-400 hover:underline">Patiala to Chandigarh taxi</a> (₹1,400), <a href="/routes/patiala-to-shimla" className="text-cyan-400 hover:underline">Patiala to Shimla taxi</a> (₹2,600), or view <a href="/booking" className="text-cyan-400 hover:underline">all outstation routes from Patiala</a>.</p>
        </div>
      </section>

      {/* Booking Details - Compact */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <LocalOfferIcon className="text-blue-400" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Fare & Booking Details
          </h2>
        </div>

        {/* patch_015 — vehicle fare comparison table */}
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left text-gray-400 pb-2 pr-4">Vehicle</th>
                <th className="text-right text-gray-400 pb-2 pr-4">Capacity</th>
                <th className="text-right text-gray-400 pb-2 pr-4">One Way</th>
                <th className="text-right text-gray-400 pb-2">Round Trip</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/30">
                <td className="text-white py-2 pr-4">Sedan (Swift/Etios)</td>
                <td className="text-gray-300 text-right pr-4">4 passengers</td>
                <td className="text-cyan-400 font-bold text-right pr-4">₹{route.fare?.['Sedan']?.toLocaleString?.() || route.fare?.Sedan?.toLocaleString?.() || startingFare.toLocaleString()}</td>
                <td className="text-gray-300 text-right">{route.roundTripFare?.['Sedan'] ? `₹${typeof route.roundTripFare['Sedan'] === 'number' ? route.roundTripFare['Sedan'].toLocaleString() : route.roundTripFare['Sedan']}` : 'On Request'}</td>
              </tr>
              <tr className="border-b border-gray-700/30">
                <td className="text-white py-2 pr-4">Maruti Ertiga</td>
                <td className="text-gray-300 text-right pr-4">6 passengers</td>
                <td className="text-cyan-400 font-bold text-right pr-4">₹{route.fare?.['Maruti Ertiga WC']?.toLocaleString?.() || 'On Request'}</td>
                <td className="text-gray-300 text-right">{route.roundTripFare?.['Maruti Ertiga WC'] ? `₹${typeof route.roundTripFare['Maruti Ertiga WC'] === 'number' ? route.roundTripFare['Maruti Ertiga WC'].toLocaleString() : route.roundTripFare['Maruti Ertiga WC']}` : 'On Request'}</td>
              </tr>
              <tr className="border-b border-gray-700/30">
                <td className="text-white py-2 pr-4">Toyota Innova</td>
                <td className="text-gray-300 text-right pr-4">7 passengers</td>
                <td className="text-cyan-400 font-bold text-right pr-4">₹{route.fare?.['Toyota Innova WC']?.toLocaleString?.() || 'On Request'}</td>
                <td className="text-gray-300 text-right">{route.roundTripFare?.['Toyota Innova WC'] ? `₹${typeof route.roundTripFare['Toyota Innova WC'] === 'number' ? route.roundTripFare['Toyota Innova WC'].toLocaleString() : route.roundTripFare['Toyota Innova WC']}` : 'On Request'}</td>
              </tr>
              <tr>
                <td className="text-white py-2 pr-4">Innova Crysta (Premium)</td>
                <td className="text-gray-300 text-right pr-4">7 passengers</td>
                <td className="text-cyan-400 font-bold text-right pr-4">₹{route.fare?.['Toyota Innova Crysta WC']?.toLocaleString?.() || 'On Request'}</td>
                <td className="text-gray-300 text-right">{route.roundTripFare?.['Toyota Innova Crysta WC'] ? `₹${typeof route.roundTripFare['Toyota Innova Crysta WC'] === 'number' ? route.roundTripFare['Toyota Innova Crysta WC'].toLocaleString() : route.roundTripFare['Toyota Innova Crysta WC']}` : 'On Request'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          {/* Left Column */}
          <div className="space-y-3">
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm">Route Information</h3>
              <ul className="space-y-1.5 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Distance: {route.distanceKm}km</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Duration: {route.duration}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Starting Fare: ₹{startingFare.toLocaleString()}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Payment: Cash, UPI, Cards</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            <div>
              <h3 className="text-white font-semibold mb-2 text-sm">What&apos;s Included</h3>
              <ul className="space-y-1.5 text-gray-300">
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Professional driver</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Fuel charges included</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>GPS tracking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Compact Accordion with Smooth Animations */}
<section className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-6">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
      <HelpOutlineIcon className="text-purple-400" />
    </div>
    <h2 className="text-xl sm:text-2xl font-bold text-white">
      Frequently Asked Questions
    </h2>
  </div>

  <div className="space-y-3">
    <details className="group faq-item">
      <summary className="flex items-center justify-between cursor-pointer text-white font-semibold p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 text-sm list-none">
        <span>How much is the taxi fare from {route.from} to {route.to}?</span>
        <span className="text-cyan-400">▼</span>
      </summary>
      <div className="faq-content">
        <div className="mt-2 p-3 text-gray-300 text-xs sm:text-sm bg-slate-700/20 rounded-lg">
          Taxi fare starts at ₹{startingFare.toLocaleString()} for a Sedan (one way). Prices vary by vehicle type
          and trip type (one way/round trip). No hidden charges—transparent pricing guaranteed.
        </div>
      </div>
    </details>

    <details className="group faq-item">
      <summary className="flex items-center justify-between cursor-pointer text-white font-semibold p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 text-sm list-none">
        <span>How long does the journey take?</span>
        <span className="text-cyan-400">▼</span>
      </summary>
      <div className="faq-content">
        <div className="mt-2 p-3 text-gray-300 text-xs sm:text-sm bg-slate-700/20 rounded-lg">
          The {route.distanceKm}km journey typically takes {route.duration}. Actual time may vary
          based on traffic, weather, and route conditions.
        </div>
      </div>
    </details>

    <details className="group faq-item">
      <summary className="flex items-center justify-between cursor-pointer text-white font-semibold p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 text-sm list-none">
        <span>Do you offer one way taxi without return charges?</span>
        <span className="text-cyan-400">▼</span>
      </summary>
      <div className="faq-content">
        <div className="mt-2 p-3 text-gray-300 text-xs sm:text-sm bg-slate-700/20 rounded-lg">
          Yes! We offer one way taxi service where you pay only for the distance traveled from {route.from}
          to {route.to}. No return fare charges for one way bookings.
        </div>
      </div>
    </details>

    <details className="group faq-item">
      <summary className="flex items-center justify-between cursor-pointer text-white font-semibold p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 text-sm list-none">
        <span>Are your drivers experienced with this route?</span>
        <span className="text-cyan-400">▼</span>
      </summary>
      <div className="faq-content">
        <div className="mt-2 p-3 text-gray-300 text-xs sm:text-sm bg-slate-700/20 rounded-lg">
          Absolutely! All drivers are verified professionals familiar with the {route.from} to {route.to}
          route. They hold valid licenses and undergo regular training.
        </div>
      </div>
    </details>

    {/* geo_004 — 4 additional FAQ items with FAQPage microdata */}
    <details className="group faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <summary className="flex items-center justify-between cursor-pointer text-white font-semibold p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 text-sm list-none" itemProp="name">
        <span>What vehicles are available for {route.from} to {route.to} taxi?</span>
        <span className="text-cyan-400">▼</span>
      </summary>
      <div className="faq-content" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div className="mt-2 p-3 text-gray-300 text-xs sm:text-sm bg-slate-700/20 rounded-lg" itemProp="text">ModgillTravels offers Sedan (up to 4 passengers), Ertiga (up to 6 passengers), and Innova Crysta (up to 7 passengers) for this route. Sedans are ideal for couples or small families; Innova Crysta is recommended for hill routes and large groups. All vehicles are air-conditioned with GPS tracking and professional drivers.</div>
      </div>
    </details>

    <details className="group faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <summary className="flex items-center justify-between cursor-pointer text-white font-semibold p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 text-sm list-none" itemProp="name">
        <span>Is it safe to travel from {route.from} to {route.to} at night?</span>
        <span className="text-cyan-400">▼</span>
      </summary>
      <div className="faq-content" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div className="mt-2 p-3 text-gray-300 text-xs sm:text-sm bg-slate-700/20 rounded-lg" itemProp="text">Yes. ModgillTravels operates 24/7 including late-night journeys. All drivers are background-verified with valid commercial licenses and are familiar with the {route.from}–{route.to} route day and night. Vehicles have GPS tracking active at all times. For night travel, book at least 1 hour in advance — call or WhatsApp +91-62849-92669.</div>
      </div>
    </details>

    <details className="group faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <summary className="flex items-center justify-between cursor-pointer text-white font-semibold p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 text-sm list-none" itemProp="name">
        <span>How do I book a last-minute cab from {route.from} to {route.to}?</span>
        <span className="text-cyan-400">▼</span>
      </summary>
      <div className="faq-content" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div className="mt-2 p-3 text-gray-300 text-xs sm:text-sm bg-slate-700/20 rounded-lg" itemProp="text">For last-minute bookings, WhatsApp ModgillTravels at +91-62849-92669 with your pickup location, destination, and time. We confirm availability within 15 minutes. Calling is also available 24/7 at the same number. Same-day booking confirmation guaranteed for most routes.</div>
      </div>
    </details>

    <details className="group faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <summary className="flex items-center justify-between cursor-pointer text-white font-semibold p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 text-sm list-none" itemProp="name">
        <span>What is the Innova Crysta taxi fare from {route.from} to {route.to}?</span>
        <span className="text-cyan-400">▼</span>
      </summary>
      <div className="faq-content" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div className="mt-2 p-3 text-gray-300 text-xs sm:text-sm bg-slate-700/20 rounded-lg" itemProp="text">The Innova Crysta one-way fare from {route.from} to {route.to} is available upon booking — call or WhatsApp +91-62849-92669 for current Innova rates. The Innova Crysta fits up to 7 passengers with comfortable legroom and boot space — ideal for families, groups, and hill station trips. Price includes fuel, driver, and tolls.</div>
      </div>
    </details>
  </div>
</section>

    </div>
  );
}
