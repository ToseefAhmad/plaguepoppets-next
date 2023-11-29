/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "flip-rgba": "rgba(255,255,255,0.5)",
        "Ninetends-rgba":"rgba(0, 0, 0, 0.7)",
        "mobiletext-color":"rgba(255, 255, 255, 0.4)"
      },
      boxShadow: {
        "shadow": "0 5px 15px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        // 'xs': '370px',
        
  
        // 'sm': '640px',
        
  
        'md': '1000px',
       
  
        // 'lg': '1280px',
      
   
      },
      backgroundImage: {
        newMenuBg: "url('../assets/img/hamburger_menu_bg.png')",
        pagebg: "url('../assets/img/wallpaper_bg.png')",
        // artistbg: "url('../assets/img/ArtistMidBackgnd.png')",
        RectanglePP: "url('../assets/img/team/RectanglePP.png')",
        MaPeebsParlorPaper: "url('../assets/img/parlour/paper_texture.png')",
        Frame: "url('../assets/img/parlour/frame.png')",
        Bookoverlay: "url('../assets/img/Flipbook/book_overlay.png')",
        RectangleMenu: "url('../assets/img/hamburger_menu_bg.png')",
      },
      fontFamily: {
        belizarius: "Belizarius",
        source:"source code pro"
      },
      zIndex: {
        99: "99",
        998: "998",
        999: "999",
      },
    },
  },
  plugins: [],
};
