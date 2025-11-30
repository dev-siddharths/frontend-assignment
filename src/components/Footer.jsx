import React from "react";
import uplers from "../assets/uplers1.png";
import linkedin from "../assets/logo-linkedin 1.png";
import google from "../assets/ic-google 1.png";
import clutch from "../assets/logo-clutch 1.png";
const Footer = () => {
  return (
    <footer className="w-full bg-[#FFFCEE] pt-14 pb-10 border-t border-yellow-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* TOP - 4 Columns + Logo */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>How it Works</li>
              <li>Why Uplers</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Blog</li>
              <li>Success Stories</li>
              <li>All in Recruitment</li>
              <li>Knowledge Base</li>
            </ul>
          </div>

          {/* For Talents */}
          <div>
            <h4 className="font-semibold mb-3">For Talents</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Find a Job</li>
              <li>Knowledge Base</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Why Uplers */}
          <div>
            <h4 className="font-semibold mb-3">Why Uplers?</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Our Talent Community</li>
              <li>Mission Focused</li>
              <li>Untapped Talent Markets</li>
              <li>Browse Talent</li>
            </ul>
          </div>

          {/* Logo + Social */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <img src={uplers} alt="Uplers" className="w-24" />

            <div className="flex gap-4 text-xl">
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>
        </div>

        {/* MID - Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-sm">
          <div className="text-gray-700">
            <p>+1 818 740 6131</p>
            <p>hello@uplers.com</p>
          </div>

          {/* Social badge row */}
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            {/* LinkedIn followers */}
            <div className="flex items-center gap-2 border rounded-full px-4 py-2 bg-blend-color">
              <img src={linkedin} className="w-10" />
              <span className="font-semibold">1M+</span>
              <span className="text-gray-600">Followers</span>
            </div>

            {/* Clutch */}
            <div className="flex items-center gap-2 border rounded-full px-4 py-2 bg-blend-color">
              <img src={clutch} className="w-10" />
              <span>4.9 ⭐</span>
              <span className="text-gray-600">126 reviews</span>
            </div>

            {/* Google */}
            <div className="flex items-center gap-2 border rounded-full px-4 py-2 bg-blend-color">
              <img src={google} className="w-10" />
              <span>4.1 ⭐</span>
              <span className="text-gray-600">396 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
