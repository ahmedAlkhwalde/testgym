"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "/product", hasDropdown: false },
  { name: "Collection", href: "/collection", hasDropdown: true },
  { name: "Product", href: "/product/gym-coords-set", hasDropdown: true },
  { name: "Mega Menu", href: "/mega-menu", hasDropdown: true },
  { name: "Blogs", href: "/blogs", hasDropdown: true },
  { name: "Pages", href: "/pages", hasDropdown: true },
  { name: "Seller", href: "/seller", hasDropdown: true },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans sticky top-0 z-50 bg-white">
      {/* 1. Top Bar */}
      <div className="bg-[#2d2d2d] text-[#a1a1a1] text-xs py-2 px-4 border-b border-[#3a3a3a] hidden sm:block">
        <div className="max-w-[1320px] mx-auto flex justify-between items-center">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone size={13} className="text-[#e26e43]" />
            <span className="text-[#bbbbbb] text-lg font-normal">
              Call Us: 123 - 456 - 7890
            </span>
          </div>

          {/* Language & Currency */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition">
              <span className="text-xs">🇺🇸</span>
              <span className="font-semibold text-[#bbbbbb] text-xs tracking-wider">
                ENGLISH
              </span>
              <ChevronDown size={12} className="text-gray-300" />
            </div>
            <span className="text-[#555555]">|</span>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition">
              <span className="font-semibold text-[#bbbbbb] text-xs tracking-wider">
                USD
              </span>
              <ChevronDown size={12} className="text-gray-300" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Header */}
      <div className="bg-white border-b border-gray-100 py-3 md:py-5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Mobile Menu Button + Logo */}
          <div className="flex items-center gap-3">
            {/* زر القائمة المنسدلة للشاشات الصغيرة */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-1 text-gray-700 hover:text-[#e26e43] transition focus:outline-none"
              aria-label="Toggle Menu"
            >
              <Menu size={26} />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Multikart Logo"
                width={140}
                height={45}
                className="w-[120px] sm:w-[140px] md:w-[150px] h-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1 text-[30px] xl:text-[17px] text-[#2e2d2d] hover:text-[#e26e43] transition whitespace-nowrap"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown size={14} className="text-gray-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-4 text-[#333333]">
            <button className="hover:text-[#e26e43] transition p-1.5 cursor-pointer">
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button className="hover:text-[#e26e43] transition p-1.5 cursor-pointer hidden sm:block">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <Link
              href="/cart"
              className="hover:text-[#e26e43] transition relative p-1.5"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute top-0 right-0 bg-[#e26e43] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </Link>
            <button className="hover:text-[#e26e43] transition p-1.5 cursor-pointer hidden sm:block">
              <User className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Sidebar Drawer */}
      {/* الخلفية المظلمة عند فتح القائمة */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* القائمة الجانبية للموبايل */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform lg:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* هيدر القائمة الجانبية */}
        <div className="p-4 border-b flex items-center justify-between bg-gray-50">
          <Image
            src="/images/logo.png"
            alt="Multikart Logo"
            width={120}
            height={38}
            className="h-auto object-contain"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 text-gray-600 hover:text-[#e26e43] transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* روابط الملاحة داخل الموبايل */}
        <div className="flex-1 overflow-y-auto py-4 px-4">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 px-2 text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-[#e26e43] rounded-md transition"
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown size={16} className="text-gray-400" />
                )}
              </Link>
            ))}
          </nav>

          <hr className="my-4 border-gray-200" />

          {/* خيارات إضافية للموبايل (الحساب والمفضلة) */}
          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 text-gray-700 hover:text-[#e26e43] py-2 px-2"
            >
              <User size={20} />
              <span className="text-sm font-medium">My Account</span>
            </Link>
            <Link
              href="/wishlist"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 text-gray-700 hover:text-[#e26e43] py-2 px-2"
            >
              <Heart size={20} />
              <span className="text-sm font-medium">Wishlist</span>
            </Link>
          </div>
        </div>

        {/* فوتر القائمة الجانبية */}
        <div className="p-4 border-t bg-gray-50 text-xs text-gray-500 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#e26e43]" />
            <span>Call Us: 123 - 456 - 7890</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span>Currency: USD</span>
            <span>Language: EN</span>
          </div>
        </div>
      </aside>
    </header>
  );
}
