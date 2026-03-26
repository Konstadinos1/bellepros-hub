"use client";

import { dailySales, topItems, locations, complianceChecks, inventoryItems, orders } from "@/data/mock";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const totalRevenue = dailySales.reduce((sum, h) => sum + h.sales, 0);
const totalOrders = dailySales.reduce((sum, h) => sum + h.orders, 0);
const avgOrderValue = (totalRevenue / totalOrders).toFixed(2);
const activeOrders = orders.filter((o) => o.status !== "completed").length;
const lowStockItems = inventoryItems.filter((i) => i.stock <= i.reorderPoint).length;
const complianceIssues = complianceChecks.filter((c) => c.status !== "ok").length;

const alerts = [
  ...(lowStockItems > 0 ? [{ type: "warning" as const, msg: `${lowStockItems} article(s) sous le seuil de reapprovisionnement` }] : []),
  ...(complianceIssues > 0 ? [{ type: "danger" as const, msg: `${complianceIssues} verification(s) MAPAQ requise(s)` }] : []),
  { type: "info" as const, msg: "Promo Habs active - double points si but ce soir" },
  { type: "success" as const, msg: "Score conformite MAPAQ: 87% - Bon" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900">Tableau de bord - Vue d&apos;ensemble</h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-500">Revenu aujourd&apos;hui</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">${totalRevenue.toLocaleString()}</p>
          <p className="text-xs text-green-600 mt-1">+8.2% vs hier</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Commandes</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{totalOrders}</p>
          <p className="text-xs text-gray-500 mt-1">Moy: ${avgOrderValue}/commande</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Cout main-d&apos;oeuvre</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">26.4%</p>
          <p className="text-xs text-yellow-600 mt-1">Cible: 25%</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Cout aliments</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">31.2%</p>
          <p className="text-xs text-green-600 mt-1">Cible: 32%</p>
        </div>
      </div>

      {/* Mini status row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">{locations.length}</div>
          <div>
            <p className="text-sm font-medium">Succursales actives</p>
            <p className="text-xs text-gray-500">Toutes operationnelles</p>
          </div>
        </div>
        <div className="card flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold">{activeOrders}</div>
          <div>
            <p className="text-sm font-medium">Commandes en cours</p>
            <p className="text-xs text-gray-500">Sur place, livraison, emporter</p>
          </div>
        </div>
        <div className="card flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold">{lowStockItems}</div>
          <div>
            <p className="text-sm font-medium">Alertes inventaire</p>
            <p className="text-xs text-gray-500">Articles sous le seuil</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="card lg:col-span-2">
          <h3 className="font-semibold text-gray-900 mb-4">Tendance des ventes aujourd&apos;hui</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={dailySales}>
              <defs>
                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#dc2626" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(value: number) => [`$${value}`, "Ventes"]} />
              <Area type="monotone" dataKey="sales" stroke="#dc2626" fill="url(#salesGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Alerts */}
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Alertes</h3>
          <div className="space-y-3">
            {alerts.map((alert, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg text-sm ${
                  alert.type === "danger"
                    ? "bg-red-50 text-red-800 border border-red-200"
                    : alert.type === "warning"
                    ? "bg-yellow-50 text-yellow-800 border border-yellow-200"
                    : alert.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-blue-50 text-blue-800 border border-blue-200"
                }`}
              >
                {alert.msg}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Items */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Articles populaires aujourd&apos;hui</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topItems.slice(0, 8)} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis type="number" tick={{ fontSize: 11 }} />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={160} />
            <Tooltip formatter={(value: number) => [value, "Quantite"]} />
            <Bar dataKey="qty" fill="#dc2626" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
