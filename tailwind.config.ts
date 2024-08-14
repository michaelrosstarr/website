import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /(bg-)?(yellow|blue|gray|brown|orange|green|purple|pink|red|default)-(100|300|800|900)/,
      variants: ['hover'],
    },
  ],
  theme: {
    colors: {
      default: colors.slate,
      brown: colors.brown,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      gray: colors.gray,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
      red: colors.red,
      white: colors.white,
      background: "#0c1216",
      cardBackground: "#151f26",
      primary: "#2675f9",
      third: "#282828",
      forth: "#0d1117",
      text: "#FFFFFF",
      social: {
        spotify: "#00C966",
        github: "#2f81f7",
        linkedin: "#5Ab0f7",
        twitter: "#1DA1F2",
        youtube: "#ff0000",
        coffee: "#ffdd00"
      }
    }
  },
  plugins: [
  ],
}
export default config
