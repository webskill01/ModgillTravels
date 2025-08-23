// components/Footer.jsx
import Link from "next/link";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gradient-to-b from-slate-900/50 to-slate-950 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2   justify-items-center md:gap-0 gap-8">
          {/* Quick Links */}

          <div className="grid grid-cols-2 gap-6 md:gap-8 lg:gap-48 sm:justify-items-center">
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <div className="space-y-3">
                <Link
                  href="/about"
                  className="flex items-center text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 transform duration-200"
                >
                  <ArrowForwardIcon className="w-4 h-4 mr-2" />
                  About Us
                </Link>
                <Link
                  href="/terms"
                  className="flex items-center text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 transform duration-200"
                >
                  <ArrowForwardIcon className="w-4 h-4 mr-2" />
                  Terms & Services
                </Link>
                <Link
                  href="/privacy"
                  className="flex items-center text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 transform duration-200"
                >
                  <ArrowForwardIcon className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 transform duration-200"
                >
                  <ArrowForwardIcon className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Popular Routes */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Popular Routes</h4>
              <div className="space-y-3">
                <Link
                  href="/routes/patiala-to-delhi"
                  className="flex items-center text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 transform duration-200"
                >
                  <ArrowForwardIcon className="w-4 h-4 mr-2" />
                  Patiala To Delhi
                </Link>
                <Link
                  href="/routes/patiala-to-chandigarh"
                  className="flex items-center text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 transform duration-200"
                >
                  <ArrowForwardIcon className="w-4 h-4 mr-2" />
                  Patiala To Chandigarh
                </Link>
                <Link
                  href="/routes/patiala-to-ambala"
                  className="flex items-center text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 transform duration-200"
                >
                  <ArrowForwardIcon className="w-4 h-4 mr-2" />
                  Paitala to Ambala
                </Link>
                <Link
                  href="/routes/patiala-to-ludhiana"
                  className="flex items-center text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 transform duration-200"
                >
                  <ArrowForwardIcon className="w-4 h-4 mr-2" />
                  Patiala to Ludhiana
                </Link>
              </div>
            </div>
          </div>
          {/* Contact Info */}
            <div className="flex flex-col justify-center align-center gap-3">
              <a 
                href="tel:+91 6284992669" 
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-sm text-gray-400">+91 62849-92669</p>
                </div>
              </a>
              
              <a 
                href="mailto:modgilltravels@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                  <EmailIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-sm text-gray-400">modgilltravels@gmail.com</p>
                </div>
              </a>
              
              {/* <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <LocationOnIcon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-gray-400">Main Market, Patiala, Punjab</p>
                </div>
              </div> */}
            </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="text-gray-500 text-sm">
                &copy; {currentYear} ModgillTravels. All rights reserved.
              </div>
              
              {/* Legal Links */}
              <div className="flex items-center space-x-4 text-xs">
                <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            {/* Disclaimer & Social */}
            <div className="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://wa.me/6284992669?text=Hi, I want to book a taxi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center text-green-400 hover:bg-green-600/30 hover:scale-110 transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 hover:bg-blue-600/30 hover:scale-110 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-400 hover:bg-pink-600/30 hover:scale-110 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
              <div className="text-gray-500 text-xs text-center">Made By <a href="https://wa.me/6283380110?text=Hi," className="text-blue-400">Nitin Kumar</a></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <a
          href="https://wa.me/6284992669?text=Hi, I want to book a taxi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl hover:shadow-green-500/25 transform hover:scale-110 transition-all duration-300"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 text-white" />
        </a>
      </div>
    </footer>
  );
}
