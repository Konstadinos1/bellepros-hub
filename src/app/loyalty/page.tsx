"use client";

import { loyaltyMembers, loyaltyRewards } from "@/data/mock";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const totalMembers = loyaltyMembers.length;
const totalPoints = loyaltyMembers.reduce((s, m) => s + m.points, 0);
const avgVisits = Math.round(loyaltyMembers.reduce((s, m) => s + m.visits, 0) / totalMembers);
const totalRevenue = loyaltyMembers.reduce((s, m) => s + m.totalSpent, 0);

const tierCounts = [
  { tier: "Platine", count: loyaltyMembers.filter((m) => m.tier === "Platine").length, color: "#6366f1" },
  { tier: "Or", count: loyaltyMembers.filter((m) => m.tier === "Or").length, color: "#f59e0b" },
  { tier: "Argent", count: loyaltyMembers.filter((m) => m.tier === "Argent").length, color: "#9ca3af" },
  { tier: "Bronze", count: loyaltyMembers.filter((m) => m.tier === "Bronze").length, color: "#d97706" },
];

const tierColors: Record<string, string> = {
  Platine: "bg-indigo-100 text-indigo-800",
  Or: "bg-yellow-100 text-yellow-800",
  Argent: "bg-gray-100 text-gray-800",
  Bronze: "bg-orange-100 text-orange-800",
};

export default function LoyaltyPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Programme de fidelite</h2>
        <button className="btn-primary">+ Ajouter membre</button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-500">Membres total</p>
          <p className="text-3xl font-bold">{totalMembers}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Points en circulation</p>
          <p className="text-3xl font-bold">{totalPoints.toLocaleString()}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Visites moyennes</p>
          <p className="text-3xl font-bold">{avgVisits}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Revenu fidelite</p>
          <p className="text-3xl font-bold">${totalRevenue.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tier breakdown */}
        <div className="card">
          <h3 className="font-semibold text-gray-900 mb-4">Repartition par niveau</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={tierCounts}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="tier" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#dc2626" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Rewards catalog */}
        <div className="card lg:col-span-2">
          <h3 className="font-semibold text-gray-900 mb-4">Catalogue de recompenses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {loyaltyRewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <div>
                  <p className="font-medium text-sm">{reward.name}</p>
                  <p className="text-xs text-gray-500">{reward.category}</p>
                </div>
                <span className="badge badge-info">
                  {reward.pointsCost === 0 ? "Gratuit" : `${reward.pointsCost} pts`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Members table */}
      <div className="card p-0 overflow-hidden">
        <table>
          <thead>
            <tr>
              <th>Membre</th>
              <th>Telephone</th>
              <th>Niveau</th>
              <th>Points</th>
              <th>Visites</th>
              <th>Total depense</th>
              <th>Derniere visite</th>
            </tr>
          </thead>
          <tbody>
            {loyaltyMembers.sort((a, b) => b.points - a.points).map((member) => (
              <tr key={member.id}>
                <td className="font-medium">{member.name}</td>
                <td className="text-gray-500">{member.phone}</td>
                <td>
                  <span className={`badge ${tierColors[member.tier]}`}>{member.tier}</span>
                </td>
                <td className="font-medium">{member.points.toLocaleString()}</td>
                <td>{member.visits}</td>
                <td>${member.totalSpent.toLocaleString()}</td>
                <td className="text-gray-500">{member.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Promo tie-in */}
      <div className="card bg-red-50 border border-red-200">
        <h3 className="font-semibold text-red-800 mb-2">Promo active: Habs - But = Double points!</h3>
        <p className="text-sm text-red-700">
          Chaque but des Canadiens ce soir = points doubles sur toutes les commandes.
          Membres actifs notifies par SMS automatiquement.
        </p>
      </div>
    </div>
  );
}
