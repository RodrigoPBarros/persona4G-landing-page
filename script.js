// 1. Selecionar elementos
const cards = document.querySelectorAll('.card');
const heroTitulo = document.getElementById('hero-titulo');
const heroFrase = document.getElementById('hero-frase');
const heroImg = document.getElementById('hero-img');
const heroBtn = document.getElementById('hero-btn');

// 2. GUARDAR os dados originais do "P4 Golden"
const dadosOriginais = {
    titulo: "Persona 4 Golden",
    frase: "Reach out to the truth.",
    imagem: "assets/hero/hero.jpg", // Certifique-se que o caminho está certo
    cor: "#facc15" // Amarelo padrão do jogo
};

// 3. Função para mudar o Hero 
cards.forEach(card => {
    card.addEventListener('click', () => {
        const nome = card.querySelector('h3').innerText;
        const frase = card.querySelector('p').innerText;
        const imagemSrc = card.querySelector('img').getAttribute('src');
        const cor = getComputedStyle(card).getPropertyValue('--char-color');

        heroTitulo.innerText = nome;
        heroFrase.innerText = `"${frase}"`;
        heroImg.src = imagemSrc;
        
        // Aplica cores do personagem
        heroTitulo.style.color = cor;
        heroBtn.style.backgroundColor = cor;
        heroImg.style.setProperty('--char-color', cor);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// 4. O Reset 
heroBtn.addEventListener('click', (event) => {
    // Se o botão for apenas para resetar e não para levar a outra página, 
    // podemos usar o preventDefault()
    // event.preventDefault(); 

    heroTitulo.innerText = dadosOriginais.titulo;
    heroFrase.innerText = dadosOriginais.frase;
    heroImg.src = dadosOriginais.imagem;

    // Volta para o amarelo padrão
    heroTitulo.style.color = dadosOriginais.cor;
    heroBtn.style.backgroundColor = dadosOriginais.cor;
    heroImg.style.setProperty('--char-color', dadosOriginais.cor);
    
    console.log("Voltando para o mundo real!");
});