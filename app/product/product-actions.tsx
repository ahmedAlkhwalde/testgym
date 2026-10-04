"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Heart,
  RefreshCw,
  Share2,
} from "lucide-react";

export interface ColorOption {
  id: string;
  name: string;
  image: string;
  images: string[];
}

export interface ProductActionsProps {
  colors: ColorOption[];
  selectedColor: ColorOption;
  onColorChange: (color: ColorOption) => void;
  onAddToCart?: (color: ColorOption, quantity: number) => void;
  onBuyNow?: (color: ColorOption, quantity: number) => void;
  onAddToWishlist?: () => void;
  onAddToCompare?: () => void;
  onShare?: () => void;
}

export default function ProductActions({
  colors,
  selectedColor,
  onColorChange,
  onAddToCart,
  onBuyNow,
  onAddToWishlist,
  onAddToCompare,
  onShare,
}: ProductActionsProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "dec" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else if (type === "inc") {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full border border-gray-100 p-6 sm:p-8 bg-white flex flex-col items-center gap-6 font-sans text-[#222222]">
      {/* 1. Colour Selection Header & Thumbnails */}
      <div className="flex flex-col items-center gap-3 w-full">
        <span className="text-[15px] font-bold text-[#222222]">Colour:</span>
        <div className="flex items-center justify-center gap-2.5 flex-wrap">
          {colors.map((color) => {
            const isSelected = selectedColor.id === color.id;
            return (
              <button
                key={color.id}
                onClick={() => onColorChange(color)}
                className={`relative w-[65px] h-[80px] bg-[#f8f8f8] transition-all overflow-hidden ${
                  isSelected
                    ? "border-2 border-[#e26e43] p-0.5"
                    : "border border-gray-200 hover:border-gray-300 p-0.5"
                }`}
                title={color.name}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={color.image}
                    alt={color.name}
                    fill
                    sizes="65px"
                    className="object-cover"
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Quantity Selector */}
      <div className="flex items-center justify-between w-[150px] bg-[#f7f7f7] border border-gray-100 px-1 py-1">
        <button
          onClick={() => handleQuantityChange("dec")}
          className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#e26e43] transition-colors"
          aria-label="Decrease Quantity"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="font-medium text-[14px] text-[#333333]">
          {quantity}
        </span>
        <button
          onClick={() => handleQuantityChange("inc")}
          className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#e26e43] transition-colors"
          aria-label="Increase Quantity"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* 3. Action Buttons with Specific Animations */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-[340px]">
        {/* زر السلة مع انيميشن اهتزاز الايقونة فقط كل 3.5 ثواني */}
        <button
          onClick={() => onAddToCart && onAddToCart(selectedColor, quantity)}
          className="w-full h-11 cursor-pointer bg-[#f28353] hover:bg-[#e26e43] text-white font-bold text-[14px] tracking-wide rounded-none transition-colors flex items-center justify-center gap-2"
        >
          <span className="animate-cart-icon">
            <ShoppingCart size={18} />
          </span>
          <span>Add To Cart</span>
        </button>

        {/* زر الشراء مع انيميشن الهوفر والانتفاخ اللطيف عند مرور الماوس */}
        {/* زر Buy Now مع تأثير مسح اللون الأبيض بالزاوية عند الهوفر */}
        <button
          onClick={() => onBuyNow && onBuyNow(selectedColor, quantity)}
          className="btn-angled-hover w-full h-11 font-bold text-[14px] tracking-wide rounded-none flex items-center justify-center cursor-pointer"
        >
          Buy Now
        </button>
      </div>

      {/* 4. Footer Links */}
      <div className="flex flex-col items-center gap-3 pt-1 text-[13px] text-[#666666]">
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <button
            onClick={onAddToWishlist}
            className="flex items-center gap-1.5 hover:text-[#e26e43] transition-colors"
          >
            <Heart size={15} />
            <span>Add To Wishlist</span>
          </button>
          <button
            onClick={onAddToCompare}
            className="flex items-center gap-1.5 hover:text-[#e26e43] transition-colors"
          >
            <RefreshCw size={15} />
            <span>Add To Compare</span>
          </button>
        </div>
        <button
          onClick={onShare}
          className="flex items-center gap-1.5 hover:text-[#e26e43] transition-colors"
        >
          <Share2 size={15} />
          <span>share</span>
        </button>
      </div>
    </div>
  );
}
