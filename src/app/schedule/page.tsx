"use client";

import { useState } from "react";
import { employees, weeklySchedule } from "@/data/mock";

const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const QC_MIN_HOURS = 3;
const QC_TIPPED_WAGE = 12.90;

function getEmployee(id: string) {
  return employees.find((e) => e.id === id);
}

function getShiftCost(shift: (typeof weeklySchedule)[0]) {
  const emp = getEmployee(shift.employeeId);
  if (!emp) return 0;
  const billableHours = Math.max(shift.hours, QC_MIN_HOURS);
  return billableHours * emp.wage;
}

function hasIndemnityRisk(shift: (typeof weeklySchedule)[0]) {
  return shift.hours < QC_MIN_HOURS;
}

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState("Lun");

  const dayShifts = weeklySchedule.filter((s) => s.day === selectedDay);
  const totalLabor = dayShifts.reduce((sum, s) => sum + getShiftCost(s), 0);
  const totalHours = dayShifts.reduce((sum, s) => sum + s.hours, 0);
  const indemnityAlerts = dayShifts.filter(hasIndemnityRisk);

  // Weekly totals per employee
  const employeeWeeklyHours: Record<string, number> = {};
  weeklySchedule.forEach((s) => {
    employeeWeeklyHours[s.employeeId] = (employeeWeeklyHours[s.employeeId] || 0) + s.hours;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Gestion des horaires</h2>
        <button className="btn-primary">+ Ajouter un quart</button>
      </div>

      {/* Quebec compliance alerts */}
      {indemnityAlerts.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <h4 className="font-semibold text-yellow-800 text-sm mb-2">
            Alerte indemnite 3h (CNESST) - {selectedDay}
          </h4>
          {indemnityAlerts.map((shift, i) => {
            const emp = getEmployee(shift.employeeId);
            return (
              <p key={i} className="text-sm text-yellow-700">
                {emp?.name}: quart de {shift.hours}h prevu ({shift.start}-{shift.end}).
                Sera facture minimum 3h = ${(QC_MIN_HOURS * (emp?.wage || 0)).toFixed(2)} au lieu de ${(shift.hours * (emp?.wage || 0)).toFixed(2)}
              </p>
            );
          })}
        </div>
      )}

      {/* Day tabs */}
      <div className="flex gap-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              selectedDay === day
                ? "bg-red-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <p className="text-sm text-gray-500">Employes ce jour</p>
          <p className="text-2xl font-bold">{dayShifts.length}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Heures totales</p>
          <p className="text-2xl font-bold">{totalHours}h</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Cout main-d&apos;oeuvre</p>
          <p className="text-2xl font-bold">${totalLabor.toFixed(2)}</p>
        </div>
        <div className="card">
          <p className="text-sm text-gray-500">Alertes CNESST</p>
          <p className={`text-2xl font-bold ${indemnityAlerts.length > 0 ? "text-yellow-600" : "text-green-600"}`}>
            {indemnityAlerts.length}
          </p>
        </div>
      </div>

      {/* Schedule table */}
      <div className="card p-0 overflow-hidden">
        <table>
          <thead>
            <tr>
              <th>Employe</th>
              <th>Role</th>
              <th>Debut</th>
              <th>Fin</th>
              <th>Heures</th>
              <th>Salaire/h</th>
              <th>Cout</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {dayShifts.map((shift, i) => {
              const emp = getEmployee(shift.employeeId);
              const risk = hasIndemnityRisk(shift);
              const cost = getShiftCost(shift);
              return (
                <tr key={i}>
                  <td className="font-medium">{emp?.name}</td>
                  <td className="text-gray-500">{emp?.role}</td>
                  <td>{shift.start}</td>
                  <td>{shift.end}</td>
                  <td>
                    {shift.hours}h
                    {risk && <span className="text-yellow-600 text-xs ml-1">(min 3h facture)</span>}
                  </td>
                  <td>
                    ${emp?.wage.toFixed(2)}
                    {emp?.wage === QC_TIPPED_WAGE && <span className="text-xs text-gray-400 ml-1">(pourboire)</span>}
                  </td>
                  <td className="font-medium">${cost.toFixed(2)}</td>
                  <td>
                    {risk ? (
                      <span className="badge badge-warning">Indemnite 3h</span>
                    ) : (
                      <span className="badge badge-success">Conforme</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Weekly hours per employee */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">Heures hebdomadaires par employe</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {employees.map((emp) => {
            const weekHours = employeeWeeklyHours[emp.id] || 0;
            const restHours = 168 - weekHours; // simplified
            const restOk = restHours >= 32;
            return (
              <div key={emp.id} className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm font-medium truncate">{emp.name}</p>
                <p className="text-lg font-bold">{weekHours}h</p>
                <p className={`text-xs ${restOk ? "text-green-600" : "text-red-600"}`}>
                  {restOk ? "Repos 32h OK" : "Repos 32h NON CONFORME"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
