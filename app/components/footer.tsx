"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaPinterestP } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#222222] text-[#aaaaaa] font-sans">
      {/* 1. Main Footer Content */}
      <div className="max-w-[1320px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Logo & Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-[#f28353] p-2 rounded-xs flex items-center justify-center">
                <span className="text-white font-bold text-2xl tracking-tighter">
                  M
                </span>
              </div>
              <span className="text-3xl font-bold text-white tracking-tight">
                ultikart
              </span>
            </div>

            <p className="text-[15px] leading-relaxed text-[#999999]">
              Discover the latest trends and enjoy seamless shopping with our
              exclusive collections.
            </p>

            <div className="flex flex-col gap-3 text-[14px] pt-2">
              <div className="flex items-start gap-2.5 group cursor-pointer">
                <MapPin size={18} className="text-[#999999] shrink-0 mt-0.5 group-hover:text-[#f28353] transition-colors" />
                <span className="relative inline-block ">
                  Multikart Demo Store, Demo Store India 345-659
                </span>
              </div>

              <div className="flex items-center gap-2.5 group cursor-pointer">
                <Phone size={18} className="text-[#999999] shrink-0 group-hover:text-[#f28353] transition-colors" />
                <span className="relative inline-block ">
                  Call Us: 123-456-7898
                </span>
              </div>

              <div className="flex items-center gap-2.5 group cursor-pointer">
                <Mail size={18} className="text-[#999999] shrink-0 group-hover:text-[#f28353] transition-colors" />
                <span className="relative inline-block ">
                  Email Us: Support@Multikart.Com
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: CATEGORIES */}
          <div>
            <h3 className="text-white font-bold text-[17px] uppercase tracking-wider mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-[#f28353] after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0 cursor-default">
              CATEGORIES
            </h3>
            <ul className="flex flex-col gap-3 text-[15px]">
              {[
                "Baby Essentials",
                "Bag Emporium",
                "Books",
                "Christmas",
                "Classic Furnishings",
                "Crystal Clarity Optics",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="relative inline-block py-0.5 text-[#aaaaaa] hover:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-[#f28353] after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: USEFUL LINKS */}
          <div>
            <h3 className="text-white font-bold text-[17px] uppercase tracking-wider mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-[#f28353] after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0 cursor-default">
              USEFUL LINKS
            </h3>
            <ul className="flex flex-col gap-3 text-[15px]">
              {[
                "Home",
                "Collections",
                "About Us",
                "Blogs",
                "Offers",
                "Search",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="relative inline-block py-0.5 text-[#aaaaaa] hover:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-[#f28353] after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: HELP CENTER */}
          <div>
            <h3 className="text-white font-bold text-[17px] uppercase tracking-wider mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-[#f28353] after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0 cursor-default">
              HELP CENTER
            </h3>
            <ul className="flex flex-col gap-3 text-[15px]">
              {[
                "My Account",
                "My Orders",
                "Wishlist",
                "Faq's",
                "Contact Us",
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="relative inline-block py-0.5 text-[#aaaaaa] hover:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-[#f28353] after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: FOLLOW US & Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-[17px] uppercase tracking-wider mb-1 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-[#f28353] after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0 cursor-default">
              FOLLOW US
            </h3>
            <p className="text-[14px] leading-relaxed text-[#999999]">
              Never Miss Anything From Store By Signing Up To Our Newsletter.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full bg-white text-[#222222] px-4 py-3 text-[15px] outline-none rounded-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#f28353] transition-all"
              />
              <button
                type="submit"
                className="w-full bg-[#f28353] hover:bg-[#e26e43] text-white font-bold text-[14px] uppercase tracking-wider py-3.5 transition-colors cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </form>

            {/* Social Icons via React Icons (FA6) */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#"
                className="w-9 h-9 bg-[#2d2d2d] hover:bg-[#f28353] text-[#aaaaaa] hover:text-white flex items-center justify-center transition-all duration-300 rounded-xs"
                aria-label="Facebook"
              >
                <FaFacebookF size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2d2d2d] hover:bg-[#f28353] text-[#aaaaaa] hover:text-white flex items-center justify-center transition-all duration-300 rounded-xs"
                aria-label="Twitter"
              >
                <FaXTwitter size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2d2d2d] hover:bg-[#f28353] text-[#aaaaaa] hover:text-white flex items-center justify-center transition-all duration-300 rounded-xs"
                aria-label="Instagram"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#2d2d2d] hover:bg-[#f28353] text-[#aaaaaa] hover:text-white flex items-center justify-center transition-all duration-300 rounded-xs"
                aria-label="Pinterest"
              >
                <FaPinterestP size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Bottom Copyright Bar */}
      <div className="bg-[#1c1c1c] py-4 border-t border-[#2a2a2a]">
        <div className="max-w-[1320px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] text-[#888888]">
          <div className="relative inline-block py-0.5  cursor-default">
            2026 themeforest powered by pixelstrap
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-2 flex-wrap">
            <img
              src="/images/payments.png"
              alt="Payment Methods"
              className="h-7 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}