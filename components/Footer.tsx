
import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon } from './icons';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <Logo isScrolled={false} className="h-12 w-auto" />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-slate-350">
              <span className="font-bold text-white block mb-2">Signature of Sophistication</span>
              We design and construct elite residential and commercial landmarks across Dhaka, combining sustainable architecture with timeless design standards.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-amber-400 transition-colors">Our Projects</Link></li>
              <li><Link to="/land" className="hover:text-amber-400 transition-colors">Land Development</Link></li>
              <li><Link to="/rental" className="hover:text-amber-400 transition-colors">Rental / Sales</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 pb-1">
                <PhoneIcon className="h-5 w-5 mt-0.5 text-amber-500" />
                <span>+880 123 456 7890</span>
              </li>
              <li className="flex items-start space-x-2 pb-1">
                <MailIcon className="h-5 w-5 mt-0.5 text-amber-500" />
                <span>contact@arrowproperties.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="mt-0.5 text-amber-500 text-base leading-none">📍</span>
                <span>123 Arrow Tower, Gulshan-2, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Arrow Properties Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
