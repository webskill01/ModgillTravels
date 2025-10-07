// components/WhyChooseUs.jsx
import VerifiedIcon from '@mui/icons-material/Verified';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <VerifiedIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Verified Drivers',
      description: 'Background checked & licensed',
      color: 'green'
    },
    {
      icon: <AccessTimeIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: '24/7 Service',
      description: 'Available anytime, anywhere',
      color: 'blue'
    },
    {
      icon: <PaymentIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Fair Pricing',
      description: 'No hidden charges',
      color: 'purple'
    },
    {
      icon: <SupportAgentIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: 'Quick Support',
      description: 'Instant booking & help',
      color: 'cyan'
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4">
      {/* Header - Compact */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Why Choose Us?
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Your trusted taxi partner in Patiala
        </p>
      </div>

      {/* Features Grid - Compact */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700 rounded-xl p-4 sm:p-5 text-center hover:border-cyan-500/40 transition-all hover:scale-105"
          >
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3 ${
              feature.color === 'green' ? 'bg-green-500/20 text-green-400' :
              feature.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
              feature.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
              'bg-cyan-500/20 text-cyan-400'
            }`}>
              {feature.icon}
            </div>
            <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-xs">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
