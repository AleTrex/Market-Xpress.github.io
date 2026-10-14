const CLAVE = "carrito";
const leer = () => JSON.parse(localStorage.getItem(CLAVE) || "[]");
const guardar = (c) => {
  localStorage.setItem(CLAVE, JSON.stringify(c));
  contador();
};
function agregar(n, p) {
  const c = leer();
  const i = c.find((x) => x.n === n);
  i ? i.q++ : c.push({ n, p, q: 1 });
  guardar(c);
}
function contador() {
  const e = document.getElementById("cuenta");
  if (e) e.textContent = leer().reduce((s, x) => s + x.q, 0);
}
document.addEventListener("DOMContentLoaded", contador);
