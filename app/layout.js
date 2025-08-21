// app/layout.js
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production' 
      ? 'https://modgilltravels.com'  // Replace with your actual domain
      : 'http://localhost:3000'
  ),
  
  title: {
    template: '%s | ModgillTravels',
    default: 'ModgillTravels - Professional Taxi Service in Punjab'
  },
  description: 'Professional taxi booking service in Punjab, Haryana, Himachal Pradesh & Delhi NCR. Transparent fares, quick bookings, SMS notifications.',
  keywords: ['taxi service Punjab', 'cab booking', 'ModgillTravels', 'taxi Patiala', 'Delhi to Patiala taxi'],
  
  openGraph: {
    title: 'ModgillTravels - Professional Taxi Service',
    description: 'Professional taxi booking service in Punjab, Haryana, Himachal Pradesh & Delhi NCR. Transparent fares, quick bookings, SMS notifications.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'ModgillTravels',
  },
  
  twitter: {
    card: 'summary',
    title: 'ModgillTravels - Professional Taxi Service',
    description: 'Professional taxi booking service with transparent fares and quick bookings.',
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ScrollToTop/>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
