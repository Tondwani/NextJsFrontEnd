'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Fusion Gym</h3>
            <p className="text-gray-300 text-sm">
              Transform your fitness journey with the ultimate fitness experience that combines workouts, nutrition, and community.
            </p>
          </div>
         
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/home" className="text-gray-300 hover:text-white transition cursor-pointer">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition cursor-pointer">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition cursor-pointer">Contact Us</Link>
              </li>
            </ul>
          </div>
         
          <div>
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a className="text-gray-300 hover:text-white transition cursor-pointer">Workout Plans</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition cursor-pointer">Nutrition Tracking</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white transition cursor-pointer">Community Challenges</a>
              </li>
            </ul>
          </div>
        </div>
       
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Fusion Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;