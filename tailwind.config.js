/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
    }),
  ],
}

