// Seleção de elementos do Hero
const cards = document.querySelectorAll('.card');
const heroTitulo = document.getElementById('hero-titulo');
const heroFrase = document.getElementById('hero-frase');
const heroImg = document.getElementById('hero-img');
const heroBtn = document.getElementById('hero-btn');
const audioClick = document.getElementById('audio-click');

// Dados originais para o Reset
const dadosOriginais = {
    titulo: "Persona 4 Golden",
    frase: "Reach out to the truth.",
    imagem: "assets/hero/hero.jpg",
    cor: "#facc15"
};

// --- LÓGICA DE PERSONAGENS NO HERO ---
cards.forEach(card => {
    card.addEventListener('click', () => {
        const nome = card.querySelector('h3').innerText;
        const frase = card.querySelector('p').innerText;
        const imagemSrc = card.querySelector('img').getAttribute('src');
        const cor = getComputedStyle(card).getPropertyValue('--char-color');

        // Efeito Sonoro
        audioClick.currentTime = 0; 
        audioClick.play();

        // Atualização Visual
        heroTitulo.innerText = nome;
        heroFrase.innerText = `"${frase}"`;
        heroImg.src = imagemSrc;
        
        // Cores Dinâmicas
        heroTitulo.style.color = cor;
        heroBtn.style.backgroundColor = cor;
        heroImg.style.setProperty('--char-color', cor);

        // Feedback de scroll
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Reset ao clicar em "Enter the TV"
heroBtn.addEventListener('click', () => {
    heroTitulo.innerText = dadosOriginais.titulo;
    heroFrase.innerText = dadosOriginais.frase;
    heroImg.src = dadosOriginais.imagem;
    heroTitulo.style.color = dadosOriginais.cor;
    heroBtn.style.backgroundColor = dadosOriginais.cor;
    heroImg.style.setProperty('--char-color', dadosOriginais.cor);
});

// --- LÓGICA DE FILTROS DA GALERIA ---
const filtros = document.querySelectorAll('.btn-filtro');
const fotosGaleria = document.querySelectorAll('.galeria-grid img');

filtros.forEach(botao => {
    botao.addEventListener('click', () => {
        // Se já estiver ativo, não faz nada
        if (botao.classList.contains('active')) return;

        // Som de estática ao trocar filtro
        audioClick.currentTime = 0;
        audioClick.play();

        // Mudar visual do botão ativo
        filtros.forEach(btn => btn.classList.remove('active'));
        botao.classList.add('active');

        const categoria = botao.getAttribute('data-filter');

        fotosGaleria.forEach(foto => {
            if (categoria === 'all' || foto.classList.contains(categoria)) {
                foto.style.display = 'block'; // Mostra a imagem
                setTimeout(() => foto.style.opacity = '1', 10); 
            } else {
                foto.style.opacity = '0'; // Esconde com fade
                setTimeout(() => foto.style.display = 'none', 300); // Tira do layout após o fade
            }
        });
    });
});