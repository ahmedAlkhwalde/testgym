import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#f9f9f9] flex flex-col items-center justify-center px-4 py-16 text-center font-lato">
      <div className="max-w-[600px] flex flex-col items-center">
        {/* الرقم الكبير 404 */}
        <h1 className="text-[100px] sm:text-[140px] font-extrabold text-[#222222] leading-none tracking-tight">
          404
        </h1>

        {/* خط ديكور بسيط */}
        <div className="w-16 h-1 bg-[#f28353] my-4 rounded-full"></div>

        {/* عنوان الخطأ */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] uppercase tracking-wide mb-3">
          Page Not Found
        </h2>

        {/* الوصف */}
        <p className="text-[#777777] text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-[480px]">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* زر العودة إلى الصفحة الرئيسية */}
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#f28353] hover:bg-[#e26e43] text-white font-bold text-[14px] uppercase tracking-wider px-8 py-3.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
        >
          <Home size={18} />
          <span>Back To Home</span>
        </Link>
      </div>
    </div>
  );
}