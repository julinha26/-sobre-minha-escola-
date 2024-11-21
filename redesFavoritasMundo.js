import { getCSS } from "./common.js"

async function redesFavoritasMundo(){
   const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
   const res= await fetch(url)
   const dados = await res.json()
   const redes = Object.keys(dados)
   const valores = Object.values(dados)

   const data = [
      {
         values: valores, 
         labels: redes,
         type: 'pie'
       

      }
   ]
}

