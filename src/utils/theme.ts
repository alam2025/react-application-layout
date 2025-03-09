import { theme } from '../constants/theme';

type ThemeMode = 'light' | 'dark';

export const getCardClasses = (mode: ThemeMode) => {
  const baseClasses = 'rounded-xl shadow-sm p-6 transition-colors';
  const themeClasses = theme.card[mode];
  return `${baseClasses} ${themeClasses.background} ${themeClasses.border}`;
};

export const getButtonClasses = (variant: 'primary' | 'secondary', mode: ThemeMode) => {
  const baseClasses = theme.button[variant].base;
  const themeClasses = theme.button[variant][mode];
  return `${baseClasses} ${themeClasses}`;
};

export const getInputClasses = (mode: ThemeMode) => {
  const baseClasses = theme.input.base;
  const themeClasses = theme.input[mode];
  return `${baseClasses} ${themeClasses.background} ${themeClasses.border} ${themeClasses.text} ${themeClasses.placeholder} ${themeClasses.focus}`;
};