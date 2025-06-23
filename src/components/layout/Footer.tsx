import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-600 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-playfair font-bold mb-6">Lavit<span className="text-gold-500">solution</span></h4>
            <p className="mb-6 text-gray-300">
              From Events to Infrastructure — We Build. We Connect. Transforming industries with innovation and excellence since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Our Divisions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gold-500 transition-colors duration-300">Lavit Events</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors duration-300">Lavit Civil</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors duration-300">Lavit Solar</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors duration-300">Lavit Electrical</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors duration-300">Lavit Elevators</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors duration-300">Quick Fix Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-gold-500" />
                <span>Corporate Headquarters,<br /> Plot 123, Sector 5, CBD Belapur,<br /> Navi Mumbai, 400614</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-gold-500" />
                <span>+91 (22) 6789 0123</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-gold-500" />
                <span>info@lavitsolution.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Lavitsolution Pvt India. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Terms of Service</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};