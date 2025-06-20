// Lista de palabras con pistas incluidas
const palabras = [
  { palabra: "MESSI", pistas: ["País: Argentina", "Camiseta: 10", "Balones de Oro: 7"] },
  { palabra: "NEYMAR", pistas: ["País: Brasil", "Camiseta: 10", "Equipo: Al Hilal"] },
  { palabra: "SUAREZ", pistas: ["País: Uruguay", "Camiseta: 9", "Apodo: El Pistolero"] },
  { palabra: "VIDAL", pistas: ["País: Chile", "Equipo: Colo-Colo", "Apodo: Rey Arturo"] },
  { palabra: "SANCHEZ", pistas: ["País: Chile", "Camiseta: 7", "Apodo: Niño Maravilla"] },
  { palabra: "DIMARIA", pistas: ["País: Argentina", "Camiseta: 11", "Gol en final: Copa América 2021"] },
  { palabra: "VINICIUS", pistas: ["País: Brasil", "Camiseta: 7", "Equipo: Real Madrid"] },
  { palabra: "RODRYGO", pistas: ["País: Brasil", "Camiseta: 11", "Momento: Doble al City"] },
  { palabra: "JAMES", pistas: ["País: Colombia", "Camiseta: 10", "Mundial destacado: 2014"] },
  { palabra: "CAVANI", pistas: ["País: Uruguay", "Camiseta: 21", "Equipo histórico: PSG"] },
  { palabra: "SOTELDO", pistas: ["País: Venezuela", "Camiseta: 10", "Característica: Habilidad"] },
  { palabra: "VALVERDE", pistas: ["País: Uruguay", "Camiseta: 15", "Apodo: Halcón"] },
  { palabra: "MASTANTUONO", pistas: ["País: Argentina", "Camiseta: 10", "Equipo: River Plate"] },
  { palabra: "ENDRICK", pistas: ["País: Brasil", "Joven promesa", "Equipo: Real Madrid"] },
  { palabra: "RICHARLISON", pistas: ["País: Brasil", "Camiseta: 9", "Celebración: Paloma"] },
  { palabra: "RONDON", pistas: ["País: Venezuela", "Camiseta: 23", "Apodo: Gladiador"] },
  { palabra: "ARANGUIZ", pistas: ["País: Chile", "Camiseta: 20", "Club: U de Chile"] },
  { palabra: "QUINTERO", pistas: ["País: Colombia", "Golazo: Final Libertadores", "Apodo: Juanfer"] },
  { palabra: "DEPAUL", pistas: ["País: Argentina", "Apodo: Motorcito", "Amigo de Messi"] },
  { palabra: "LAUTARO", pistas: ["País: Argentina", "Capitán del Inter", "Apodo: El Toro"] },
  { palabra: "EMILIANO", pistas: ["País: Argentina", "Arquero atajador", "Figura en Qatar 2022"] },
  { palabra: "ENZO", pistas: ["País: Argentina", "Mediocampista del Chelsea", "Ex River Plate"] },
  { palabra: "MACALLISTER", pistas: ["País: Argentina", "Volante del Liverpool", "Cabello rojizo"] },
  { palabra: "GARNACHO", pistas: ["País: Argentina", "Juega en Manchester United", "Nació en España"] },
  { palabra: "OTAMENDI", pistas: ["País: Argentina", "Defensa central", "Veterano campeón del mundo"] },
  { palabra: "ALVAREZ", pistas: ["País: Argentina", "Delantero del City", "Apodo: Araña"] },
  { palabra: "TAGLIAFICO", pistas: ["País: Argentina", "Lateral izquierdo", "Ex Lyon y Ajax"] },
  { palabra: "CAICEDO", pistas: ["País: Ecuador", "Mediocentro del Chelsea", "Ex Brighton"] },
  { palabra: "ESTUPIÑAN", pistas: ["País: Ecuador", "Lateral izquierdo", "Club: Brighton"] },
  { palabra: "PAEZ", pistas: ["País: Ecuador", "Gran promesa", "Fichado por Chelsea"] },
  { palabra: "NUÑEZ", pistas: ["País: Uruguay", "Delantero potente", "Club: Liverpool"] },
  { palabra: "GIMENEZ", pistas: ["País: Uruguay", "Defensor central", "Capitán del Atlético Madrid"] },
  { palabra: "ARAUJO", pistas: ["País: Uruguay", "Defensa del Barcelona", "Sólido y rápido"] },
  { palabra: "PELLISTRI", pistas: ["País: Uruguay", "Extremo derecho", "Juega en el United"] },
  { palabra: "MOURA", pistas: ["País: Brasil", "Extremo veloz", "Volvió a São Paulo"] },
  { palabra: "ANTONY", pistas: ["País: Brasil", "Jugador del Betis", "Zurdo habilidoso"] },
  { palabra: "RAPHINHA", pistas: ["País: Brasil", "Juega en Barcelona", "Extremo por derecha"] },
  { palabra: "ALISSON", pistas: ["País: Brasil", "Arquero del Liverpool", "Seguro bajo el arco"] },
  { palabra: "EDER", pistas: ["País: Brasil", "Defensor del Real Madrid", "Apodo: Militão"] },
  { palabra: "MARQUINHOS", pistas: ["País: Brasil", "Capitán del PSG", "Central con liderazgo"] },
  { palabra: "BREMER", pistas: ["País: Brasil", "Defensa central", "Club: Juventus"] },
  { palabra: "DANILO", pistas: ["País: Brasil", "Lateral versátil", "Capitán de la Juventus"] },
  { palabra: "FRED", pistas: ["País: Brasil", "Volante ex United", "Actualmente en Fenerbahce"] },
  { palabra: "DIAZ", pistas: ["País: Colombia", "Extremo del Liverpool", "Habilidad y gol"] },
  { palabra: "LAPADULA", pistas: ["País: Perú", "Delantero con garra", "Nacionalizado peruano"] },
  { palabra: "ENCISO", pistas: ["País: Paraguay", "Juega en Brighton", "Extremo habilidoso"] },
  { palabra: "ALMIRON", pistas: ["País: Paraguay", "Mediocampista del Newcastle", "Gran velocidad"] },
  { palabra: "ROMERO", pistas: ["País: Paraguay", "Nombre: Ángel", "Club: Corinthians"] },
  { palabra: "OCHOA", pistas: ["País: México", "Arquero veterano", "5 mundiales"] },
  { palabra: "GIMENEZ", pistas: ["País: México", "Delantero del Feyenoord", "9"] },
  { palabra: "DAVILA", pistas: ["País: Chile", "Nombre: Víctor", "America"] },
  { palabra: "VARGAS", pistas: ["País: Chile", "Delantero experimentado", "Club: Nacional"] },
  { palabra: "DIAZ", pistas: ["País: Chile", "Nombre: Marcelo", "Apodo: Carepato"] },
  { palabra: "BRERETON", pistas: ["País: Chile", "Delantero nacido en Inglaterra", "11"] },
  { palabra: "NUÑEZ", pistas: ["País: Chile", "Nombre: Marcelino", "Club: Norwich City"] },
  { palabra: "ARAVENA", pistas: ["País: Chile", "Club: Gremio", "Promesa del medio local"] },
  { palabra: "OSORIO", pistas: ["País: Chile", "11", "Liga Danesa"] },
  { palabra: "CEPEDA", pistas: ["País: Chile", "32", "Colo-Colo"] },
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
