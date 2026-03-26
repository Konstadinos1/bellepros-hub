// Mock data for BellePro's Hub - all modules

export const locations = [
  { id: "laval", name: "Laval (Boul. Robert-Bourassa)", address: "5600 Boul. Robert-Bourassa, Laval", capacity: 90 },
  { id: "boisbriand", name: "Boisbriand", address: "Boisbriand, QC", capacity: 60 },
  { id: "ddo", name: "Dollard-des-Ormeaux", address: "3209 Boul. des Sources, DDO", capacity: 50 },
  { id: "hochelaga", name: "Montreal - Hochelaga", address: "Rue Hochelaga, Montreal", capacity: 55 },
  { id: "langelier", name: "Montreal - Langelier", address: "Boul. Langelier, Montreal", capacity: 65 },
  { id: "lasalle", name: "LaSalle (Newman)", address: "Boul. Newman, LaSalle", capacity: 45 },
  { id: "mascouche", name: "Mascouche", address: "235 Montee Masson, Mascouche", capacity: 50 },
];

export const dailySales = [
  { hour: "06:00", sales: 280, orders: 12 },
  { hour: "07:00", sales: 520, orders: 22 },
  { hour: "08:00", sales: 410, orders: 18 },
  { hour: "09:00", sales: 190, orders: 8 },
  { hour: "10:00", sales: 310, orders: 14 },
  { hour: "11:00", sales: 890, orders: 38 },
  { hour: "12:00", sales: 1450, orders: 62 },
  { hour: "13:00", sales: 1280, orders: 55 },
  { hour: "14:00", sales: 640, orders: 28 },
  { hour: "15:00", sales: 380, orders: 16 },
  { hour: "16:00", sales: 520, orders: 22 },
  { hour: "17:00", sales: 1120, orders: 48 },
  { hour: "18:00", sales: 1380, orders: 59 },
  { hour: "19:00", sales: 980, orders: 42 },
  { hour: "20:00", sales: 620, orders: 27 },
  { hour: "21:00", sales: 340, orders: 15 },
];

export const topItems = [
  { name: "Poutine classique", qty: 148, revenue: 1332, trend: 12 },
  { name: "Steamie all-dressed", qty: 132, revenue: 594, trend: 8 },
  { name: "Hamburger BellePro's", qty: 98, revenue: 980, trend: -3 },
  { name: "Smoked meat", qty: 87, revenue: 1131, trend: 5 },
  { name: "Poutine sauce maison", qty: 76, revenue: 760, trend: 22 },
  { name: "Souvlaki poulet", qty: 65, revenue: 845, trend: 15 },
  { name: "Gyro", qty: 58, revenue: 696, trend: 7 },
  { name: "Pogo", qty: 52, revenue: 208, trend: -5 },
  { name: "Club sandwich", qty: 44, revenue: 572, trend: 2 },
  { name: "Poulet grille BellePro's", qty: 38, revenue: 570, trend: 18 },
];

export const employees = [
  { id: "e1", name: "Marie-Claude Tremblay", role: "Gerant", wage: 22.50, certified: true, certExpiry: "2026-09-15" },
  { id: "e2", name: "Jean-Philippe Gagnon", role: "Cuisinier", wage: 18.00, certified: true, certExpiry: "2026-06-20" },
  { id: "e3", name: "Amelie Bouchard", role: "Caissiere", wage: 15.75, certified: true, certExpiry: "2026-12-01" },
  { id: "e4", name: "Nicolas Papagiannis", role: "Cuisinier", wage: 17.50, certified: true, certExpiry: "2026-04-10" },
  { id: "e5", name: "Sophie Lavoie", role: "Serveuse", wage: 12.90, certified: false, certExpiry: null },
  { id: "e6", name: "Maxime Cote", role: "Cuisinier", wage: 17.00, certified: true, certExpiry: "2027-01-30" },
  { id: "e7", name: "Isabelle Roy", role: "Caissiere", wage: 15.75, certified: true, certExpiry: "2026-08-22" },
  { id: "e8", name: "Alexandre Dubois", role: "Livreur", wage: 16.00, certified: false, certExpiry: null },
  { id: "e9", name: "Camille Fortin", role: "Serveuse", wage: 12.90, certified: true, certExpiry: "2026-11-05" },
  { id: "e10", name: "David Chen", role: "Cuisinier", wage: 17.50, certified: true, certExpiry: "2026-07-18" },
];

export const weeklySchedule = [
  { employeeId: "e1", day: "Lun", start: "06:00", end: "14:00", hours: 8, location: "laval" },
  { employeeId: "e2", day: "Lun", start: "10:00", end: "18:00", hours: 8, location: "laval" },
  { employeeId: "e3", day: "Lun", start: "11:00", end: "19:00", hours: 8, location: "laval" },
  { employeeId: "e5", day: "Lun", start: "17:00", end: "21:00", hours: 4, location: "laval" },
  { employeeId: "e6", day: "Lun", start: "11:00", end: "19:00", hours: 8, location: "boisbriand" },
  { employeeId: "e1", day: "Mar", start: "06:00", end: "14:00", hours: 8, location: "laval" },
  { employeeId: "e4", day: "Mar", start: "10:00", end: "18:00", hours: 8, location: "laval" },
  { employeeId: "e7", day: "Mar", start: "11:00", end: "19:00", hours: 8, location: "laval" },
  { employeeId: "e9", day: "Mar", start: "17:00", end: "19:30", hours: 2.5, location: "laval" },
  { employeeId: "e1", day: "Mer", start: "06:00", end: "14:00", hours: 8, location: "laval" },
  { employeeId: "e2", day: "Mer", start: "10:00", end: "18:00", hours: 8, location: "laval" },
  { employeeId: "e3", day: "Mer", start: "11:00", end: "19:00", hours: 8, location: "laval" },
  { employeeId: "e5", day: "Mer", start: "17:00", end: "21:00", hours: 4, location: "laval" },
  { employeeId: "e1", day: "Jeu", start: "06:00", end: "14:00", hours: 8, location: "laval" },
  { employeeId: "e4", day: "Jeu", start: "10:00", end: "18:00", hours: 8, location: "laval" },
  { employeeId: "e7", day: "Jeu", start: "11:00", end: "19:00", hours: 8, location: "laval" },
  { employeeId: "e10", day: "Jeu", start: "11:00", end: "14:00", hours: 3, location: "laval" },
  { employeeId: "e1", day: "Ven", start: "06:00", end: "14:00", hours: 8, location: "laval" },
  { employeeId: "e2", day: "Ven", start: "10:00", end: "22:00", hours: 12, location: "laval" },
  { employeeId: "e3", day: "Ven", start: "11:00", end: "22:00", hours: 11, location: "laval" },
  { employeeId: "e5", day: "Ven", start: "17:00", end: "22:00", hours: 5, location: "laval" },
  { employeeId: "e6", day: "Ven", start: "17:00", end: "22:00", hours: 5, location: "laval" },
  { employeeId: "e1", day: "Sam", start: "08:00", end: "16:00", hours: 8, location: "laval" },
  { employeeId: "e4", day: "Sam", start: "10:00", end: "22:00", hours: 12, location: "laval" },
  { employeeId: "e6", day: "Sam", start: "10:00", end: "22:00", hours: 12, location: "laval" },
  { employeeId: "e9", day: "Sam", start: "11:00", end: "19:00", hours: 8, location: "laval" },
  { employeeId: "e2", day: "Dim", start: "10:00", end: "18:00", hours: 8, location: "laval" },
  { employeeId: "e7", day: "Dim", start: "10:00", end: "18:00", hours: 8, location: "laval" },
  { employeeId: "e10", day: "Dim", start: "11:00", end: "19:00", hours: 8, location: "laval" },
];

export const inventoryItems = [
  { id: "i1", name: "Fromage en grains", category: "Dairy", stock: 45, unit: "kg", reorderPoint: 20, unitCost: 8.50, supplier: "Fromagerie Boivin" },
  { id: "i2", name: "Sauce poutine maison", category: "Sauces", stock: 30, unit: "L", reorderPoint: 15, unitCost: 3.20, supplier: "Maison" },
  { id: "i3", name: "Frites (congelees)", category: "Frozen", stock: 120, unit: "kg", reorderPoint: 50, unitCost: 2.10, supplier: "McCain" },
  { id: "i4", name: "Pain hot-dog steamie", category: "Bread", stock: 200, unit: "pcs", reorderPoint: 100, unitCost: 0.35, supplier: "Boulangerie St-Methode" },
  { id: "i5", name: "Saucisses steamie", category: "Meat", stock: 180, unit: "pcs", reorderPoint: 80, unitCost: 0.65, supplier: "Lafleur" },
  { id: "i6", name: "Boeuf hache", category: "Meat", stock: 35, unit: "kg", reorderPoint: 25, unitCost: 12.00, supplier: "Viandes Plus" },
  { id: "i7", name: "Smoked meat", category: "Meat", stock: 18, unit: "kg", reorderPoint: 15, unitCost: 22.00, supplier: "Schwartz's" },
  { id: "i8", name: "Pain burger", category: "Bread", stock: 150, unit: "pcs", reorderPoint: 75, unitCost: 0.45, supplier: "Boulangerie St-Methode" },
  { id: "i9", name: "Poulet poitrine", category: "Meat", stock: 22, unit: "kg", reorderPoint: 15, unitCost: 14.50, supplier: "Volailles Giannone" },
  { id: "i10", name: "Sauce BellePro's", category: "Sauces", stock: 8, unit: "L", reorderPoint: 10, unitCost: 4.80, supplier: "Maison" },
  { id: "i11", name: "Pita souvlaki", category: "Bread", stock: 90, unit: "pcs", reorderPoint: 50, unitCost: 0.55, supplier: "Pita Break" },
  { id: "i12", name: "Huile friture", category: "Oil", stock: 60, unit: "L", reorderPoint: 30, unitCost: 2.80, supplier: "Saporito" },
  { id: "i13", name: "Pepperoni", category: "Meat", stock: 12, unit: "kg", reorderPoint: 8, unitCost: 9.50, supplier: "Viandes Plus" },
  { id: "i14", name: "Chou (coleslaw)", category: "Produce", stock: 15, unit: "kg", reorderPoint: 10, unitCost: 1.80, supplier: "Marche Central" },
  { id: "i15", name: "Champignons", category: "Produce", stock: 6, unit: "kg", reorderPoint: 5, unitCost: 6.20, supplier: "Marche Central" },
];

export const complianceChecks = [
  { id: "c1", task: "Temperature frigo principal", zone: "Cuisine", target: "0-4 C", frequency: "2x/jour", lastChecked: "2026-03-24 14:00", value: "3.2 C", status: "ok" },
  { id: "c2", task: "Temperature congelateur", zone: "Cuisine", target: "-18 C ou moins", frequency: "2x/jour", lastChecked: "2026-03-24 14:00", value: "-20.1 C", status: "ok" },
  { id: "c3", task: "Temperature ligne chaude", zone: "Service", target: "60 C ou plus", frequency: "Chaque service", lastChecked: "2026-03-24 12:30", value: "62.5 C", status: "ok" },
  { id: "c4", task: "Temperature frigo desserts", zone: "Service", target: "0-4 C", frequency: "2x/jour", lastChecked: "2026-03-24 08:00", value: "5.8 C", status: "warning" },
  { id: "c5", task: "Nettoyage surfaces de travail", zone: "Cuisine", target: "Conforme", frequency: "Chaque 2h", lastChecked: "2026-03-24 13:00", value: "Fait", status: "ok" },
  { id: "c6", task: "Lavage des mains (observation)", zone: "Generale", target: "100%", frequency: "Continue", lastChecked: "2026-03-24 11:30", value: "Conforme", status: "ok" },
  { id: "c7", task: "Rotation stock (PEPS)", zone: "Entrepot", target: "Conforme", frequency: "Quotidien", lastChecked: "2026-03-23 09:00", value: "Non verifie", status: "overdue" },
  { id: "c8", task: "Controle antiparasitaire", zone: "Generale", target: "Aucune trace", frequency: "Hebdomadaire", lastChecked: "2026-03-20 10:00", value: "Conforme", status: "ok" },
  { id: "c9", task: "Temperature huile friture", zone: "Cuisine", target: "175 C max", frequency: "Chaque utilisation", lastChecked: "2026-03-24 12:00", value: "172 C", status: "ok" },
  { id: "c10", task: "Nettoyage hottes", zone: "Cuisine", target: "Conforme", frequency: "Mensuel", lastChecked: "2026-03-01 08:00", value: "Fait", status: "ok" },
];

export const orders = [
  { id: "ORD-001", time: "12:05", channel: "Sur place", items: ["Poutine classique", "Steamie x2"], total: 18.50, status: "completed", table: 5 },
  { id: "ORD-002", time: "12:08", channel: "Uber Eats", items: ["Hamburger BellePro's", "Poutine sauce maison", "Breuvage"], total: 28.75, status: "preparing", table: null },
  { id: "ORD-003", time: "12:12", channel: "Pour emporter", items: ["Smoked meat", "Frites", "Coleslaw"], total: 16.95, status: "ready", table: null },
  { id: "ORD-004", time: "12:15", channel: "Sur place", items: ["Souvlaki poulet", "Poutine classique"], total: 22.00, status: "preparing", table: 8 },
  { id: "ORD-005", time: "12:18", channel: "Telephone", items: ["Club sandwich x2", "Poutine pepperoni", "Breuvage x2"], total: 38.50, status: "pending", table: null },
  { id: "ORD-006", time: "12:22", channel: "Sur place", items: ["Gyro", "Frites"], total: 15.50, status: "pending", table: 3 },
  { id: "ORD-007", time: "12:25", channel: "Uber Eats", items: ["Poutine classique x2", "Steamie x4"], total: 36.00, status: "pending", table: null },
  { id: "ORD-008", time: "12:28", channel: "Livraison", items: ["Poulet grille BellePro's", "Poutine sauce maison"], total: 25.00, status: "pending", table: null },
];

export const loyaltyMembers = [
  { id: "m1", name: "Patrick Berube", phone: "514-555-0101", points: 2450, visits: 48, lastVisit: "2026-03-23", tier: "Or", totalSpent: 1240 },
  { id: "m2", name: "Caroline Masse", phone: "450-555-0202", points: 1820, visits: 35, lastVisit: "2026-03-24", tier: "Argent", totalSpent: 920 },
  { id: "m3", name: "Robert Pelletier", phone: "514-555-0303", points: 3100, visits: 62, lastVisit: "2026-03-22", tier: "Platine", totalSpent: 1680 },
  { id: "m4", name: "Nathalie Gingras", phone: "450-555-0404", points: 890, visits: 18, lastVisit: "2026-03-20", tier: "Bronze", totalSpent: 480 },
  { id: "m5", name: "Francois Lemieux", phone: "514-555-0505", points: 1560, visits: 30, lastVisit: "2026-03-24", tier: "Argent", totalSpent: 810 },
  { id: "m6", name: "Julie Hebert", phone: "450-555-0606", points: 720, visits: 14, lastVisit: "2026-03-18", tier: "Bronze", totalSpent: 370 },
  { id: "m7", name: "Marc-Andre Therrien", phone: "514-555-0707", points: 4200, visits: 85, lastVisit: "2026-03-24", tier: "Platine", totalSpent: 2340 },
  { id: "m8", name: "Stephanie Blais", phone: "450-555-0808", points: 1100, visits: 22, lastVisit: "2026-03-21", tier: "Argent", totalSpent: 590 },
];

export const loyaltyRewards = [
  { id: "r1", name: "Poutine gratuite", pointsCost: 500, category: "Plats", active: true },
  { id: "r2", name: "Steamie gratuit", pointsCost: 200, category: "Plats", active: true },
  { id: "r3", name: "Breuvage gratuit", pointsCost: 100, category: "Breuvages", active: true },
  { id: "r4", name: "10% de rabais", pointsCost: 300, category: "Rabais", active: true },
  { id: "r5", name: "Combo upgrade gratuit", pointsCost: 250, category: "Extras", active: true },
  { id: "r6", name: "Repas anniversaire gratuit", pointsCost: 0, category: "Special", active: true },
];

export const marketingCampaigns = [
  { id: "mk1", name: "Promo Habs - But = Double points", status: "active", channel: "SMS + Social", reach: 3200, conversions: 180, startDate: "2026-03-01", endDate: "2026-04-15" },
  { id: "mk2", name: "Cabane a sucre - Poutine erable", status: "active", channel: "Instagram + Facebook", reach: 8500, conversions: 420, startDate: "2026-03-10", endDate: "2026-04-10" },
  { id: "mk3", name: "Mardi Steamie 2 pour 1", status: "active", channel: "In-store + SMS", reach: 1800, conversions: 310, startDate: "2026-01-15", endDate: "2026-06-30" },
  { id: "mk4", name: "Google Ads - Poutine Laval", status: "active", channel: "Google Ads", reach: 12000, conversions: 95, startDate: "2026-02-01", endDate: "2026-05-31" },
  { id: "mk5", name: "Lancement app fidelite", status: "planned", channel: "Multi", reach: 0, conversions: 0, startDate: "2026-04-01", endDate: "2026-04-30" },
];

export const gbpLocations = [
  { location: "Laval", rating: 4.3, reviews: 186, responseRate: "92%", views: 4500, actions: 320 },
  { location: "Boisbriand", rating: 4.1, reviews: 98, responseRate: "85%", views: 2100, actions: 145 },
  { location: "DDO", rating: 4.4, reviews: 142, responseRate: "88%", views: 3200, actions: 210 },
  { location: "Hochelaga", rating: 3.9, reviews: 76, responseRate: "78%", views: 1800, actions: 120 },
  { location: "Langelier", rating: 4.0, reviews: 112, responseRate: "82%", views: 2400, actions: 165 },
  { location: "LaSalle", rating: 4.2, reviews: 89, responseRate: "90%", views: 1900, actions: 130 },
  { location: "Mascouche", rating: 4.5, reviews: 64, responseRate: "95%", views: 1500, actions: 110 },
];

export const trainingModules = [
  { id: "t1", name: "Securite alimentaire MAPAQ", category: "Obligatoire", duration: "4h", employees: 10, completed: 8, deadline: "2026-04-01" },
  { id: "t2", name: "Manipulation des allergenes", category: "Obligatoire", duration: "2h", employees: 10, completed: 6, deadline: "2026-04-15" },
  { id: "t3", name: "Service a la clientele", category: "Qualite", duration: "1.5h", employees: 10, completed: 4, deadline: "2026-04-30" },
  { id: "t4", name: "Preparation poutine - Standards", category: "Operations", duration: "1h", employees: 6, completed: 6, deadline: "2026-03-15" },
  { id: "t5", name: "Systeme de caisse (POS)", category: "Operations", duration: "1h", employees: 4, completed: 3, deadline: "2026-04-01" },
  { id: "t6", name: "Protocole d'ouverture/fermeture", category: "Operations", duration: "45min", employees: 10, completed: 7, deadline: "2026-03-30" },
  { id: "t7", name: "Gestion des plaintes", category: "Qualite", duration: "1h", employees: 10, completed: 2, deadline: "2026-05-01" },
  { id: "t8", name: "Normes d'hygiene personnelle", category: "Obligatoire", duration: "30min", employees: 10, completed: 9, deadline: "2026-03-25" },
];

export const weeklyRevenue = [
  { day: "Lun", laval: 3200, boisbriand: 2100, ddo: 2800, hochelaga: 1900, langelier: 2400, lasalle: 1700, mascouche: 1500 },
  { day: "Mar", laval: 2800, boisbriand: 1900, ddo: 2500, hochelaga: 1700, langelier: 2100, lasalle: 1500, mascouche: 1300 },
  { day: "Mer", laval: 3100, boisbriand: 2000, ddo: 2700, hochelaga: 1800, langelier: 2300, lasalle: 1600, mascouche: 1400 },
  { day: "Jeu", laval: 3400, boisbriand: 2200, ddo: 2900, hochelaga: 2000, langelier: 2500, lasalle: 1800, mascouche: 1600 },
  { day: "Ven", laval: 4800, boisbriand: 3100, ddo: 4200, hochelaga: 2800, langelier: 3500, lasalle: 2500, mascouche: 2200 },
  { day: "Sam", laval: 5200, boisbriand: 3400, ddo: 4600, hochelaga: 3100, langelier: 3800, lasalle: 2700, mascouche: 2400 },
  { day: "Dim", laval: 3800, boisbriand: 2500, ddo: 3300, hochelaga: 2200, langelier: 2800, lasalle: 2000, mascouche: 1700 },
];
