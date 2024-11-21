const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformaçõesGlobais(){
   const res = await fetch(url)
   const dados = await res.json()
   const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
   const pessoasNoMundo = (dados.total_pesoas_mundo / 1e9)
   const horas = parseInt (dados.tempo_medio)
   const minutos = Math.round(dados.tempo_medio - horas) * 100 
   const porcentagemConectada = ( pessoasConectadas / pessoasNoMundo ) *100


   const paragrafo = document.createElement('p')
   paragrafo.classList.add('graficos-container__texto')


vizualizarInformacoesGlobais()
   

   const container = document.getElementById('graficos-cntainer')
   container.appendChild(paragrafo)
}


vizualizarInformaçõesGlobais()
