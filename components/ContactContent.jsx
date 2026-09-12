// components/ContactContent.jsx
import Link from "next/link";
import site from "@/data/site";
import FAQAccordion from "@/components/FAQAccordion";
import Button from "@/components/ui/Button";
import BookCta from "@/components/ui/BookCta";
import { PhoneIcon, WhatsAppIcon, LocationOnIcon, AccessTimeIcon, EmailIcon, HeadsetMicIcon } from '@/components/Icons';

const contactMethods = [
  {
    id: "phone",
    title: "Call Us",
    icon: <PhoneIcon className="w-6 h-6" />,
    value: "Call Now",
    action: `tel:${site.callPhone}`,
    description: "Immediate taxi booking assistance",
    availability: "Available 24/7",
    color: "green",
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    icon: <WhatsAppIcon className="w-6 h-6" />,
    value: "Message Us",
    action: site.whatsappBook,
    description: "Quick chat support & instant booking",
    availability: "Response within 2 min",
    color: "green",
  },
  {
    id: "email",
    title: "Email Us",
    icon: <EmailIcon className="w-6 h-6" />,
    value: "modgilltravels@gmail.com",
    action: "mailto:modgilltravels@gmail.com",
    description: "Detailed inquiries & feedback",
    availability: "Reply within 2 hours",
    color: "blue",
  },
  {
    id: "location",
    title: "Visit Office",
    icon: <LocationOnIcon className="w-6 h-6" />,
    value: "Patiala, Punjab",
    action: "#office-location",
    description: "In-person consultation available",
    availability: "Mon-Sun: 9 AM - 8 PM",
    color: "purple",
  },
];

const contactFaqs = [
  {
    question: 'How do I book a taxi via WhatsApp?',
    answer: 'Send a WhatsApp message using the WhatsApp button on this page. Include: your pickup location in Patiala, your destination, travel date and time, and preferred vehicle type. We reply with a confirmed quote and driver details within 15 minutes.',
  },
  {
    question: 'How do I reach ModgillTravels?',
    answer: 'ModgillTravels uses one number for calls and WhatsApp — tap Call Now or Message Us above. We are available 24 hours a day, 7 days a week for taxi bookings, queries, and emergency cab service in Patiala and outstation routes.',
  },
  {
    question: 'How quickly can I get a cab in Patiala?',
    answer: 'For immediate bookings in Patiala, we dispatch a cab within 30–45 minutes depending on your pickup location. For outstation trips, advance booking of 2+ hours is recommended. For airport transfers, book at least 3 hours before your flight. WhatsApp us for the fastest response.',
  },
];

export default function ContactContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Header - Mobile Optimized */}
      <section className="border-b border-line bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent-soft border border-brand rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <HeadsetMicIcon className="w-7 h-7 sm:w-8 sm:h-8 text-brand" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink mb-3 sm:mb-4">
              Contact ModgillTravels
            </h1>
            <p className="text-ink-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Need a taxi in Patiala or nearby areas? We&apos;re here to help 24/7.
              Get instant booking confirmation via WhatsApp or call us now.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Contact Methods Grid - Mobile First */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6 text-center">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactMethods.map((method) => (
              <Link
                key={method.id}
                href={method.action}
                target={method.action.startsWith("http") ? "_blank" : undefined}
                rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-white border border-line rounded-xl p-5 sm:p-6 hover:border-brand transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 transition-transform  ${
                    method.color === "green"
                      ? "bg-accent-softhover:bg-accent"
                      : method.color === "blue"
                      ? "bg-accent-softhover:bg-accent"
                      : "bg-accent-softhover:bg-accent"
                  }`}
                >
                  <span
                    className={
                      method.color === "green"
                        ? "text-brand"
                        : method.color === "blue"
                        ? "text-brand"
                        : "text-brand"
                    }
                  >
                    {method.icon}
                  </span>
                </div>
                <h3 className="text-ink font-bold text-base sm:text-lg mb-2">
                  {method.title}
                </h3>
                <p className="text-brand text-sm sm:text-base font-medium mb-2 break-all">
                  {method.value}
                </p>
                <p className="text-ink-muted text-sm mb-3">{method.description}</p>
                <div className="flex items-center gap-2 text-sm text-ink-muted">
                  <AccessTimeIcon className="w-4 h-4" />
                  <span>{method.availability}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Info Sections - Responsive Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 sm:mb-12">
          {/* Business Hours */}
          <div className="bg-white border border-line rounded-xl p-5 sm:p-6">
            <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
              <AccessTimeIcon className="w-5 h-5 text-brand" />
              Business Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-2 bg-surface rounded-lg">
                <span className="text-ink-muted">Phone Support:</span>
                <span className="text-brand font-semibold">24/7</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-surface rounded-lg">
                <span className="text-ink-muted">WhatsApp:</span>
                <span className="text-brand font-semibold">24/7</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-surface rounded-lg">
                <span className="text-ink-muted">Email Response:</span>
                <span className="text-ink font-medium">Within 2 hrs</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-surface rounded-lg">
                <span className="text-ink-muted">Office Visits:</span>
                <span className="text-ink font-medium">9 AM - 8 PM</span>
              </div>
            </div>
          </div>

          {/* Office Location */}
          <div
            id="office-location"
            className="bg-white border border-line rounded-xl p-5 sm:p-6"
          >
            <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
              <LocationOnIcon className="w-5 h-5 text-brand" />
              Our Location
            </h3>
            <div className="space-y-4 text-sm">
              <div className="p-3 bg-surface rounded-lg">
                <span className="text-ink-muted text-sm block mb-1">Office Address:</span>
                <p className="text-ink font-medium leading-relaxed">
                  {site.address.street}
                  <br />
                  {site.address.locality}, {site.address.region}{" "}
                  {site.address.postalCode}
                </p>
              </div>
              <div className="p-3 bg-surface rounded-lg">
                <span className="text-ink-muted text-sm block mb-1">Service Coverage:</span>
                <p className="text-ink font-medium">
                  Punjab • Haryana • Himachal Pradesh • Delhi NCR
                </p>
              </div>
            </div>
          </div>

          {/* Quick Help Links */}
          <div className="bg-white border border-line rounded-xl p-5 sm:p-6">
            <h3 className="text-lg font-bold text-ink mb-4">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <Link
                href="/"
                className="flex items-center gap-2 text-brand hover:text-brand-hover transition p-2 bg-surface rounded-lg hover:bg-surface"
              >
                <span>→</span>
                <span>Book Taxi Now</span>
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-brand hover:text-brand-hover transition p-2 bg-surface rounded-lg hover:bg-surface"
              >
                <span>→</span>
                <span>About Us</span>
              </Link>
              <Link
                href="/privacy"
                className="flex items-center gap-2 text-brand hover:text-brand-hover transition p-2 bg-surface rounded-lg hover:bg-surface"
              >
                <span>→</span>
                <span>Privacy Policy</span>
              </Link>
              <Button variant="call" href={`tel:${site.callPhone}`} className=""><PhoneIcon className="w-4 h-4" />
                <span>Emergency Booking</span></Button>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-ink mb-4">Quick Answers</h2>
          <FAQAccordion faqs={contactFaqs} />
        </section>

        {/* Social Media - Enhanced */}
        <section className="bg-white border border-line rounded-xl p-5 sm:p-6 mb-10 sm:mb-12">
          <h3 className="text-lg font-bold text-ink mb-4 text-center">Connect With Us</h3>
          <BookCta align="center" size="lg" />
        </section>

        {/* Bottom CTA - Enhanced */}
        <section className="bg-surface border border-brand rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-ink mb-3 sm:mb-4">
            Need Immediate Taxi Booking?
          </h2>
          <p className="text-ink-muted text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
            Our support team is ready to assist you 24/7. Call now for instant booking
            or WhatsApp us for quick confirmation. Professional drivers, transparent pricing.
          </p>
          <BookCta align="center" size="lg" />
        </section>
      </main>
    </div>
  );
}
