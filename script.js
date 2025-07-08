document.addEventListener("DOMContentLoaded", () => {
  const rewards = [
    "🧨 Explosion de bonus : 10 minutes en plus !",
    "🍀 Coup de chance : une partie gratuite !",
    "🎟️ Ticket VIP : saute une file d’attente",
    "🧃 Boisson offerte à la pause",
    "🧠 Question mystère : réponds bien, gagne un lot !",
    "😢 Dommage ! Retente ta chance une prochaine fois..."
  ];

  const button = document.getElementById("spinBtn");
  const rewardText = document.getElementById("rewardText");
  const timestamp = document.getElementById("timestamp");

  // Vérifie s'il y a déjà une récompense
  const savedReward = sessionStorage.getItem("reward");
  const savedTime = sessionStorage.getItem("rewardTime");

  if (savedReward && savedTime) {
    rewardText.textContent = savedReward;
    timestamp.textContent = `🎯 Tiré le ${savedTime}`;
    button.remove();
  } else {
    let clicked = false; // Variable de protection

    button.addEventListener("click", () => {
      if (clicked) return; // ⛔ Empêche toute action après 1er clic
      clicked = true;

      const reward = rewards[Math.floor(Math.random() * rewards.length)];

      const now = new Date();
      const formatted = now.toLocaleString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });

      rewardText.textContent = reward;
      timestamp.textContent = `🎯 Tiré le ${formatted}`;

      sessionStorage.setItem("reward", reward);
      sessionStorage.setItem("rewardTime", formatted);

      // Verrou visuel immédiat
      button.disabled = true;
      button.style.opacity = "0.6";
      button.style.cursor = "not-allowed";

      setTimeout(() => {
        button.remove();
      }, 1000);
    });
  }
});
