import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Global State Store using Zustand
 * Manages: trips, repairs, office expenses, drivers, UI state, theme, etc.
 */
export const useAppStore = create(
  persist(
    (set, get) => ({
      // ─── USER & AUTH ───────────────────────────────────────
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),

      // ─── THEME ────────────────────────────────────────────
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),

      // ─── TABS & UI STATE ──────────────────────────────────
      activeTab: 'fleet', // 'fleet', 'bi', 'office', 'yearly'
      subTab: 'trips', // 'trips', 'repairs'
      setActiveTab: (tab) => set({ activeTab: tab }),
      setSubTab: (tab) => set({ subTab: tab }),

      // ─── SELECTED FILTERS ─────────────────────────────────
      selectedCar: 1,
      selectedMonth: new Date().getMonth(),
      selectedYear: new Date().getFullYear(),
      setSelectedCar: (carId) => set({ selectedCar: carId }),
      setSelectedMonth: (month) => set({ selectedMonth: month }),
      setSelectedYear: (year) => set({ selectedYear: year }),

      // ─── TRIPS ────────────────────────────────────────────
      trips: [],
      setTrips: (trips) => set({ trips }),
      addTrip: (trip) => set((state) => {
        const exists = state.trips.find(t => t.id === trip.id);
        return {
          trips: exists
            ? state.trips.map(t => t.id === trip.id ? trip : t)
            : [trip, ...state.trips]
        };
      }),
      removeTrip: (id) => set((state) => ({
        trips: state.trips.filter(t => t.id !== id)
      })),

      // ─── REPAIRS ──────────────────────────────────────────
      repairs: [],
      setRepairs: (repairs) => set({ repairs }),
      addRepair: (repair) => set((state) => {
        const exists = state.repairs.find(r => r.id === repair.id);
        return {
          repairs: exists
            ? state.repairs.map(r => r.id === repair.id ? repair : r)
            : [repair, ...state.repairs]
        };
      }),
      removeRepair: (id) => set((state) => ({
        repairs: state.repairs.filter(r => r.id !== id)
      })),

      // ─── OFFICE EXPENSES ──────────────────────────────────
      officeExpenses: [],
      setOfficeExpenses: (expenses) => set({ officeExpenses: expenses }),
      addOfficeExpense: (expense) => set((state) => {
        const exists = state.officeExpenses.find(o => o.id === expense.id);
        return {
          officeExpenses: exists
            ? state.officeExpenses.map(o => o.id === expense.id ? expense : o)
            : [expense, ...state.officeExpenses]
        };
      }),
      removeOfficeExpense: (id) => set((state) => ({
        officeExpenses: state.officeExpenses.filter(o => o.id !== id)
      })),

      // ─── DRIVERS ──────────────────────────────────────────
      drivers: [],
      setDrivers: (drivers) => set({ drivers }),

      // ─── TOAST NOTIFICATIONS ──────────────────────────────
      toast: null,
      showToast: (message, isError = false) => set({ toast: { message, isError } }),
      clearToast: () => set({ toast: null }),

      // ─── LOADING STATE ─────────────────────────────────────
      loading: false,
      setLoading: (loading) => set({ loading }),

      // ─── BULK DATA IMPORT/EXPORT ──────────────────────────
      importData: (data) => set({
        trips: data.trips || [],
        repairs: data.repairs || [],
        officeExpenses: data.officeExpenses || [],
        drivers: data.drivers || []
      }),

      exportData: () => {
        const state = get();
        return {
          trips: state.trips,
          repairs: state.repairs,
          officeExpenses: state.officeExpenses,
          drivers: state.drivers
        };
      }
    }),
    {
      name: 'khadem-store', // localStorage key
      partialize: (state) => ({
        trips: state.trips,
        repairs: state.repairs,
        officeExpenses: state.officeExpenses,
        drivers: state.drivers,
        theme: state.theme,
        selectedCar: state.selectedCar,
        selectedMonth: state.selectedMonth,
        selectedYear: state.selectedYear
      })
    }
  )
);
