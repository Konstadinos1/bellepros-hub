"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, t } from "@/lib/i18n";

const navItems = [
  { href: "/dashboard", icon: "grid", key: "nav.dashboard" },
  { href: "/schedule", icon: "clock", key: "nav.schedule" },
  { href: "/inventory", icon: "package", key: "nav.inventory" },
  { href: "/compliance", icon: "shield", key: "nav.compliance" },
  { href: "/orders", icon: "receipt", key: "nav.orders" },
  { href: "/loyalty", icon: "heart", key: "nav.loyalty" },
  { href: "/analytics", icon: "chart", key: "nav.analytics" },
  { href: "/marketing", icon: "megaphone", key: "nav.marketing" },
  { href: "/training", icon: "graduation", key: "nav.training" },
];

const icons: Record<string, React.ReactNode> = {
  grid: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  package: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  receipt: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  chart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
  megaphone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 11-5.8-1.6"/></svg>,
  graduation: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5"><path d="M22 10l-10-5L2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
};

export default function Sidebar({ locale, onLocaleChange }: { locale: Locale; onLocaleChange: (l: Locale) => void }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-800 text-white flex flex-col min-h-screen fixed left-0 top-0 z-50">
      {/* Logo */}
      <div className="p-5 border-b border-slate-700">
        <h1 className="text-xl font-bold text-red-400">BellePro&apos;s</h1>
        <p className="text-xs text-slate-400 mt-1">Hub de gestion franchise</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-red-600/20 text-red-400 border-r-3 border-red-400 font-medium"
                  : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
              }`}
            >
              {icons[item.icon]}
              {t(item.key, locale)}
            </Link>
          );
        })}
      </nav>

      {/* Language toggle */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex gap-2">
          <button
            onClick={() => onLocaleChange("fr")}
            className={`flex-1 py-1.5 rounded text-xs font-semibold transition ${
              locale === "fr" ? "bg-red-600 text-white" : "bg-slate-700 text-slate-400 hover:bg-slate-600"
            }`}
          >
            FR
          </button>
          <button
            onClick={() => onLocaleChange("en")}
            className={`flex-1 py-1.5 rounded text-xs font-semibold transition ${
              locale === "en" ? "bg-red-600 text-white" : "bg-slate-700 text-slate-400 hover:bg-slate-600"
            }`}
          >
            EN
          </button>
        </div>
        <p className="text-[10px] text-slate-500 mt-2 text-center">Loi 96 / Bill 96 conforme</p>
      </div>
    </aside>
  );
}
