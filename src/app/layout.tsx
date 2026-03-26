"use client";

import { useState } from "react";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import type { Locale } from "@/lib/i18n";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");
  const [selectedLocation, setSelectedLocation] = useState("all");

  return (
    <html lang={locale}>
      <body>
        <Sidebar locale={locale} onLocaleChange={setLocale} />
        <TopBar locale={locale} selectedLocation={selectedLocation} onLocationChange={setSelectedLocation} />
        <main className="ml-64 mt-0 p-6 min-h-[calc(100vh-4rem)]">{children}</main>
      </body>
    </html>
  );
}
