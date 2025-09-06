const btn = document.getElementById("btn-mover");
const bola = document.getElementById("bola");

let movida = false;

btn.addEventListener("click", () => {
  if (!movida) {
    bola.style.left = "300px";
    btn.innerText = "Voltar";
  } else {
    bola.style.left = "0";
    btn.innerText = "Clique para me mover!";
  }
  movida = !movida;
});
