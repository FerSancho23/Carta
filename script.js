onload = () => {
  document.body.classList.remove("container");
};

function mostrarCarta() {
  const carta = document.getElementById("carta");
  carta.classList.toggle("carta-visible");
}
