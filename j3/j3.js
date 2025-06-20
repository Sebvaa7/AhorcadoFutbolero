const palabras = [
  { palabra: "MBAPPE", pistas: ["País: Francia", "Club: Real Madrid", "Apodo: Tortuga Ninja"] },
  { palabra: "HAALAND", pistas: ["País: Noruega", "Club: Manchester City", "Apodo: Androide"] },
  { palabra: "BELLINGHAM", pistas: ["País: Inglaterra", "Club: Real Madrid", "Posición: Mediocampista ofensivo"] },
  { palabra: "FODEN", pistas: ["País: Inglaterra", "Club: Manchester City", "47"] },
  { palabra: "PEDRI", pistas: ["País: España", "Club: FC Barcelona", "Apodo: El nuevo Iniesta"] },
  { palabra: "GAVI", pistas: ["País: España", "Club: FC Barcelona", "Estilo: Garra y juventud"] },
  { palabra: "RICE", pistas: ["País: Inglaterra", "Club: Arsenal", "Posición: Mediocentro defensivo"] },
  { palabra: "GRIEZMANN", pistas: ["País: Francia", "Club: Atlético de Madrid", "Apodo: Principito"] },
  { palabra: "THEO", pistas: ["País: Francia", "Club: AC Milan", "Posición: Lateral izquierdo"] },
  { palabra: "LEAO", pistas: ["País: Portugal", "Club: AC Milan", "Estilo: Rápido y desequilibrante"] },
  { palabra: "TONALI", pistas: ["País: Italia", "Club: Newcastle", "Comparado con Gattuso"] },
  { palabra: "SZOBOSZLAI", pistas: ["País: Hungría", "Club: Liverpool", "Especialidad: Disparo lejano"] },
  { palabra: "GNABRY", pistas: ["País: Alemania", "Club: Bayern Múnich", "Posición: Extremo derecho"] },
  { palabra: "MUSIALA", pistas: ["País: Alemania", "Club: Bayern Múnich", "Apodo: Bambi"] },
  { palabra: "ODEGAARD", pistas: ["País: Noruega", "Club: Arsenal", "Rol: Capitán y cerebro del equipo"] },
  { palabra: "CHIESA", pistas: ["País: Italia", "Club: Juventus", "Federico"] },
  { palabra: "VLAHOVIC", pistas: ["País: Serbia", "Club: Juventus", "Delantero potente"] },
  { palabra: "ZINCHENKO", pistas: ["País: Ucrania", "Club: Arsenal", "Lateral"] },
  { palabra: "BARELLA", pistas: ["País: Italia", "Club: Inter de Milán", "Box to box clásico"] },
  { palabra: "RAMSDALE", pistas: ["País: Inglaterra", "Club: Arsenal", "Portero con reflejos"] },
  { palabra: "MODRIC", pistas: ["País: Croacia", "Club: Real Madrid", "Leyenda"] },
  { palabra: "DONNARUMMA", pistas: ["País: Italia", "Club: PSG", "Portero titular de Italia"] },
  { palabra: "KOULUSEVSKI", pistas: ["País: Suecia", "Club: Tottenham", "Zurdo con mucha técnica"] },
  { palabra: "REUS", pistas: ["País: Alemania", "Club: Borussia Dortmund", "Lealtad al club"] },
  { palabra: "ISAK", pistas: ["Suecia", "Newcastle 14", "20 goles 24/25"] },
  { palabra: "WIRTZ", pistas: ["Alemania", "Leverkusen 10", "Bundesliga 2025"] },
  { palabra: "RÜDIGER", pistas: ["Alemania", "Madrid 22", "Defensa agresivo"] },
  { palabra: "LEWANDOWSKI", pistas: ["Polonia", "Barça 9", "5 goles en 9 min"] },
  { palabra: "FÉLIX", pistas: ["Portugal", "Parecido a Kaka", "Joao"] },
  { palabra: "HØJLUND", pistas: ["Dinamarca", "Man Utd 11", "5 goles UCL"] },
  { palabra: "KVARA", pistas: ["País: Georgia", "Nombre difícil", "Crack del Napoli"] },
  { palabra: "DEPAY", pistas: ["País: Países Bajos", "Delantero versátil", "Gusta del rap"] },
  { palabra: "FERNANDES", pistas: ["País: Portugal", "Apodo: Bruno", "Toma todos los penales"] },
  { palabra: "RONALDO", pistas: ["Leyenda Real Madrid", "Apodo: El Bicho", "Maximo goleador del mundo"] },
  { palabra: "DEBRUYNE", pistas: ["País: Bélgica", "Club: Napoli", "Maestro de los pases largos"] },
  { palabra: "KANE", pistas: ["País: Inglaterra", "Club: Bayern Múnich", "9"] },
  { palabra: "SANCHO", pistas: ["País: Inglaterra", "Club: Manchester United", "Borrado por ten hag"] },
  { palabra: "SILVA", pistas: ["País: Portugal", "Club: Manchester City", "Técnico y creativo"] },
  { palabra: "VERRATTI", pistas: ["País: Italia", "Club: PSG", "Pequeño gran recuperador"] },
  { palabra: "KIMMICH", pistas: ["País: Alemania", "Club: Bayern Múnich", "Polivalente y líder"] },
  { palabra: "STERLING", pistas: ["País: Inglaterra", "Rastas y mitad jamaicano", "Extremo rápido y habilidoso"] },
  { palabra: "GREALISH", pistas: ["País: Inglaterra", "Club: Manchester City", "Driblador elegante"] },
  { palabra: "FABIÁN", pistas: ["País: España", "Club: Napoli", "Mediocampista con visión"] },
  { palabra: "BELLERIN", pistas: ["País: España", "Club: Real Betis", "Lateral derecho con buen físico"] },
  { palabra: "DUMFRIES", pistas: ["País: Países Bajos", "Club: Inter de Milán", "Lateral y extremo"] },
  { palabra: "YAMAL", pistas: ["País: España", "19", "Bailalo Rocky"] },
  { palabra: "LUNIN", pistas: ["Ucrania", "Real Madrid 13", "Suplente de Courtois"] }
];

let palabraSecreta = "";
let letrasAdivinadas = [];
let errores = 0;
let pistasActivas = [];
let nivelActual = 1;
let palabrasDisponibles = [];
const MAX_NIVELES = 30;

const palabraOcultaEl = document.getElementById("palabra-oculta");
const tecladoEl = document.getElementById("teclado");
const mensajeEl = document.getElementById("mensaje");
const erroresEl = document.getElementById("errores");
const btnSiguiente = document.getElementById("siguiente");
const nivelEl = document.getElementById("nivel");
const maxNivelEl = document.getElementById("max-nivel");

const partesAhorcado = {
  cabeza: document.getElementById("cabeza"),
  cuerpo: document.getElementById("cuerpo"),
  brazoIzq: document.getElementById("brazo-izq"),
  brazoDer: document.getElementById("brazo-der"),
  piernaIzq: document.getElementById("pierna-izq"),
  piernaDer: document.getElementById("pierna-der")
};

function iniciarJuego() {
  if (nivelActual > MAX_NIVELES) {
    finalizarJuego();
    return;
  }
  removerCelebracion();
  const palabraObj = palabrasDisponibles.shift();
  palabraSecreta = palabraObj.palabra.toUpperCase();
  letrasAdivinadas = Array(palabraSecreta.length).fill("_");
  pistasActivas = [];

  const pistasDisponibles = [...palabraObj.pistas];
  while (pistasActivas.length < 3 && pistasDisponibles.length > 0) {
    const idx = Math.floor(Math.random() * pistasDisponibles.length);
    pistasActivas.push(pistasDisponibles.splice(idx, 1)[0]);
  }

  errores = 0;
  mensajeEl.textContent = `Nivel ${nivelActual} de ${MAX_NIVELES}`;
  btnSiguiente.disabled = true;
  resetearPistas();
  resetearAhorcado();
  generarTeclado();
  actualizarUI();
}

function finalizarJuego() {
  mostrarConfetiAzulRojo();
  document.body.classList.add("fondo-animado");
  mensajeEl.innerHTML = `
    <div class="mensaje-final">¡Felicidades! Completaste todos los niveles 🎉</div>
  `;
  deshabilitarTeclado();
  btnSiguiente.disabled = true;
  palabraOcultaEl.textContent = "";
  erroresEl.textContent = "";
  nivelEl.textContent = "";
  maxNivelEl.textContent = "";
}

function removerCelebracion() {
  document.body.classList.remove("fondo-animado");
  const confettiCanvas = document.getElementById("confetti-canvas");
  if (confettiCanvas) confettiCanvas.remove();
}

function resetearAhorcado() {
  Object.values(partesAhorcado).forEach(parte => {
    if (parte) parte.style.display = "none";
  });
}

function actualizarAhorcado() {
  resetearAhorcado();
  if (errores >= 1) partesAhorcado.cabeza.style.display = "block";
  if (errores >= 2) partesAhorcado.cuerpo.style.display = "block";
  if (errores >= 3) partesAhorcado.brazoIzq.style.display = "block";
  if (errores >= 4) partesAhorcado.brazoDer.style.display = "block";
  if (errores >= 5) partesAhorcado.piernaIzq.style.display = "block";
  if (errores >= 6) partesAhorcado.piernaDer.style.display = "block";
}

function generarTeclado() {
  tecladoEl.innerHTML = "";
  const filas = ["QWERTYUIOP", "ASDFGHJKLÑ", "ZXCVBNM"];

  filas.forEach(fila => {
    const filaDiv = document.createElement("div");
    filaDiv.classList.add("fila-teclado");
    fila.split("").forEach(letra => {
      const boton = document.createElement("button");
      boton.textContent = letra;
      boton.disabled = false;
      boton.addEventListener("click", () => manejarIntento(letra));
      filaDiv.appendChild(boton);
    });
    tecladoEl.appendChild(filaDiv);
  });
}

function deshabilitarTeclado() {
  Array.from(tecladoEl.querySelectorAll("button")).forEach(boton => boton.disabled = true);
}

function manejarIntento(letra) {
  const botones = Array.from(tecladoEl.querySelectorAll("button"));
  botones.forEach(boton => {
    if (boton.textContent === letra) boton.disabled = true;
  });

  if (palabraSecreta.includes(letra)) {
    palabraSecreta.split("").forEach((char, i) => {
      if (char === letra) letrasAdivinadas[i] = letra;
    });

    if (!letrasAdivinadas.includes("_")) {
      mensajeEl.textContent = "¡Correcto! Pulsa 'Siguiente' para avanzar";
      btnSiguiente.disabled = false;
      deshabilitarTeclado();
      mostrarConfeti();
    }
  } else {
    errores++;
    actualizarAhorcado();
    mostrarPistasProgresivas();

    if (errores >= 6) {
      mensajeEl.innerHTML = `Perdiste. Era: <strong>${palabraSecreta}</strong><br>Presiona "Nueva Partida" o "Cambiar Modo"`;
      deshabilitarTeclado();
      btnSiguiente.disabled = true;
    }
  }
  actualizarUI();
}

function mostrarPistasProgresivas() {
  if (errores === 2) mostrarPista(0);
  if (errores === 4) mostrarPista(1);
  if (errores === 5) mostrarPista(2);
}

function mostrarPista(i) {
  const pistaBox = document.getElementById(`pista${i + 1}`);
  pistaBox.innerHTML = `<p>${pistasActivas[i]}</p>`;
  pistaBox.classList.add("activa");
}

function resetearPistas() {
  for (let i = 1; i <= 3; i++) {
    const pistaBox = document.getElementById(`pista${i}`);
    pistaBox.innerHTML = "";
    pistaBox.classList.remove("activa");
  }
}

function actualizarUI() {
  palabraOcultaEl.textContent = letrasAdivinadas.join(" ");
  erroresEl.textContent = `${errores}/6`;
  nivelEl.textContent = nivelActual;
  maxNivelEl.textContent = MAX_NIVELES;
}

function mostrarConfeti() {
  removerConfetiCanvas();

  const confettiCanvas = document.createElement("canvas");
  confettiCanvas.id = "confetti-canvas";
  confettiCanvas.style.position = "fixed";
  confettiCanvas.style.top = "0";
  confettiCanvas.style.left = "0";
  confettiCanvas.style.width = "100%";
  confettiCanvas.style.height = "100%";
  confettiCanvas.style.pointerEvents = "none";
  confettiCanvas.style.zIndex = "9999";
  document.body.appendChild(confettiCanvas);

  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const confetiPieces = [];
  // Colores múltiples (original)
  const colors = ["#f94144", "#f3722c", "#f9c74f", "#90be6d", "#577590"];

  for(let i = 0; i < 150; i++) {
    confetiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      size: (Math.random() * 8) + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: (Math.random() * 3) + 2,
      angle: Math.random() * 360,
      angularSpeed: (Math.random() * 0.1) + 0.01
    });
  }

  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confetiPieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
      ctx.restore();

      p.y += p.speed;
      p.angle += p.angularSpeed;

      if (p.y > confettiCanvas.height) {
        p.y = -10;
        p.x = Math.random() * confettiCanvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();

  setTimeout(() => {
    removerConfetiCanvas();
  }, 5000);
}

function reiniciarPalabrasDisponibles() {
  palabrasDisponibles = [...palabras];

  // Barajar aleatoriamente con algoritmo de Fisher-Yates
  for (let i = palabrasDisponibles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [palabrasDisponibles[i], palabrasDisponibles[j]] = [palabrasDisponibles[j], palabrasDisponibles[i]];
  }
}


function mostrarConfetiAzulRojo() {
  removerConfetiCanvas();

  const confettiCanvas = document.createElement("canvas");
  confettiCanvas.id = "confetti-canvas";
  confettiCanvas.style.position = "fixed";
  confettiCanvas.style.top = "0";
  confettiCanvas.style.left = "0";
  confettiCanvas.style.width = "100%";
  confettiCanvas.style.height = "100%";
  confettiCanvas.style.pointerEvents = "none";
  confettiCanvas.style.zIndex = "9999";
  document.body.appendChild(confettiCanvas);

  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const confetiPieces = [];
  // Colores azul y rojo:
  const colors = ["#0000FF", "#FF0000"];

  for (let i = 0; i < 200; i++) {
    confetiPieces.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      size: (Math.random() * 8) + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: (Math.random() * 3) + 2,
      angle: Math.random() * 360,
      angularSpeed: (Math.random() * 0.1) + 0.01
    });
  }

  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confetiPieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();

      p.y += p.speed;
      p.angle += p.angularSpeed;

      if (p.y > confettiCanvas.height) {
        p.y = -10;
        p.x = Math.random() * confettiCanvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();

  setTimeout(() => {
    removerConfetiCanvas();
  }, 7000);
}

function removerConfetiCanvas() {
  const confettiCanvas = document.getElementById("confetti-canvas");
  if (confettiCanvas) confettiCanvas.remove();
}

document.getElementById("reiniciar").addEventListener("click", () => {
  nivelActual = 1;
  reiniciarPalabrasDisponibles(); // ← aquí
  iniciarJuego();
});


document.getElementById("volver").addEventListener("click", () => {
  window.location.href = "../index.html";
});

btnSiguiente.addEventListener("click", () => {
  nivelActual++;
  iniciarJuego();
});

document.addEventListener("keydown", e => {
  const tecla = e.key.toUpperCase();
  if ("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".includes(tecla)) {
    const botones = Array.from(tecladoEl.querySelectorAll("button"));
    const boton = botones.find(b => b.textContent === tecla);
    if (boton && !boton.disabled) manejarIntento(tecla);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  reiniciarPalabrasDisponibles(); // ← aquí también
  iniciarJuego();
});

function verificarOrientacion() {
  const alerta = document.getElementById("orientacion-alerta");
  if (window.innerHeight > window.innerWidth && window.innerWidth < 768) {
    alerta.style.display = "flex";
  } else {
    alerta.style.display = "none";
  }
}

window.addEventListener("resize", verificarOrientacion);
window.addEventListener("orientationchange", verificarOrientacion);
document.addEventListener("DOMContentLoaded", verificarOrientacion);
