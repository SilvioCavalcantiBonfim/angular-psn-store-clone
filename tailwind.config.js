/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans"],
      },
      keyframes: {
        slideoutleft: {
          '0%': {
            transform: 'translateX(-100px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideoutright: {
          '0%': {
            transform: 'translateX(100px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        heartbeat: {
          from: {
            transform: "scale(1)",
            "transform-origin": "center center",
            "animation-timing-function": "ease-out",
          },
          "10%": {
            transform: "scale(0.91)",
            "animation-timing-function": "ease-in",
          },
          "17%": {
            transform: "scale(0.98)",
            "animation-timing-function": "ease-out",
          },
          "33%": {
            transform: "scale(0.87)",
            "animation-timing-function": "ease-in",
          },
          "45%": {
            transform: "scale(1)",
            "animation-timing-function": "ease-out",
          },
        },
        wobblehorbottom: {
          '0%, 100%': {
            transform: 'translateX(0%)',
            transformOrigin: '50% 50%',
          },
          '15%': {
            transform: 'translateX(-5px) rotate(-6deg)',
          },
          '30%': {
            transform: 'translateX(2.5px) rotate(6deg)',
          },
          '45%': {
            transform: 'translateX(-2.5px) rotate(-3.6deg)',
          },
          '60%': {
            transform: 'translateX(1.5px) rotate(2.4deg)',
          },
          '75%': {
            transform: 'translateX(-1px) rotate(-1.2deg)',
          },
        },
      },
      animation: {
        heartbeat: "heartbeat 1.5s infinite",
        wobblehorbottom: "wobblehorbottom 0.8s infinite",
        slideoutleft: 'slideoutleft 10s ease-in-out',
        slideoutright: 'slideoutright 10s ease-in-out',
      },
    },
  },
  plugins: [],
};
