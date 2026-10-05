"use client";

import { Star, Truck, HelpCircle, RefreshCw } from "lucide-react";
import Image from "next/image";

export interface ProductInfoProps {
  cartNoticeText?: string;
  title?: string;
  colorName?: string;
  rating?: number;
  reviewsCount?: number;
  currencySymbol?: string;
  price?: number;
  taxNote?: string;
  deliveryText?: string;
  askQuestionText?: string;
  sku?: string;
  weight?: string;
  quantityLeft?: string;
  unit?: string;
  stockStatus?: string;
  deliveryDays?: string;
  returnDays?: string;
}

export default function ProductInfo({
  cartNoticeText = "Selling fast! 4 people have this in their carts.",
  title = "Gym Coords Set",
  colorName = "Brown",
  rating = 0,
  reviewsCount = 0,
  currencySymbol = "$",
  price = 15.0,
  taxNote = "Inclusive all the text",
  deliveryText = "Delivery & Return",
  askQuestionText = "Ask A Question",
  sku = "SP18 (COPY)",
  weight = "150 Gms",
  quantityLeft = "40 Items Left",
  unit = "1 Item",
  stockStatus = "In stock",
  deliveryDays = "7 days",
  returnDays = "7 Days",
}: ProductInfoProps) {
  return (
    <div className="w-full flex flex-col font-sans text-[#222222]">
      {/* 1. Sales Indicator Notice */}
      {cartNoticeText && (
        <div className="flex items-center gap-2 mb-2 text-[#777777] text-[14px]">
          <span className="inline-block w-1 h-1 rounded-full bg-[#e26e43]" />
          <p>{cartNoticeText}</p>
        </div>
      )}

      {/* 2. Title */}
      <h1 className="text-[26px] font-bold text-[#222222] tracking-tight leading-tight mb-2">
        {title} {colorName && `(${colorName})`}
      </h1>

      {/* 3. Rating & Reviews */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex text-[#e26e43]">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={15}
              className={
                i < rating
                  ? "fill-[#e26e43] stroke-[#e26e43]"
                  : "fill-transparent stroke-[#e26e43]"
              }
            />
          ))}
        </div>
        <span className="text-[#888888]">|</span>
        <button className="text-[13px] text-[#e26e43] hover:underline">
          {reviewsCount} Review
        </button>
      </div>

      {/* 4. Price Section */}
      <div className="flex items-baseline gap-1.5 pt-1">
        <span className="text-[18px] font-medium text-[#222222]">MRP:</span>
        <span className="text-[26px] font-bold text-[#e26e43]">
          {currencySymbol}
          {price.toFixed(2)}
        </span>
      </div>
      <p className="text-[12px] text-[#999999] mb-5">{taxNote}</p>

      {/* 5. Actions Bar (Dashed Border) */}
      <div className="flex items-center gap-6 text-[14px] text-[#777777] py-3 border-y border-dashed border-gray-300 mb-6">
        <button className="flex items-center gap-2 hover:text-[#e26e43] transition-colors">
          <Truck size={16} />
          <span>{deliveryText}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-[#e26e43] transition-colors">
          <HelpCircle size={16} />
          <span>{askQuestionText}</span>
        </button>
      </div>

      {/* 6. Product Info Details */}
      <div className="mb-6">
        <h3 className="font-bold text-[16px] text-[#222222] mb-3">
          Product Info
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-[14px] text-[#666666]">
          <ul className="space-y-2 list-disc list-inside">
            <li>SKU: {sku}</li>
            <li>Weight: {weight}</li>
            <li>Quantity: {quantityLeft}</li>
          </ul>
          <ul className="space-y-2 list-disc list-inside">
            <li>Unit: {unit}</li>
            <li>Stock Status: {stockStatus}</li>
          </ul>
        </div>
      </div>

      {/* 7. Delivery Details (Dashed Border Top) */}
      <div className="pt-5 border-t border-dashed border-gray-300 mb-6">
        <h3 className="font-bold text-[16px] text-[#222222] mb-3">
          Delivery Details
        </h3>
        <div className="space-y-2 text-[14px] text-[#666666]">
          <div className="flex items-center gap-2.5">
            <Truck size={17} className="text-[#666666] shrink-0" />
            <p>Your order is likely to reach you within {deliveryDays}.</p>
          </div>
          <div className="flex items-center gap-2.5">
            <RefreshCw size={16} className="text-[#666666] shrink-0" />
            <p>Hassle free returns within {returnDays}.</p>
          </div>
        </div>
      </div>

      {/* 8. Guaranteed Safe Checkout Box */}
      <div className="relative border border-dashed border-gray-300 rounded-sm p-4 pt-6">
        {/* العنوان الثابت فوق الإطار المنقط */}
        <span className="absolute -top-3 left-4 bg-white px-2 font-bold text-xs sm:text-[14px] text-[#222222] whitespace-nowrap">
          Guaranteed Safe Checkout
        </span>

        {/* حاوي الصورة المتجاوب */}
        <div className="w-full flex items-center justify-start overflow-hidden">
          <div className="relative w-full max-w-[320px] h-9 sm:h-11">
            <Image
              src="/images/payments.png"
              alt="Secure Checkout Badges"
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-contain object-left"
              priority
            />
          </div>
        </div>
      </div>

      {/* 9. Secure Checkout Box */}
      <div className="relative border border-dashed border-gray-300 rounded-sm p-4 pt-6 mt-5">
        {/* العنوان الثابت فوق الإطار المنقط */}
        <span className="absolute -top-3 left-4 bg-white px-2 font-bold text-xs sm:text-[14px] text-[#222222] whitespace-nowrap">
          Secure Checkout
        </span>

        {/* حاوي الصورة المتجاوب */}
        <div className="w-full flex items-center justify-start overflow-hidden">
          <div className="relative w-full max-w-[320px] h-9 sm:h-11">
            <Image
              src="/images/secure_payments.png"
              alt="Secure Checkout Badges"
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-contain object-left"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* مكونات مساعدة للشارات / Payment & Security Badges */
}
function PaymentBadge({
  text,
  fontStyle,
}: {
  text: string;
  fontStyle: string;
}) {
  return (
    <div className="h-10 px-4 bg-[#f7f7f7] rounded flex items-center justify-center border border-gray-100 text-sm">
      <span className={fontStyle}>{text}</span>
    </div>
  );
}

function TrustBadge({
  title,
  sub,
  color,
}: {
  title: string;
  sub: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-1.5 border border-gray-200 rounded px-2 py-1 text-[10px] bg-white">
      <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-[#222222]">{title}</span>
        <span className="text-[8px] text-gray-500">{sub}</span>
      </div>
    </div>
  );
}
