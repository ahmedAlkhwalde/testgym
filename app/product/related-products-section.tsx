"use client";

import { useState } from "react";
import Image from "next/image";
import ProductCard, { ProductCardProps } from "../components/product-card";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const SAMPLE_RELATED_PRODUCTS: ProductCardProps[] = [
  {
    id: "1",
    brand: "EnduraFit",
    title: "Grey Sport Set",
    image: "/images/photo1.jpg",
    badge: "Trending",
    rating: 0,
    price: 12.6,
    originalPrice: 14.0,
    discountPercentage: 10,
  },
  {
    id: "2",
    brand: "Thrive Athletica",
    title: "Fitted Coords Set (Grey)",
    image: "/images/photo2.jpg",
    badge: "Trending",
    rating: 0,
    price: 17.5,
    originalPrice: 20.0,
    discountPercentage: 10,
    variants: ["/images/photo1.jpg", "/images/photo2.jpg", "/images/photo3.jpg"],
  },
  {
    id: "3",
    brand: "Thrive Athletica",
    title: "Athleisure Set",
    image: "/images/photo3.jpg",
    badge: "Trending",
    rating: 0,
    price: 17.1,
    originalPrice: 18.0,
    discountPercentage: 5,
  },
  {
    id: "4",
    brand: "EnduraFit",
    title: "Sport Set (Green/S)",
    image: "/images/photo4.jpg",
    badge: "Featured",
    rating: 0,
    price: 18.0,
    originalPrice: 20.0,
    discountPercentage: 10,
    variants: ["/images/photo1.jpg", "/images/photo2.jpg", "/images/photo3.jpg"],
  },
];

export default function RelatedProductsSection() {
  const [stickyQuantity, setStickyQuantity] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState<string>("Brown");

  const handleQtyChange = (type: "inc" | "dec") => {
    if (type === "dec" && stickyQuantity > 1) {
      setStickyQuantity((prev) => prev - 1);
    } else if (type === "inc") {
      setStickyQuantity((prev) => prev + 1);
    }
  };

  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 py-8 font-sans">
      {/* Section Title */}
      <h2 className="text-[22px] font-bold text-[#222222] mb-6">
        Related Products
      </h2>

      {/* Grid Displaying Product Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {SAMPLE_RELATED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Sticky Bottom Cart Bar (كما في الجزء السفلي بالصورة) */}
      
      
    </section>
  );
}