import { pegaCep } from "./scripts/exercicio4"
import { pegaPoke } from "./scripts/exercicio5"
import { soma, subtracao, multiplicacao, divisao} from "./modules/operators"
import "./styles/styles.css"

let botaoSoma = document.getElementById('btn-soma')
botaoSoma.addEventListener("click", () => {
  // document.getElementById('id-lista-informacao-soma').innerText = "" //limpa div
  const numero1 = document.getElementById('soma-1').value
  const numero2 = document.getElementById('soma-2').value
  const resposta = soma(parseInt(numero1),parseInt(numero2))
  document.getElementById('id-lista-informacao-soma').innerText = resposta
})

let botaoSubtacao = document.getElementById('btn-sub')
botaoSubtacao.addEventListener("click", () => {
  // document.getElementById('id-lista-informacao-soma').innerText = "" //limpa div
  const numero1 = document.getElementById('sub-1').value
  const numero2 = document.getElementById('sub-2').value
  const resposta = subtracao(parseInt(numero1),parseInt(numero2))
  document.getElementById('id-lista-informacao-sub').innerText = resposta
})