export type Locale = "fr" | "en";

const translations: Record<string, Record<Locale, string>> = {
  // Navigation
  "nav.dashboard": { fr: "Tableau de bord", en: "Dashboard" },
  "nav.schedule": { fr: "Horaires", en: "Schedule" },
  "nav.inventory": { fr: "Inventaire", en: "Inventory" },
  "nav.compliance": { fr: "Conformite MAPAQ", en: "MAPAQ Compliance" },
  "nav.orders": { fr: "Commandes", en: "Orders" },
  "nav.loyalty": { fr: "Fidelite", en: "Loyalty" },
  "nav.analytics": { fr: "Analytique", en: "Analytics" },
  "nav.marketing": { fr: "Marketing", en: "Marketing" },
  "nav.training": { fr: "Formation", en: "Training" },

  // Dashboard
  "dash.title": { fr: "Tableau de bord - Vue d'ensemble", en: "Dashboard - Overview" },
  "dash.revenue": { fr: "Revenu aujourd'hui", en: "Today's Revenue" },
  "dash.orders": { fr: "Commandes", en: "Orders" },
  "dash.labor": { fr: "Cout main-d'oeuvre", en: "Labor Cost" },
  "dash.food_cost": { fr: "Cout aliments", en: "Food Cost" },
  "dash.locations": { fr: "Succursales", en: "Locations" },
  "dash.alerts": { fr: "Alertes", en: "Alerts" },
  "dash.sales_trend": { fr: "Tendance des ventes", en: "Sales Trend" },
  "dash.top_items": { fr: "Articles populaires", en: "Top Items" },

  // Schedule
  "sched.title": { fr: "Gestion des horaires", en: "Schedule Management" },
  "sched.add_shift": { fr: "Ajouter un quart", en: "Add Shift" },
  "sched.employee": { fr: "Employe", en: "Employee" },
  "sched.start": { fr: "Debut", en: "Start" },
  "sched.end": { fr: "Fin", en: "End" },
  "sched.hours": { fr: "Heures", en: "Hours" },
  "sched.cost": { fr: "Cout", en: "Cost" },
  "sched.status": { fr: "Statut", en: "Status" },
  "sched.indemnity_warning": { fr: "Alerte indemnite 3h (CNESST)", en: "3h Indemnity Alert (CNESST)" },
  "sched.weekly_rest": { fr: "Repos hebdomadaire 32h", en: "32h Weekly Rest" },
  "sched.total_labor": { fr: "Cout total main-d'oeuvre", en: "Total Labor Cost" },

  // Inventory
  "inv.title": { fr: "Gestion de l'inventaire", en: "Inventory Management" },
  "inv.item": { fr: "Article", en: "Item" },
  "inv.stock": { fr: "Stock", en: "Stock" },
  "inv.unit": { fr: "Unite", en: "Unit" },
  "inv.reorder": { fr: "Seuil de reapprovisionnement", en: "Reorder Point" },
  "inv.cost": { fr: "Cout unitaire", en: "Unit Cost" },
  "inv.value": { fr: "Valeur totale", en: "Total Value" },
  "inv.low_stock": { fr: "Stock bas", en: "Low Stock" },
  "inv.add_item": { fr: "Ajouter article", en: "Add Item" },
  "inv.food_cost_pct": { fr: "% cout aliments", en: "Food Cost %" },

  // Compliance
  "comp.title": { fr: "Conformite MAPAQ & Securite alimentaire", en: "MAPAQ Compliance & Food Safety" },
  "comp.temp_log": { fr: "Journal de temperatures", en: "Temperature Log" },
  "comp.checklist": { fr: "Liste de verification", en: "Checklist" },
  "comp.certs": { fr: "Certifications", en: "Certifications" },
  "comp.inspection": { fr: "Pret pour inspection", en: "Inspection Ready" },
  "comp.score": { fr: "Score de conformite", en: "Compliance Score" },
  "comp.last_inspection": { fr: "Derniere inspection", en: "Last Inspection" },
  "comp.next_due": { fr: "Prochaine echeance", en: "Next Due" },

  // Orders
  "ord.title": { fr: "Gestion des commandes", en: "Order Management" },
  "ord.new": { fr: "Nouvelle commande", en: "New Order" },
  "ord.pending": { fr: "En attente", en: "Pending" },
  "ord.preparing": { fr: "En preparation", en: "Preparing" },
  "ord.ready": { fr: "Pret", en: "Ready" },
  "ord.completed": { fr: "Complete", en: "Completed" },
  "ord.channel": { fr: "Canal", en: "Channel" },
  "ord.dine_in": { fr: "Sur place", en: "Dine-in" },
  "ord.takeout": { fr: "Pour emporter", en: "Takeout" },
  "ord.delivery": { fr: "Livraison", en: "Delivery" },
  "ord.uber_eats": { fr: "Uber Eats", en: "Uber Eats" },

  // Loyalty
  "loy.title": { fr: "Programme de fidelite", en: "Loyalty Program" },
  "loy.members": { fr: "Membres", en: "Members" },
  "loy.points": { fr: "Points", en: "Points" },
  "loy.rewards": { fr: "Recompenses", en: "Rewards" },
  "loy.active": { fr: "Membres actifs", en: "Active Members" },
  "loy.redemptions": { fr: "Echanges ce mois", en: "Redemptions This Month" },

  // Analytics
  "anal.title": { fr: "Analytique & Rapports", en: "Analytics & Reports" },
  "anal.revenue": { fr: "Revenu", en: "Revenue" },
  "anal.by_location": { fr: "Par succursale", en: "By Location" },
  "anal.by_item": { fr: "Par article", en: "By Item" },
  "anal.labor_pct": { fr: "% main-d'oeuvre", en: "Labor %" },
  "anal.food_pct": { fr: "% aliments", en: "Food %" },
  "anal.peak_hours": { fr: "Heures de pointe", en: "Peak Hours" },

  // Marketing
  "mkt.title": { fr: "Marketing & SEO local", en: "Marketing & Local SEO" },
  "mkt.campaigns": { fr: "Campagnes", en: "Campaigns" },
  "mkt.gbp": { fr: "Profils Google Business", en: "Google Business Profiles" },
  "mkt.social": { fr: "Medias sociaux", en: "Social Media" },
  "mkt.promotions": { fr: "Promotions", en: "Promotions" },

  // Training
  "trn.title": { fr: "Formation & Integration", en: "Training & Onboarding" },
  "trn.modules": { fr: "Modules", en: "Modules" },
  "trn.progress": { fr: "Progres", en: "Progress" },
  "trn.certifications": { fr: "Certifications", en: "Certifications" },

  // Common
  "common.save": { fr: "Enregistrer", en: "Save" },
  "common.cancel": { fr: "Annuler", en: "Cancel" },
  "common.edit": { fr: "Modifier", en: "Edit" },
  "common.delete": { fr: "Supprimer", en: "Delete" },
  "common.search": { fr: "Rechercher", en: "Search" },
  "common.filter": { fr: "Filtrer", en: "Filter" },
  "common.export": { fr: "Exporter", en: "Export" },
  "common.all_locations": { fr: "Toutes les succursales", en: "All Locations" },
  "common.today": { fr: "Aujourd'hui", en: "Today" },
  "common.this_week": { fr: "Cette semaine", en: "This Week" },
  "common.this_month": { fr: "Ce mois", en: "This Month" },
};

export function t(key: string, locale: Locale): string {
  return translations[key]?.[locale] ?? key;
}
