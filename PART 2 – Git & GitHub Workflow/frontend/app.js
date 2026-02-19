const statusNode = document.getElementById("status");
const reloadBtn = document.getElementById("reloadBtn");

async function loadMessage() {
  statusNode.textContent = "Contacting backend...";
  try {
    const response = await fetch("http://localhost:4000/api/hello");
    const data = await response.json();
    statusNode.textContent = `Backend says: ${data.message}`;
  } catch (error) {
    statusNode.textContent = "Backend unavailable. Start backend with npm start in /backend.";
  }
}

reloadBtn.addEventListener("click", loadMessage);
loadMessage();
