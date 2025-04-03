// Exibir conteúdo ao clicar no botão
document.getElementById("revealButton").addEventListener("click", function() {
  document.getElementById("hiddenContent").classList.add("visible");
  document.querySelector(".button-container").style.display = "none"; // Esconde o botão
});

// Contador de tempo juntos
const startDate = new Date("2022-01-22T00:00:00");
const counter = document.getElementById("time-together");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  counter.textContent = `Juntos há: ${years} anos, ${months} meses, ${weeks} semanas, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}

setInterval(updateCounter, 1000);
updateCounter();

// Criar corações caindo apenas quando o conteúdo estiver visível
function createHeart() {
  if (!document.getElementById("hiddenContent").classList.contains("visible")) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  // Define a posição inicial aleatória dentro da largura da tela
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Tempo aleatório de queda

  document.body.appendChild(heart);

  // Remove os corações após a animação
  setTimeout(() => {
      heart.remove();
  }, 5000);
}

// Criar corações apenas quando o contador estiver visível
setInterval(createHeart, 400);
