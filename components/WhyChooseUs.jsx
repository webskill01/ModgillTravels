import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedIcon from '@mui/icons-material/Verified';
import PaymentIcon from '@mui/icons-material/Payment';
import StarRateIcon from '@mui/icons-material/StarRate';

const features = [
  {
    icon: <SupportAgentIcon className="w-12 h-12 text-cyan-400" />,
    title: "24/7 Customer Support",
    description: "A dedicated 24x7 customer support team always at your service to help and take care of any issue."
  },
  {
    icon: <VerifiedIcon className="w-12 h-12 text-green-400" />,
    title: "Convenience", 
    description: "Book in 3 easy steps search, select and book on web, app or phone"
  },
  {
    icon: <PaymentIcon className="w-12 h-12 text-purple-400" />,
    title: "Cashless Rides",
    description: "Now go cashless and travel easy. Simply pay with your UPI app or swipe your credit/debit card to enjoy trouble free payments."
  },
  {
    icon: <StarRateIcon className="w-12 h-12 text-yellow-400" />,
    title: "Best Price Guarantee", 
    description: "We guarantee to provide verified and trained drivers to deliver only the best ride at very reasonable prices."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Why ModgillTravels?</h2>
        <p className="text-gray-400 text-lg">The Best Way To Travel To Your Destination</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow flex flex-col min-h-[200px] w-full">
            <div className="flex justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mt-auto">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
