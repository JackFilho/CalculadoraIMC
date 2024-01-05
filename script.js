const button = document.getElementById('button');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso'); //Colocando um + no começo, transforma a String em um number
const altura = document.getElementById('altura'); //Colocando um + no começo, transforma a String em um number
const resultado = document.getElementById('resultado');


const getText = (imc) => {
    if(imc > 40) return 'Obesidade Grau III';
    if(imc > 35) return 'Obesidade Grau II';
    if(imc > 30) return 'Obesidade Grau I';
    if(imc > 25) return 'Levemente acima do Peso';
    if(imc > 18.5) return 'Peso ideal';
    return 'Abaixo do peso';
};

const imcCalc = () => {
if(!peso.value || !altura.value || !nome.value) return resultado.textContent = 'Preencha todos os campos';


    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1); //ToFixed para arrendondar o valor
    resultado.textContent = `${nome.value} - ${getText(valorImc)}`; //Calcula o valor do imc,passa o valor para dentro da função GetText verifica qual os padroes que vai eviar inserer dentro da div resultado
};

button.addEventListener('click', imcCalc);




