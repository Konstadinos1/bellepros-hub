"use client";

import { marketingCampaigns, gbpLocations } from "@/data/mock";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function MarketingPage() {
  const activeCampaigns = marketingCampaigns.filter((c) => c.status === "active");
  const totalReach = activeCampaigns.reduce((s, c) => s + c.reach, 0);
  const totalConversions = activeCampaigns.reduce((s, c) => s + c.conversions, 0);
  const avgRating = (gbpLocations.reduce((s, l) => s + l.rating, 0) / gbpLocations.length).toFixed(1);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Marketing & SEO local</h2>
        <button className="btn-primary">+ Nouvelle campagne</button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-500">Campagnes actives</p>
          <p className="text-3xl font-bold">{activeCampaigns.length}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Portee totale</p>
          <p className="text-3xl font-bold">{totalReach.toLocaleString()}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Conversions</p>
          <p className="text-3xl font-bold text-green-600">{totalConversions}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Note Google moy.</p>
          <p className="text-3xl font-bold text-yellow-600">{avgRating}/5</p>
        </div>
      </div>

      {/* Campaigns */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Campagnes marketing</h3>
        <div className="space-y-3">
          {marketingCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <p className="font-medium">{campaign.name}</p>
                  <span className={`badge ${campaign.status === "active" ? "badge-success" : "badge-info"}`}>
                    {campaign.status === "active" ? "Active" : "Planifiee"}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {campaign.channel} | {campaign.startDate} - {campaign.endDate}
                </p>
              </div>
              <div className="flex gap-8 text-center">
                <div>
                  <p className="text-lg font-bold">{campaign.reach.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">Portee</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-green-600">{campaign.conversions}</p>
                  <p className="text-xs text-gray-500">Conversions</p>
                </div>
                <div>
                  <p className="text-lg font-bold">
                    {campaign.reach > 0 ? ((campaign.conversions / campaign.reach) * 100).toFixed(1) : 0}%
                  </p>
                  <p className="text-xs text-gray-500">Taux conv.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Business Profiles */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Profils Google Business par succursale</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={gbpLocations}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="location" tick={{ fontSize: 11 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="views" name="Vues" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="actions" name="Actions" fill="#dc2626" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* GBP Table */}
      <div className="card p-0 overflow-hidden">
        <table>
          <thead>
            <tr>
              <th>Succursale</th>
              <th>Note</th>
              <th>Avis</th>
              <th>Taux reponse</th>
              <th>Vues mensuelles</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {gbpLocations.map((loc) => (
              <tr key={loc.location}>
                <td className="font-medium">{loc.location}</td>
                <td>
                  <span className={`font-bold ${loc.rating >= 4.2 ? "text-green-600" : loc.rating >= 4.0 ? "text-yellow-600" : "text-red-600"}`}>
                    {loc.rating}/5
                  </span>
                </td>
                <td>{loc.reviews}</td>
                <td>{loc.responseRate}</td>
                <td>{loc.views.toLocaleString()}</td>
                <td>{loc.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SEO Tips */}
      <div className="card bg-blue-50 border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-3">Conseils SEO local - Quebec</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-900">
          <div>
            <p className="font-medium">Mots-cles prioritaires:</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>&quot;poutine Laval&quot; / &quot;poutine pres de moi&quot;</li>
              <li>&quot;casse-croute Hochelaga&quot;</li>
              <li>&quot;steamie Montreal&quot;</li>
              <li>&quot;restaurant rapide [quartier]&quot;</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Actions recommandees:</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Repondre a 100% des avis Google (FR en priorite)</li>
              <li>Publier 2-3x/semaine sur Google Business</li>
              <li>Photos fraiches du menu chaque semaine</li>
              <li>Pages de destination par succursale (Bill 96 conforme)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
