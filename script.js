document.getElementById("year").textContent = new Date().getFullYear();

function configurarLink(id, url) {
  const link = document.getElementById(id);
  if (!link || !url || !url.trim()) return;
  link.href = url.trim();
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.removeAttribute("aria-disabled");
}

configurarLink("device-link", DEVICE_URL);
configurarLink("sheets-link", CHARACTER_SHEET_URL);

const note = document.getElementById("setup-note");
if (note) {
  note.textContent = "Cada recurso será aberto em uma nova página, mantendo a Central dos Jogadores disponível.";
}
