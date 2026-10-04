"use client";

import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<"description" | "review" | "qna">("description");

  return (
    <div className="w-full max-w-[1320px] mx-auto my-10 font-sans">
      {/* 1. Tab Headers Container */}
      <div className="flex items-center gap-2 border-b border-gray-200 bg-[#f8f8f8] p-3">
        {/* Tab 1: Description */}
        <button
          type="button"
          onClick={() => setActiveTab("description")}
          className={`px-8 py-3.5 text-[15px] font-medium transition-colors border rounded-xs cursor-pointer ${
            activeTab === "description"
              ? "bg-white text-[#f28353] border-[#f28353]"
              : "bg-white text-[#555555] border-transparent hover:text-[#f28353]"
          }`}
        >
          Description
        </button>

        {/* Tab 2: Review */}
        <button
          type="button"
          onClick={() => setActiveTab("review")}
          className={`px-8 py-3.5 text-[15px] font-medium transition-colors border rounded-xs cursor-pointer ${
            activeTab === "review"
              ? "bg-white text-[#f28353] border-[#f28353]"
              : "bg-white text-[#555555] border-transparent hover:text-[#f28353]"
          }`}
        >
          Review
        </button>

        {/* Tab 3: Q&A */}
        <button
          type="button"
          onClick={() => setActiveTab("qna")}
          className={`px-8 py-3.5 text-[15px] font-medium transition-colors border rounded-xs cursor-pointer ${
            activeTab === "qna"
              ? "bg-white text-[#f28353] border-[#f28353]"
              : "bg-white text-[#555555] border-transparent hover:text-[#f28353]"
          }`}
        >
          Q&amp;A
        </button>
      </div>

      {/* 2. Tab Content Box */}
      <div className="border border-gray-200 border-t-0 p-6 sm:p-10 bg-white text-[#777777] leading-relaxed text-[14px]">
        {activeTab === "description" && (
          <div className="flex flex-col gap-4">
            <p>
              &quot;Gym Coords Set&quot; offers a comprehensive solution for those seeking comfort and style in their workout attire. This coordinated set is meticulously designed to elevate your gym experience, blending functionality with fashion seamlessly. Crafted from high-quality, breathable fabrics, each piece in the set ensures optimal performance and comfort during your exercise routines.
            </p>
            <p>
              The set includes everything you need for a complete workout ensemble, featuring coordinating tops, bottoms, and accessories. Whether you&apos;re hitting the treadmill, pumping iron, or attending a yoga class, the Gym Coords Set has you covered in both style and functionality.
            </p>
            <p>
              With its modern design and versatile color palette, this set transitions effortlessly from the gym to casual outings, making it a practical addition to any active lifestyle. Embrace the confidence and motivation that comes with looking and feeling your best during every workout session with the Gym Coords Set.
            </p>
          </div>
        )}

        {activeTab === "review" && (
          <div className="py-2">
            <h3 className="text-[16px] font-bold text-[#222222] mb-2">Customer Reviews</h3>
            <p>There are no reviews yet for this product.</p>
          </div>
        )}

        {activeTab === "qna" && (
          <div className="py-2">
            <h3 className="text-[16px] font-bold text-[#222222] mb-2">Questions &amp; Answers</h3>
            <p>Have a question about this item? Ask below.</p>
          </div>
        )}
      </div>
    </div>
  );
}