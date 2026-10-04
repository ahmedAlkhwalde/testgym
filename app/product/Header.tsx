import Link from "next/link";

interface PageHeaderProps {
  title?: string;
  category?: string;
  productName?: string;
}

export default function Header({
  title = "Gym Coords Set",
  category = "PRODUCT",
  productName = "GYM COORDS SET",
}: PageHeaderProps) {
  return (
    <section className="w-full bg-[#f8f8f8] py-8 sm:py-10 md:py-12 px-4 transition-all">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center justify-center text-center">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-[30px] font-semibold text-[#222222] tracking-wide mb-2">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap justify-center gap-1.5 text-xs sm:text-sm text-[#666666] font-medium tracking-wider uppercase">
            <li>
              <Link
                href="/"
                className="hover:text-[#e26e43] transition-colors duration-200"
              >
                HOME
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link
                href="/product"
                className="hover:text-[#e26e43] transition-colors duration-200"
              >
                {category}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-[#666666] font-normal" aria-current="page">
              {productName}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}