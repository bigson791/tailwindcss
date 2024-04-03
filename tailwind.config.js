/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      //aca se modifican los colores especificos de
      colors:{
        'azul-claro':'#243cff',
        'azul-oscuro': '#0d1b3e',
      },
      width:{
        '42': '170px'
      },
      screens:{
        //se redefinen los tamaños, si se modifica una medida se modifican todas
        'tablet': '900px'
      }
    },
  },
  plugins: [],
}

