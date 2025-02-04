/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        "top-bg": "hsl(var(--top-bg))",
        "card-bg": "hsl(var(--card-bg))",
        // "text-dark-gray": "hsl(var(--text-dark-gray))",
        // "text-dark-blue": "hsl(var(--text-dark-blue))",
        "text": "hsl(var(--text))",
        "text-white": "hsl(var(--text-white))",
        "toggle-from": "hsl(var(--toggle-from))",
        "toggle-to": "hsl(var(--toggle-to))",
        toggle: "hsl(var(--toggle))",
        primary: {
          "lime-green": "hsl(163, 72%, 41%)",
          "bright-red": "hsl(356, 69%, 56%)",
          facebook: "hsl(208, 92%, 53%)",
          twitter: "hsl(203, 89%, 53%)",
          instagram: {
            from: "hsl(37, 97%, 70%)",
            to: "hsl(329, 70%, 58%)",
          },
          youtube: "hsl(348, 97%, 39%)",
        },
        // dark: {
        //   background: "hsl(230, 17%, 14%)",
        //   "top-bg": "hsl(232, 19%, 15%)",
        //   "card-bg": "hsl(228, 28%, 20%)",
        //   text: "hsl(228, 34%, 66%)",
        //   "text-white": "hsl(0, 0%, 100%)",
        //   toggle: {
        //     from: "hsl(210, 78%, 56%)` ",
        //     to: "hsl(146, 68%, 55%)",
        //   },
        // },
        // light: {
        //   background: "hsl(0, 0%, 100%)",
        //   "top-bg": "hsl(225, 100%, 98%)",
        //   "card-bg": "hsl(227, 47%, 96%)",
        //   "text-dark-gray": "hsl(228, 12%, 44%)",
        //   "text-dark-blue": "hsl(230, 17%, 14%)",
        //   toggle: "hsl(230, 22%, 74%)",
        // },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "overview-heading": "14px",
      },
      gradientColorStops: {
        instagram: ["hsl(37, 97%, 70%)", "hsl(329, 70%, 58%)"],
        toggleDark: ["hsl(210, 78%, 56%)", "hsl(146, 68%, 55%)"],
      },
    },
  },
  plugins: [],
};
