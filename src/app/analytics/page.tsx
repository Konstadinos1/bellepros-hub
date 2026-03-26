"use client";

import { weeklyRevenue, topItems, locations } from "@/data/mock";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#dc2626", "#f59e0b", "#3b82f6", "#10b981", "#8b5cf6", "#ec4899", "#06b6d4"];

const locationTotals = locations.map((loc, i) => ({
  name: loc.name.split("(")[0].trim(),
  revenue: weeklyRevenue.reduce((sum, day) => {
    const key = loc.id as keyof (typeof weeklyRevenue)[0];
    return sum + (typeof day[key] === "number" ? (day[key] as number) : 0);
  }, 0),
  color: COLORS[i % COLORS.length],
}));

const channelData = [
  { name: "Sur place", value: 42, color: "#3b82f6" },
  { name: "Pour emporter", value: 25, color: "#8b5cf6" },
  { name: "Uber Eats", value: 18, color: "#10b981" },
  { name: "Livraison", value: 10, color: "#f59e0b" },
  { name: "Telephone", value: 5, color: "#6b7280" },
];

const peakHoursData = [
  { hour: "06-08", staff: 2, orders: 52, efficiency: 26 },
  { hour: "08-10", staff: 2, orders: 40, efficiency: 20 },
  { hour: "10-12", staff: 4, orders: 90, efficiency: 22.5 },
  { hour: "12-14", staff: 6, orders: 175, efficiency: 29.2 },
  { hour: "14-16", staff: 4, orders: 60, efficiency: 15 },
  { hour: "16-18", staff: 5, orders: 118, efficiency: 23.6 },
  { hour: "18-20", staff: 6, orders: 149, efficiency: 24.8 },
  { hour: "20-22", staff: 3, orders: 57, efficiency: 19 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900">Analytique & Rapports</h2>

      {/* Top KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="card">
          <p className="text-sm text-gray-500">Revenu hebdo total</p>
          <p className="text-2xl font-bold">${locationTotals.reduce((s, l) => s + l.revenue, 0).toLocaleString()}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Moy / succursale</p>
          <p className="text-2xl font-bold">
            ${Math.round(locationTotals.reduce((s, l) => s + l.revenue, 0) / locations.length).toLocaleString()}
          </p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">% main-d&apos;oeuvre</p>
          <p className="text-2xl font-bold text-yellow-600">26.4%</p>
          <p className="text-xs text-gray-500">Cible: 25%</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">% aliments</p>
          <p className="text-2xl font-bold text-green-600">31.2%</p>
          <p className="text-xs text-gray-500">Cible: 32%</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Marge nette</p>
          <p className="text-2xl font-bold text-green-600">12.8%</p>
        </div>
      </div>

      {/* Revenue by location chart */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Revenu hebdomadaire par succursale</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={weeklyRevenue}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip formatter={(value: number) => [`$${value}`, ""]} />
            <Legend />
            <Bar dataKey="laval" name="Laval" fill="#dc2626" radius={[2, 2, 0, 0]} />
            <Bar dataKey="boisbriand" name="Boisbriand" fill="#f59e0b" radius={[2, 2, 0, 0]} />
            <Bar dataKey="ddo" name="DDO" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="hochelaga" name="Hochelaga" fill="#10b981" radius={[2, 2, 0, 0]} />
            <Bar dataKey="langelier" name="Langelier" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="lasalle" name="LaSalle" fill="#ec4899" radius={[2, 2, 0, 0]} />
            <Bar dataKey="mascouche" name="Mascouche" fill="#06b6d4" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Channel breakdown */}
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Repartition par canal</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={channelData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name}: ${value}%`}>
                {channelData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Peak hours analysis */}
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Analyse heures de pointe</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={peakHoursData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" tick={{ fontSize: 11 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="orders" name="Commandes" stroke="#dc2626" strokeWidth={2} />
              <Line type="monotone" dataKey="staff" name="Employes" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Location ranking */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Classement des succursales</h3>
        <div className="space-y-3">
          {locationTotals
            .sort((a, b) => b.revenue - a.revenue)
            .map((loc, i) => {
              const max = locationTotals[0]?.revenue || 1;
              return (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-400 w-6">#{i + 1}</span>
                  <span className="text-sm font-medium w-32 truncate">{loc.name}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-4">
                    <div
                      className="h-4 rounded-full"
                      style={{ width: `${(loc.revenue / max) * 100}%`, background: loc.color }}
                    />
                  </div>
                  <span className="text-sm font-bold w-24 text-right">${loc.revenue.toLocaleString()}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
