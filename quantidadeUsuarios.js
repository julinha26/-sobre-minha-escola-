async function quantidadeUsuarios() {
    const url = 'https//raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)  
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
           x : nomeDasRedes,
           y : quantidadeUsuarios,
           type:'bar',
           marker: {
            color: getComputedStyle(document.body). getPropertyValue('--prymary-color')
           }
        }
    ]
    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários no mundo',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'nome das redes sociais',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    plotly.newplot(grafico, data)
  }

  quantidadeUsuarios()