'use client'

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Routes that opt out of the global header/footer chrome.
const BARE_ROUTES = ["/links"];

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isBare = BARE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isBare) {
    return <div className="page-wrapper">{children}</div>;
  }

  return (
    <div className="page-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
