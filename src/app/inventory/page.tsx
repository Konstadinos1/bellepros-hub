"use client";

import { useState } from "react";
import { inventoryItems } from "@/data/mock";

const categories = ["Tout", ...Array.from(new Set(inventoryItems.map((i) => i.category)))];

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tout");

  const filtered = inventoryItems.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "Tout" || item.category === category;
    return matchSearch && matchCat;
  });

  const totalValue = filtered.reduce((sum, i) => sum + i.stock * i.unitCost, 0);
  const lowStockItems = filtered.filter((i) => i.stock <= i.reorderPoint);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Gestion de l&apos;inventaire</h2>
        <button className="btn-primary">+ Ajouter article</button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-500">Valeur totale inventaire</p>
          <p className="text-2xl font-bold">${totalValue.toFixed(2)}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Articles total</p>
          <p className="text-2xl font-bold">{inventoryItems.length}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Stock bas</p>
          <p className="text-2xl font-bold text-red-600">{lowStockItems.length}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">% cout aliments (cible 32%)</p>
          <p className="text-2xl font-bold text-green-600">31.2%</p>
        </div>
      </div>

      {/* Low stock alerts */}
      {lowStockItems.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <h4 className="font-semibold text-red-800 text-sm mb-2">Articles sous le seuil de reapprovisionnement</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {lowStockItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white rounded-lg p-2 border border-red-100">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-sm text-red-600">
                  {item.stock} {item.unit} / seuil: {item.reorderPoint}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                category === cat
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Inventory table */}
      <div className="card p-0 overflow-hidden">
        <table>
          <thead>
            <tr>
              <th>Article</th>
              <th>Categorie</th>
              <th>Stock</th>
              <th>Unite</th>
              <th>Seuil</th>
              <th>Cout unitaire</th>
              <th>Valeur totale</th>
              <th>Fournisseur</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => {
              const isLow = item.stock <= item.reorderPoint;
              return (
                <tr key={item.id}>
                  <td className="font-medium">{item.name}</td>
                  <td className="text-gray-500">{item.category}</td>
                  <td className={isLow ? "text-red-600 font-semibold" : ""}>{item.stock}</td>
                  <td>{item.unit}</td>
                  <td>{item.reorderPoint}</td>
                  <td>${item.unitCost.toFixed(2)}</td>
                  <td className="font-medium">${(item.stock * item.unitCost).toFixed(2)}</td>
                  <td className="text-gray-500">{item.supplier}</td>
                  <td>
                    {isLow ? (
                      <span className="badge badge-danger">Reapprovisionner</span>
                    ) : (
                      <span className="badge badge-success">OK</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
