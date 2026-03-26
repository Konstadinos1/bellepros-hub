"use client";

import { complianceChecks, employees } from "@/data/mock";

const okCount = complianceChecks.filter((c) => c.status === "ok").length;
const score = Math.round((okCount / complianceChecks.length) * 100);

const certifiedEmployees = employees.filter((e) => e.certified);
const expiringSoon = employees.filter((e) => {
  if (!e.certExpiry) return false;
  const expiry = new Date(e.certExpiry);
  const now = new Date();
  const diff = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  return diff <= 30 && diff > 0;
});
const expired = employees.filter((e) => {
  if (!e.certExpiry) return true;
  return new Date(e.certExpiry) < new Date();
});

export default function CompliancePage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900">Conformite MAPAQ & Securite alimentaire</h2>

      {/* Score and KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <p className="text-sm text-gray-500">Score de conformite</p>
          <p className={`text-4xl font-bold mt-2 ${score >= 80 ? "text-green-600" : score >= 60 ? "text-yellow-600" : "text-red-600"}`}>
            {score}%
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div
              className={`h-2 rounded-full ${score >= 80 ? "bg-green-500" : score >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Derniere inspection MAPAQ</p>
          <p className="text-xl font-bold mt-2">2026-02-15</p>
          <p className="text-xs text-green-600 mt-1">Resultat: Conforme</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Employes certifies</p>
          <p className="text-xl font-bold mt-2">{certifiedEmployees.length}/{employees.length}</p>
          <p className="text-xs text-gray-500 mt-1">{expired.length} certification(s) expiree(s)</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Prochaine echeance</p>
          <p className="text-xl font-bold mt-2">{expiringSoon.length > 0 ? expiringSoon[0].certExpiry : "Aucune"}</p>
          <p className="text-xs text-yellow-600 mt-1">{expiringSoon.length} expiration(s) dans 30 jours</p>
        </div>
      </div>

      {/* Temperature & Compliance Checks */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Journal des verifications</h3>
        <div className="card p-0 overflow-hidden">
          <table>
            <thead>
              <tr>
                <th>Verification</th>
                <th>Zone</th>
                <th>Cible</th>
                <th>Frequence</th>
                <th>Derniere verification</th>
                <th>Valeur</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {complianceChecks.map((check) => (
                <tr key={check.id}>
                  <td className="font-medium">{check.task}</td>
                  <td className="text-gray-500">{check.zone}</td>
                  <td>{check.target}</td>
                  <td className="text-gray-500">{check.frequency}</td>
                  <td>{check.lastChecked}</td>
                  <td className="font-medium">{check.value}</td>
                  <td>
                    {check.status === "ok" ? (
                      <span className="badge badge-success">Conforme</span>
                    ) : check.status === "warning" ? (
                      <span className="badge badge-warning">Attention</span>
                    ) : (
                      <span className="badge badge-danger">En retard</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Employee Certifications */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Certifications des employes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {employees.map((emp) => {
            const isExpired = !emp.certExpiry || new Date(emp.certExpiry) < new Date();
            const isExpiringSoon = emp.certExpiry && (() => {
              const diff = (new Date(emp.certExpiry).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
              return diff <= 30 && diff > 0;
            })();
            return (
              <div
                key={emp.id}
                className={`rounded-lg p-4 border ${
                  isExpired
                    ? "bg-red-50 border-red-200"
                    : isExpiringSoon
                    ? "bg-yellow-50 border-yellow-200"
                    : "bg-green-50 border-green-200"
                }`}
              >
                <p className="font-medium text-sm">{emp.name}</p>
                <p className="text-xs text-gray-500">{emp.role}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs">
                    {emp.certified ? `Expire: ${emp.certExpiry}` : "Non certifie"}
                  </span>
                  {isExpired ? (
                    <span className="badge badge-danger">Expire</span>
                  ) : isExpiringSoon ? (
                    <span className="badge badge-warning">Bientot</span>
                  ) : (
                    <span className="badge badge-success">Valide</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MAPAQ Quick Reference */}
      <div className="card bg-blue-50 border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-3">Reference rapide MAPAQ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-900">
          <div>
            <p className="font-medium">Temperatures critiques:</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Refrigerateur: 0 a 4 C</li>
              <li>Congelateur: -18 C ou moins</li>
              <li>Maintien chaud: 60 C ou plus</li>
              <li>Zone de danger: 4 C a 60 C (max 2h)</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Points d&apos;inspection critiques:</p>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Lavage des mains: avant chaque manipulation</li>
              <li>Rotation PEPS (Premier entre, premier sorti)</li>
              <li>Surfaces: nettoyees aux 2 heures minimum</li>
              <li>Controle antiparasitaire: hebdomadaire</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
