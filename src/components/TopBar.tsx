"use client";

import { type Locale, t } from "@/lib/i18n";
import { locations } from "@/data/mock";

export default function TopBar({
  locale,
  selectedLocation,
  onLocationChange,
}: {
  locale: Locale;
  selectedLocation: string;
  onLocationChange: (loc: string) => void;
}) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 ml-64">
      <div className="flex items-center gap-4">
        <select
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          className="text-sm border-gray-300 rounded-lg py-1.5 px-3 font-medium"
        >
          <option value="all">{t("common.all_locations", locale)}</option>
          {locations.map((loc) => (
            <option key={loc.id} value={loc.id}>
              {loc.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-gray-500">
          {new Date().toLocaleDateString(locale === "fr" ? "fr-CA" : "en-CA", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-sm font-bold">
          BP
        </div>
      </div>
    </header>
  );
}
