export const theme = {
  card: {
    light: {
      background: 'bg-white',
      border: 'border-gray-200',
      text: {
        primary: 'text-gray-900',
        secondary: 'text-gray-600',
      },
      hover: 'hover:bg-gray-50',
    },
    dark: {
      background: 'bg-gray-800',
      border: 'border-gray-700',
      text: {
        primary: 'text-white',
        secondary: 'text-gray-400',
      },
      hover: 'hover:bg-gray-700',
    },
  },
  button: {
    primary: {
      base: 'rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
      light: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
      dark: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400',
    },
    secondary: {
      base: 'rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors',
      light: 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
      dark: 'border-gray-600 bg-gray-700 text-gray-200 hover:bg-gray-600 focus:ring-blue-400',
    },
  },
  input: {
    base: 'block w-full rounded-md shadow-sm focus:outline-none transition-colors',
    light: {
      background: 'bg-white',
      border: 'border-gray-300',
      text: 'text-gray-900',
      placeholder: 'placeholder-gray-400',
      focus: 'focus:border-blue-500 focus:ring-blue-500',
    },
    dark: {
      background: 'bg-gray-800',
      border: 'border-gray-600',
      text: 'text-white',
      placeholder: 'placeholder-gray-500',
      focus: 'focus:border-blue-400 focus:ring-blue-400',
    },
  },
} as const;