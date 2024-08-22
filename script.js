let numConcurso = document.querySelector('#numConcurso');
        let resultado = document.querySelector('.resultado');

        async function obterResultadoLoteria() {
            let loteria = document.querySelector('#loterias').value;
            let concurso = numConcurso.value;
            let url = `https://loteriascaixa-api.herokuapp.com/api/${loteria}/${concurso}`;

            try {
                let resposta = await fetch(url);
                let dados = await resposta.json();
                
                let dadosResultado = dados.dezenas.join(' - ')
                resultado.innerHTML = `${dadosResultado}`;
            } catch (error) {
                resultado.innerHTML = 'Erro ao obter os dados.';
            }
        }
