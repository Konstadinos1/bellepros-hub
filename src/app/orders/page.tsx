"use client";

import { useState } from "react";
import { orders } from "@/data/mock";

const channelColors: Record<string, string> = {
  "Sur place": "bg-blue-100 text-blue-800",
  "Pour emporter": "bg-purple-100 text-purple-800",
  "Uber Eats": "bg-green-100 text-green-800",
  "Livraison": "bg-orange-100 text-orange-800",
  "Telephone": "bg-gray-100 text-gray-800",
};

const statusOrder = ["pending", "preparing", "ready", "completed"];

export default function OrdersPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? orders : orders.filter((o) => o.status === filter);
  const pending = orders.filter((o) => o.status === "pending").length;
  const preparing = orders.filter((o) => o.status === "preparing").length;
  const ready = orders.filter((o) => o.status === "ready").length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Gestion des commandes</h2>
        <button className="btn-primary">+ Nouvelle commande</button>
      </div>

      {/* Status summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card border-l-4 border-yellow-400">
          <p className="text-sm text-gray-500">En attente</p>
          <p className="text-3xl font-bold text-yellow-600">{pending}</p>
        </div>
        <div className="card border-l-4 border-blue-400">
          <p className="text-sm text-gray-500">En preparation</p>
          <p className="text-3xl font-bold text-blue-600">{preparing}</p>
        </div>
        <div className="card border-l-4 border-green-400">
          <p className="text-sm text-gray-500">Pret</p>
          <p className="text-3xl font-bold text-green-600">{ready}</p>
        </div>
        <div className="card border-l-4 border-gray-400">
          <p className="text-sm text-gray-500">Revenu en cours</p>
          <p className="text-3xl font-bold">${filtered.reduce((s, o) => s + o.total, 0).toFixed(2)}</p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2">
        {["all", "pending", "preparing", "ready", "completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filter === status ? "bg-red-600 text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {status === "all" ? "Toutes" : status === "pending" ? "En attente" : status === "preparing" ? "En preparation" : status === "ready" ? "Pret" : "Complete"}
          </button>
        ))}
      </div>

      {/* Order cards - kitchen display style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.sort((a, b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)).map((order) => (
          <div
            key={order.id}
            className={`card border-t-4 ${
              order.status === "pending"
                ? "border-yellow-400"
                : order.status === "preparing"
                ? "border-blue-400"
                : order.status === "ready"
                ? "border-green-400"
                : "border-gray-300"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-lg">{order.id}</span>
              <span className={`badge ${channelColors[order.channel] || "bg-gray-100 text-gray-800"}`}>
                {order.channel}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-2">{order.time} {order.table ? `- Table ${order.table}` : ""}</p>
            <div className="space-y-1 mb-3">
              {order.items.map((item, i) => (
                <p key={i} className="text-sm">
                  {item}
                </p>
              ))}
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="font-bold text-lg">${order.total.toFixed(2)}</span>
              <div className="flex gap-2">
                {order.status === "pending" && (
                  <button className="btn-primary text-xs py-1 px-3">Preparer</button>
                )}
                {order.status === "preparing" && (
                  <button className="bg-green-600 text-white text-xs py-1 px-3 rounded-lg font-semibold hover:bg-green-700">Pret</button>
                )}
                {order.status === "ready" && (
                  <button className="bg-gray-600 text-white text-xs py-1 px-3 rounded-lg font-semibold hover:bg-gray-700">Completer</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
