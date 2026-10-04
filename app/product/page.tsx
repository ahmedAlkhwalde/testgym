"use client";

import { useState } from "react";
import PageHeader from "@/app/product/Header";
import ProductGallery from "./product-gallery";
import ProductInfo from "./product-info";
import ProductActions, { ColorOption } from "./product-actions";
import ProductTabs from "./product-tabs";
import RelatedProductsSection from "./related-products-section";

// تعريف بيانات الألوان مع مجموعة الصور الخاصة بكل لون
const COLOR_OPTIONS: ColorOption[] = [
  {
    id: "brown",
    name: "Brown",
    image: "/images/photo1.jpg",
    images: [
      "/images/photo1.jpg",
      "/images/photo2.jpg",
      "/images/photo3.jpg",
    ],
  },
  {
    id: "blue",
    name: "Blue",
    image: "/images/photo2.jpg",
    images: [
      "/images/photo2.jpg",
      "/images/photo4.jpg",
    ],
  },
  {
    id: "green",
    name: "Green",
    image: "/images/photo3.jpg",
    images: [
      "/images/photo3.jpg",
      "/images/photo1.jpg",
      "/images/photo4.jpg",
    ],
  },
];

export default function ProductPage() {
  // حالة اللون المحدد حالياً (الافتراضي هو اللون الأول - Brown)
  const [selectedColor, setSelectedColor] = useState<ColorOption>(COLOR_OPTIONS[0]);

  return (
    <main className="w-full bg-white min-h-screen">
      {/* 1. Page Header */}
      <PageHeader
        title="Gym Coords Set"
        category="PRODUCT"
        productName="GYM COORDS SET"
      />

      {/* 2. Main Product Grid */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* المكون الأيسر: يستقبل مصفوفة صور اللون المحدد حالياً */}
          <div className="w-full">
            <ProductGallery
              key={selectedColor.id} // يعيد تهيئة المعرض وتصفير المؤشر عند تغير اللون
              images={selectedColor.images}
              badgeText="FEATURED"
            />
          </div>

          {/* المكون الأوسط: تفاصيل معلومات المنتج */}
          <div className="w-full">
            <ProductInfo colorName={selectedColor.name} />
          </div>

          {/* المكون الأيمن: الخيارات والأزرار وتغيير اللون */}
          <div className="w-full">
            <ProductActions
              colors={COLOR_OPTIONS}
              selectedColor={selectedColor}
              onColorChange={(newColor) => setSelectedColor(newColor)}
            />
          </div>
        </div>
        <ProductTabs/>
        <RelatedProductsSection/>
      </div>
    </main>
  );
}