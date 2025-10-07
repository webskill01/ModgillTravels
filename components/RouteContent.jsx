// components/RouteContent.jsx
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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
          <p>
            Planning a trip from {route.from} to {route.to}? ModgillTravels provides reliable 
            taxi service for this {route.distanceKm}km route with experienced drivers and comfortable 
            AC vehicles. The journey typically takes {route.duration}, depending on traffic conditions.
          </p>

          <p>
            We offer both one way taxi and round trip options starting from ₹{startingFare.toLocaleString()}. 
            All vehicles are equipped with GPS tracking, and our professional drivers ensure a safe, 
            comfortable journey. Book online or call us at +91-62849-92669 for instant confirmation.
          </p>
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
              <h3 className="text-white font-semibold mb-2 text-sm">What's Included</h3>
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
  </div>
</section>

    </div>
  );
}
