/**
 * Constants & Configuration
 * All static data and constants used throughout the app
 */

// ─── VEHICLES ──────────────────────────────────────────────
export const CARS = [
  { id: 1, name: "HINO", icon: "🚛" },
  { id: 2, name: "ISUZU", icon: "🚚" },
  { id: 3, name: "FOSU", icon: "🚐" },
  { id: 4, name: "MAZDA", icon: "🚗" }
];

// ─── DRIVERS ────────────────────────────────────────────────
export const DRIVER_NAMES = ["Japor", "Jihad", "Rocky"];

// ─── TRIP EXPENSES CATEGORIES ──────────────────────────────
export const TRIP_EXP = [
  { id: "fuel", label: "⛽ জ্বালানি তেল" },
  { id: "driverSalary", label: "👨‍✈️ ড্রাইভার বেতন" },
  { id: "police", label: "👮 পুলিশ/জরিমানা" },
  { id: "toll", label: "🅿️ টোল/পার্কিং" },
  { id: "maintenance", label: "🔧 গাড়ি মেরামত (ট্রিপকালে)" },
  { id: "loading", label: "📦 লোডিং/আনলোডিং" },
  { id: "overtime", label: "⏰ ওভারটাইম" },
  { id: "other", label: "🧾 অন্যান্য" }
];

// ─── REPAIR CATEGORIES ─────────────────────────────────────
export const REPAIR_CATS = [
  { id: "hydraulic", label: "হাইড্রোলিক", icon: "🔧" },
  { id: "engine", label: "ইঞ্জিন", icon: "⚙️" },
  { id: "wheel", label: "চাকা/টায়ার", icon: "🛞" },
  { id: "mobile_oil", label: "মবিল/তেল", icon: "🛢️" },
  { id: "battery", label: "ব্যাটারি", icon: "🔋" },
  { id: "clutch", label: "ক্লাচ/গিয়ার", icon: "⚙️" },
  { id: "electrical", label: "ইলেকট্রিক্যাল", icon: "💡" },
  { id: "mechanic", label: "মিস্ত্রি খরচ", icon: "🔩" },
  { id: "other_repair", label: "অন্যান্য মেরামত", icon: "🔧" }
];

// ─── OFFICE EXPENSE CATEGORIES ─────────────────────────────
export const OFFICE_CATS = [
  "🛒 বাজার খরচ",
  "💡 কারেন্ট বিল",
  "🌾 গ্রেজ বাড়া",
  "🏠 বাসা ভাড়া",
  "👤 তানজিদ",
  "👤 নাহিদ",
  "👤 সাহাবুদ্দিন",
  "🚛 গাড়ির পার্টনার",
  "🔧 গাড়ির খরচ (অফিস)"
];

// ─── MONTHS IN BENGALI ─────────────────────────────────────
export const MONTHS_BN = [
  "জানু", "ফেব", "মার্চ", "এপ্রিল", "মে", "জুন",
  "জুলাই", "আগ", "সেপ", "অক্টো", "নভে", "ডিসে"
];

// ─── MONTHS FULL NAME ──────────────────────────────────────
export const MONTHS_BN_FULL = [
  "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
  "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
];

// ─── THEMES ────────────────────────────────────────────────
export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light'
};

// ─── TABS ──────────────────────────────────────────────────
export const TABS = {
  FLEET: 'fleet',
  BI: 'bi',
  OFFICE: 'office',
  YEARLY: 'yearly'
};

// ─── SUB TABS ──────────────────────────────────────────────
export const SUB_TABS = {
  TRIPS: 'trips',
  REPAIRS: 'repairs'
};

// ─── API ENDPOINTS (for future use) ───────────────────────
export const API_ENDPOINTS = {
  BASE: process.env.REACT_APP_API_URL || 'https://api.example.com',
  SYNC_DATA: '/sync',
  EXPORT_PDF: '/export/pdf',
  EXPORT_EXCEL: '/export/excel'
};

// ─── VALIDATION RULES ──────────────────────────────────────
export const VALIDATION = {
  MIN_INCOME: 0.01,
  MIN_EXPENSE: 0.01,
  MAX_NOTE_LENGTH: 500,
  BACKUP_VERSION: 2
};

// ─── LOCAL STORAGE KEYS ────────────────────────────────────
export const STORAGE_KEYS = {
  STATE: 'khadem-state',
  STORE: 'khadem-store',
  BACKUP: 'khadem-backup',
  SETTINGS: 'khadem-settings'
};

// ─── TOAST DURATIONS ──────────────────────────────────────
export const TOAST_DURATION = {
  SHORT: 2000,
  NORMAL: 3000,
  LONG: 5000
};

// ─── ERROR MESSAGES ────────────────────────────────────────
export const ERROR_MESSAGES = {
  INVALID_INCOME: 'সঠিক ভাড়া দিন',
  INVALID_AMOUNT: 'সঠিক টাকা দিন',
  RESTORE_FAILED: 'রিস্টোর ব্যর্থ',
  SYNC_FAILED: 'সিঙ্ক ব্যর্থ',
  REQUIRED_FIELD: 'এই ফিল্ড প্রয়োজনীয়'
};

// ─── SUCCESS MESSAGES ──────────────────────────────────────
export const SUCCESS_MESSAGES = {
  TRIP_SAVED: 'ট্রিপ সংরক্ষিত',
  TRIP_UPDATED: 'ট্রিপ আপডেট',
  TRIP_DELETED: 'ট্রিপ মুছে ফেলা হয়েছে',
  REPAIR_SAVED: 'মেরামত সংরক্ষিত',
  REPAIR_UPDATED: 'মেরামত আপডেট',
  REPAIR_DELETED: 'মেরামত মুছে ফেলা হয়েছে',
  OFFICE_SAVED: 'অফিস খরচ যুক্ত',
  OFFICE_UPDATED: 'অফিস খরচ আপডেট',
  OFFICE_DELETED: 'অফিস খরচ মুছে ফেলা হয়েছে',
  BACKUP_DOWNLOADED: 'ব্যাকআপ ডাউনলোড',
  RESTORE_COMPLETE: 'রিস্টোর সম্পূর্ণ',
  SYNCED: 'সিঙ্ক সম্পূর্ণ'
};
