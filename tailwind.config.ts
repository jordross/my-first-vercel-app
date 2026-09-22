import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'happy-green': {50:'#f3f7f4',100:'#c8ddd0',200:'#9ec4a8',300:'#73ab80',400:'#4f9360',500:'#1a5c3a',600:'#154a2f',700:'#103824',800:'#0b2619',900:'#06140d'},
        'earth': {50:'#faf8f5',100:'#f5f0e8',200:'#e8dcc8',300:'#d4c3a3',400:'#bca77d',500:'#9c8661',600:'#7d6b4f',700:'#5e503b',800:'#3f3627',900:'#1f1b13'}
      }
    }
  },
  plugins: []
};
export default config;
