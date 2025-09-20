const noBtn = document.getElementById('noBtn');

// Adiciona um ouvinte para o evento 'mouseover' (quando o mouse passa por cima)
noBtn.addEventListener('mouseover', () => {
    // Pega a largura e altura da janela
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Pega o tamanho do botão
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calcula uma posição aleatória para o botão fugir
    // Garante que ele não saia da tela
    const randomX = Math.floor(Math.random() * (windowWidth - btnWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - btnHeight));

    // Aplica a nova posição ao botão
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});