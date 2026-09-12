// components/AboutContent.jsx
import Link from 'next/link';
import site, { waLink } from "@/data/site";
import Button from "@/components/ui/Button";
import { InfoIcon, PeopleIcon, DirectionsCarIcon, StarIcon, SecurityIcon, SupportAgentIcon, LocationOnIcon, PhoneIcon, CheckCircleIcon, WhatsAppIcon } from '@/components/Icons';

// patch_025: Replace '10+ Years Experience' with '5,000+ Trips Completed' (fixes false claim)
const stats = [
 { label: 'Happy Customers', value: '5000+', icon: <PeopleIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
 { label: 'Routes Covered', value: '50+', icon: <LocationOnIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
 { label: 'Professional Drivers', value: '25+', icon: <DirectionsCarIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
 { label: 'Trips Completed', value: '5,000+', icon: <StarIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
];

const features = [
 {
 icon: <SecurityIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
 title: 'Safe & Secure',
 description: 'All drivers undergo background verification with valid licenses. Vehicles are sanitized and maintained regularly for your safety.'
 },
 {
 icon: <SupportAgentIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
 title: '24/7 Customer Support',
 description: 'Round-the-clock assistance via phone and WhatsApp. Emergency support available for all bookings.'
 },
 {
 icon: <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
 title: 'Transparent Pricing',
 description: 'A fixed quote confirmed before the trip. No hidden charges and no surge pricing.'
 },
 {
 icon: <DirectionsCarIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
 title: 'Modern Fleet',
 description: 'Well-maintained AC vehicles ranging from sedans to SUVs. Clean, comfortable rides for all group sizes.'
 },
];

export default function AboutContent() {
 return (
 <div className="min-h-screen">

 {/* Hero Header - Mobile Optimized */}
 <section className="bg-white border-b border-line">
 <div className="max-w-6xl mx-auto px-4 py-10 sm:py-12">
 <div className="text-center">
 <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-soft border border-brand rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
 <InfoIcon className="w-7 h-7 sm:w-8 sm:h-8 text-brand" />
 </div>
 {/* patch_021: H1 rewrite */}
 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-4 sm:mb-6">
 About ModgillTravels — Best Taxi Service in Patiala, Punjab
 </h1>
 <p className="text-base sm:text-lg md:text-xl text-ink-muted max-w-3xl mx-auto leading-relaxed">
 Your trusted partner for comfortable and reliable taxi services across Punjab, Haryana,
 Himachal Pradesh and Delhi NCR.
 </p>
 </div>
 </div>
 </section>

 <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">

 {/* Stats Section - Mobile First Grid */}
 <section className="mb-12 sm:mb-16">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink text-center mb-8">
 Our Journey in Numbers
 </h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
 {stats.map((stat, index) => (
 <div
 key={index}
 className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-line hover:border-brand transition-all"
 >
 <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 bg-accent-soft`}>
 <span className="text-brand">
 {stat.icon}
 </span>
 </div>
 <div className="text-2xl sm:text-3xl font-bold text-ink mb-1 sm:mb-2">{stat.value}</div>
 <div className="text-ink-muted text-sm">{stat.label}</div>
 </div>
 ))}
 </div>
 </section>

 {/* Main Content Grid - Mobile Stacked */}
 <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">

 {/* Our Story */}
 <div className="space-y-6">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4 sm:mb-6">Our Story</h2>

 <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-line">
 <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4 flex items-center gap-2">
 <span className="w-2 h-2 bg-accent rounded-full"></span>
 Founded on Trust
 </h3>
 {/* patch_023: founding year fix + E-E-A-T language */}
 <p className="text-ink-muted text-sm sm:text-base leading-relaxed mb-4">
 ModgillTravels was founded in Patiala, Punjab in 2025 with a mission to provide reliable, transparent, and affordable taxi service across North India. Our drivers are background-verified, hold valid commercial licenses, and are trained for outstation highway driving. In our first year of operations, we completed over 5,000 trips across Punjab, Haryana, Delhi NCR, and Himachal Pradesh.
 </p>
 <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
 We understand that every journey matters—whether it&apos;s a business meeting in Chandigarh,
 a family vacation to Shimla, or an emergency trip to Delhi. That&apos;s why we&apos;ve built our
 service on punctuality, safety, and customer satisfaction.
 </p>
 </div>

 <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-line">
 <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4 flex items-center gap-2">
 <span className="w-2 h-2 bg-accent rounded-full"></span>
 Our Mission
 </h3>
 <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
 To be North India&apos;s most reliable taxi service by delivering transparent pricing,
 professional drivers, and exceptional customer support. We strive to make every
 journey safe, comfortable, and memorable for our passengers.
 </p>
 </div>

 {/* patch_024: Replace false 2015 claim */}
 <div className="bg-surface border border-brand rounded-xl p-4 sm:p-5">
 <p className="text-brand text-sm sm:text-base leading-relaxed">
 <strong className="text-brand">Serving since 2025:</strong> ModgillTravels is Patiala&apos;s dedicated taxi service for outstation cab booking, airport transfers, and corporate travel. Over 5,000 satisfied customers across Punjab, Haryana, Delhi, and Himachal Pradesh in our first year.
 </p>
 </div>
 </div>

 {/* Why Choose Us */}
 <div className="space-y-6">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4 sm:mb-6">Why Choose Us?</h2>

 <div className="space-y-4">
 {features.map((feature, index) => (
 <div
 key={index}
 className="bg-white rounded-xl p-4 sm:p-5 border border-line hover:border-brand transition-all group"
 >
 <div className="flex items-start gap-3 sm:gap-4">
 <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform bg-accent-soft`}>
 <span className="text-brand">
 {feature.icon}
 </span>
 </div>
 <div className="flex-1">
 <h3 className="text-base sm:text-lg font-semibold text-ink mb-2">{feature.title}</h3>
 <p className="text-ink-muted text-sm leading-relaxed">{feature.description}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* patch_026: New H2 section for SEO */}
 <section className="mb-12">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-4">Why ModgillTravels is Patiala&apos;s Best Taxi Service</h2>
 <p className="text-ink-muted text-sm sm:text-base leading-relaxed">ModgillTravels stands out among Patiala taxi services for three core reasons: a fixed quote confirmed on WhatsApp before the trip, verified drivers (background-checked with valid commercial licenses), and true 24/7 availability for both last-minute and advance outstation cab bookings. We serve all of Patiala — Urban Estate, Rajindra Hospital area, Punjabi University, Leela Bhawan, and Tripuri — as well as all major outstation routes across Punjab, Haryana, and Himachal Pradesh.</p>
 </section>

 {/* Service Areas & Contact - Responsive */}
 <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">

 {/* Service Areas */}
 <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-line">
 <h3 className="text-xl sm:text-2xl font-bold text-ink mb-5 sm:mb-6 flex items-center gap-2">
 <LocationOnIcon className="w-5 h-5 text-brand" />
 Service Coverage
 </h3>

 <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6">
 <div>
 <h4 className="text-ink font-semibold mb-3 text-sm sm:text-base">Major Cities</h4>
 <ul className="text-ink-muted text-sm space-y-2">
 <li className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
 Patiala
 </li>
 <li className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
 Chandigarh
 </li>
 <li className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
 Ludhiana
 </li>
 <li className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
 Amritsar
 </li>
 </ul>
 </div>
 <div>
 <h4 className="text-ink font-semibold mb-3 text-sm sm:text-base">Popular Routes</h4>
 <ul className="text-ink-muted text-sm space-y-2">
 <li className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
 Delhi - Patiala
 </li>
 <li className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
 Patiala - Shimla
 </li>
 <li className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
 Chandigarh - Manali
 </li>
 <li className="flex items-center gap-2">
 <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
 Delhi - Shimla
 </li>
 </ul>
 </div>
 </div>

 <div className="pt-4 border-t border-line">
 <p className="text-ink-muted text-sm flex items-start gap-2">
 <CheckCircleIcon className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
 <span><strong>Full Coverage:</strong> Punjab, Haryana, Himachal Pradesh, and Delhi NCR region</span>
 </p>
 </div>
 </div>

 {/* Contact Info */}
 <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-line">
 <h3 className="text-xl sm:text-2xl font-bold text-ink mb-5 sm:mb-6 flex items-center gap-2">
 <PhoneIcon className="w-5 h-5 text-brand" />
 Contact Information
 </h3>

 <div className="space-y-4">
 <div className="p-3 bg-surface rounded-lg">
 <h4 className="text-ink font-semibold mb-2 text-sm sm:text-base">Phone & WhatsApp</h4>
 <Button variant="call" size="sm" href={`tel:${site.phone}`}>
 <PhoneIcon className="w-4 h-4 shrink-0" />
 <span>Call Now</span>
 </Button>
 <p className="text-ink-muted text-sm mt-1">Available 24/7 for bookings</p>
 </div>

 <div className="p-3 bg-surface rounded-lg">
 <h4 className="text-ink font-semibold mb-2 text-sm sm:text-base">Email</h4>
 <a
 href={`mailto:${site.email}`}
 className="text-brand hover:text-brand-hover transition text-sm sm:text-base break-all"
 >
 {site.email}
 </a>
 <p className="text-ink-muted text-sm mt-1">Response within 2 hours</p>
 </div>

 <div className="p-3 bg-surface rounded-lg">
 <h4 className="text-ink font-semibold mb-2 text-sm sm:text-base">Office Location</h4>
 <p className="text-ink-muted text-sm leading-relaxed">
 {site.address.street}
 <br />
 {site.address.locality}, {site.address.region}{" "}
 {site.address.postalCode}
 </p>
 {/* patch_042: Fix hours inconsistency */}
 <p className="text-ink-muted text-sm mt-2">Office visits: Mon-Sun, 9 AM – 8 PM. Phone & WhatsApp booking: Open 24 hours, 7 days a week.</p>
 </div>
 </div>

 <div className="mt-5 pt-4 border-t border-line">
 <Link
 href="/contact"
 className="text-brand hover:text-brand-hover transition text-sm flex items-center gap-2"
 >
 <span>→ View detailed contact information</span>
 </Link>
 </div>
 </div>
 </section>

 {/* Core Values - Enhanced */}
 <section className="bg-surface border border-brand rounded-2xl p-6 sm:p-8 mb-12">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink text-center mb-6 sm:mb-8">Our Core Values</h2>

 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
 <div className="text-center">
 <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-soft border border-line rounded-full flex items-center justify-center mx-auto mb-4">
 <SecurityIcon className="w-7 h-7 sm:w-8 sm:h-8 text-brand" />
 </div>
 <h3 className="text-base sm:text-lg font-semibold text-ink mb-2">Safety First</h3>
 <p className="text-ink-muted text-sm leading-relaxed">
 Every journey prioritizes passenger safety with background-verified drivers and well-maintained vehicles.
 </p>
 </div>

 <div className="text-center">
 <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-soft border border-line rounded-full flex items-center justify-center mx-auto mb-4">
 <CheckCircleIcon className="w-7 h-7 sm:w-8 sm:h-8 text-brand" />
 </div>
 <h3 className="text-base sm:text-lg font-semibold text-ink mb-2">Reliability</h3>
 <p className="text-ink-muted text-sm leading-relaxed">
 On-time pickups, transparent communication, and consistent service quality you can count on.
 </p>
 </div>

 <div className="text-center">
 <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-soft border border-brand rounded-full flex items-center justify-center mx-auto mb-4">
 <SupportAgentIcon className="w-7 h-7 sm:w-8 sm:h-8 text-brand" />
 </div>
 <h3 className="text-base sm:text-lg font-semibold text-ink mb-2">Customer First</h3>
 <p className="text-ink-muted text-sm leading-relaxed">
 Your comfort and satisfaction drive every decision we make in our service delivery.
 </p>
 </div>
 </div>
 </section>

 {/* CTA Section - Enhanced */}
 <section className="text-center bg-white border border-brand rounded-2xl p-6 sm:p-8">
 <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-3 sm:mb-4">
 Ready to Experience Quality Service?
 </h2>
 <p className="text-ink-muted text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
 Join thousands of satisfied customers who trust ModgillTravels for their transportation needs.
 Book your next journey today and discover the difference.
 </p>

 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
 <Button variant="primary" size="lg" href="/"
 >
 <DirectionsCarIcon className="w-5 h-5" />
 <span>Book Your Ride</span>
 </Button>
 <Button variant="whatsapp" external href={waLink("Hi, I want to know more about your services")} className="justify-center"><WhatsAppIcon className="w-5 h-5" />
 <span>WhatsApp Us</span></Button>
 </div>
 </section>
 </div>
 </div>
 );
}
