document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.getAttribute("data-copy"));
    if (!target) return;
    const text = target.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      const prev = button.textContent;
      button.textContent = "Скопировано";
      button.classList.add("done");
      setTimeout(() => {
        button.textContent = prev;
        button.classList.remove("done");
      }, 1600);
    } catch {
      button.textContent = "Выделите текст вручную";
    }
  });
});
