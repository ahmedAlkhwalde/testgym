export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-xs">
      <div className="relative flex items-center justify-center">
        {/* 1. الدائرة الخارجية المتحركة (Spinner) */}
        <div className="w-16 h-16 border-4 border-gray-200 border-t-[#f28353] rounded-full animate-spin"></div>

        {/* 2. الدائرة الداخلية مع تأثير الوميض (Pulsing Dot) */}
        <div className="absolute w-6 h-6 bg-[#f28353] rounded-full animate-ping opacity-75"></div>

        {/* 3. النقطة المركزية الثابتة */}
        <div className="absolute w-4 h-4 bg-[#f28353] rounded-full"></div>
      </div>

      {/* نص تحميلي بسيط مع وميض خفيف */}
      <span className="mt-4 text-[#222222] font-semibold text-[15px] tracking-wider uppercase animate-pulse">
        Loading...
      </span>
    </div>
  );
}