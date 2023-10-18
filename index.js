const botao = document.getElementById('dado')

botao.addEventListener('click', () => conselhoAleatorio());

async function conselhoAleatorio () {
    const resposta = await fetch(`https://api.adviceslip.com/advice`);
    const json = await resposta.json();
    const conselhoExibir = json.slip.advice;
    const numeroExibir = json.slip.id;
    document.getElementById('conselho').innerHTML = conselhoExibir;
    document.getElementById('titulo').innerHTML = `ADVICE #${numeroExibir}`
}

conselhoAleatorio();