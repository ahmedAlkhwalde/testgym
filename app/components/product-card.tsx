"use client";

import Image from "next/image";
import {
  ShoppingCart,
  Heart,
  Eye,
  RefreshCw,
  Star,
} from "lucide-react";

export interface ProductCardProps {
  id: string;
  brand: string;
  title: string;
  image: string;
  badge?: "Trending" | "Featured";
  rating?: number;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  offerText?: string;
  variants?: string[];
  onAddToCart?: () => void;
  onWishlistClick?: () => void;
  onQuickView?: () => void;
  onCompare?: () => void;
}

export default function ProductCard({
  brand,
  title,
  image,
  badge,
  rating = 0,
  price,
  originalPrice,
  discountPercentage,
  offerText = "Limited Time Offer: 10% off",
  variants = [],
  onAddToCart,
  onWishlistClick,
  onQuickView,
  onCompare,
}: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-gray-100 p-3 rounded-none transition-all hover:shadow-md font-sans flex flex-col justify-between">
      <div>
        {/* 1. Image Container */}
        <div className="relative w-full aspect-[3/4] bg-[#f7f7f7] overflow-hidden mb-3">
          {/* Ribbon Badge */}
          {badge && (
            <div className="absolute top-3 -left-7 rotate-[-45deg] bg-[#f28353] text-white text-[10px] font-bold py-0.5 w-28 text-center uppercase tracking-wider z-10 shadow-xs">
              {badge}
            </div>
          )}

          {/* Action Buttons with Exact Slide-in Animation (عمود الأزرار الانسيابي) */}
          <div className="absolute top-2 right-2 z-20 flex flex-col gap-2">
            {/* Button 1: Add to Cart */}
            <button
              onClick={onAddToCart}
              className="action-btn-appear action-btn-delay-1 w-8 h-8 bg-white hover:bg-[#f28353] text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
              title="Add to Cart"
            >
              <ShoppingCart size={15} />
            </button>

            {/* Button 2: Wishlist */}
            <button
              onClick={onWishlistClick}
              className="action-btn-appear action-btn-delay-2 w-8 h-8 bg-white hover:bg-[#f28353] text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
              title="Add to Wishlist"
            >
              <Heart size={15} />
            </button>

            {/* Button 3: Quick View */}
            <button
              onClick={onQuickView}
              className="action-btn-appear action-btn-delay-3 w-8 h-8 bg-white hover:bg-[#f28353] text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
              title="Quick View"
            >
              <Eye size={15} />
            </button>

            {/* Button 4: Compare */}
            <button
              onClick={onCompare}
              className="action-btn-appear action-btn-delay-4 w-8 h-8 bg-white hover:bg-[#f28353] text-gray-600 hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
              title="Compare"
            >
              <RefreshCw size={15} />
            </button>
          </div>

          {/* Main Product Image */}
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Rating Badge */}
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs px-1.5 py-0.5 rounded-xs flex items-center gap-1 text-[11px] font-semibold text-gray-700 z-10">
            <Star size={11} className="fill-[#f28353] text-[#f28353]" />
            <span>{rating}</span>
          </div>
        </div>

        {/* 2. Product Details */}
        <div className="flex flex-col gap-1">
          <h4 className="text-[14px] font-bold text-[#222222] truncate">
            {brand}
          </h4>
          <p className="text-[12px] text-gray-400 truncate">{title}</p>

          {/* Variants */}
          {variants.length > 0 && (
            <div className="flex items-center gap-1 my-1">
              {variants.map((vImg, idx) => (
                <div
                  key={idx}
                  className="relative w-5 h-6 border border-gray-200 overflow-hidden"
                >
                  <Image
                    src={vImg}
                    alt="variant"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2 flex-wrap pt-0.5">
            <span className="text-[15px] font-bold text-[#222222]">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-[12px] text-gray-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            {discountPercentage && (
              <span className="text-[12px] font-bold text-[#f28353]">
                {discountPercentage}% Off
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 3. Ticker Bar (الشريط المتحرك باستمرار) */}
      <div className="mt-3 pt-2 border-t border-gray-100 overflow-hidden whitespace-nowrap bg-gray-50/50 py-1">
        <div className="animate-marquee flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#f28353] inline-block"></span>
            <span>{offerText}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#f28353] inline-block"></span>
            <span>{offerText}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#f28353] inline-block"></span>
            <span>{offerText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}