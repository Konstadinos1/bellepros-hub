"use client";

import { trainingModules, employees } from "@/data/mock";

const totalModules = trainingModules.length;
const completedAll = trainingModules.filter((m) => m.completed === m.employees).length;
const overallProgress = Math.round(
  (trainingModules.reduce((s, m) => s + m.completed, 0) / trainingModules.reduce((s, m) => s + m.employees, 0)) * 100
);

const categories = Array.from(new Set(trainingModules.map((m) => m.category)));

export default function TrainingPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Formation & Integration</h2>
        <button className="btn-primary">+ Ajouter module</button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <p className="text-sm text-gray-500">Progres global</p>
          <p className={`text-4xl font-bold mt-2 ${overallProgress >= 80 ? "text-green-600" : overallProgress >= 50 ? "text-yellow-600" : "text-red-600"}`}>
            {overallProgress}%
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div
              className={`h-2 rounded-full ${overallProgress >= 80 ? "bg-green-500" : overallProgress >= 50 ? "bg-yellow-500" : "bg-red-500"}`}
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Modules total</p>
          <p className="text-3xl font-bold">{totalModules}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Modules completes</p>
          <p className="text-3xl font-bold text-green-600">{completedAll}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Employes en formation</p>
          <p className="text-3xl font-bold">{employees.length}</p>
        </div>
      </div>

      {/* Modules by category */}
      {categories.map((cat) => (
        <div key={cat} className="card">
          <h3 className="font-semibold text-gray-900 mb-4">
            {cat}
            <span className={`ml-2 badge ${cat === "Obligatoire" ? "badge-danger" : cat === "Qualite" ? "badge-info" : "badge-success"}`}>
              {cat === "Obligatoire" ? "Requis MAPAQ" : cat}
            </span>
          </h3>
          <div className="space-y-3">
            {trainingModules
              .filter((m) => m.category === cat)
              .map((module) => {
                const pct = Math.round((module.completed / module.employees) * 100);
                const isOverdue = new Date(module.deadline) < new Date() && pct < 100;
                return (
                  <div key={module.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{module.name}</p>
                        <p className="text-xs text-gray-500">Duree: {module.duration} | Echeance: {module.deadline}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">
                          {module.completed}/{module.employees} employes
                        </p>
                        {isOverdue && <span className="badge badge-danger">En retard</span>}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          pct === 100 ? "bg-green-500" : pct >= 50 ? "bg-yellow-500" : "bg-red-500"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{pct}% complete</p>
                  </div>
                );
              })}
          </div>
        </div>
      ))}

      {/* Employee training status */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Statut de formation par employe</h3>
        <div className="card p-0 overflow-hidden">
          <table>
            <thead>
              <tr>
                <th>Employe</th>
                <th>Role</th>
                <th>Certification MAPAQ</th>
                <th>Expiration</th>
                <th>Modules completes</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => {
                const isExpired = !emp.certExpiry || new Date(emp.certExpiry) < new Date();
                const modulesCompleted = Math.floor(Math.random() * totalModules) + 2; // simulated
                return (
                  <tr key={emp.id}>
                    <td className="font-medium">{emp.name}</td>
                    <td className="text-gray-500">{emp.role}</td>
                    <td>{emp.certified ? "Oui" : "Non"}</td>
                    <td className={isExpired ? "text-red-600 font-medium" : ""}>{emp.certExpiry || "N/A"}</td>
                    <td>{modulesCompleted}/{totalModules}</td>
                    <td>
                      {modulesCompleted === totalModules ? (
                        <span className="badge badge-success">Complete</span>
                      ) : isExpired ? (
                        <span className="badge badge-danger">Urgent</span>
                      ) : (
                        <span className="badge badge-warning">En cours</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
