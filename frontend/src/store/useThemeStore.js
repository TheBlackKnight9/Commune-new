import { create } from "zustand";

const THEME_KEY = "commune-theme";
const LEGACY_THEME_KEY = "streamify-theme";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem(THEME_KEY) || localStorage.getItem(LEGACY_THEME_KEY) || "coffee",
  setTheme: (theme) => {
    localStorage.setItem(THEME_KEY, theme);
    set({ theme });
  },
}));
