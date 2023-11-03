import React from 'react';
// @types
import {Theme} from '@resources/theme';

export interface ThemeProviderProps {
  initial: Theme;
  children: React.ReactNode;
}

export type ThemeContextState = {
  theme: Theme;
  toggleTheme: (callback?: (theme: Theme | null) => void) => Promise<void>;
  updateTheme: (updatedTheme: Theme) => void;
};
