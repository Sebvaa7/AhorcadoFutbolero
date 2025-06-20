const palabras = [
  { palabra: "MARADONA", pistas: ["Argentina", "Manos de Dios", "Napoli ídolo"] },
  { palabra: "PELE", pistas: ["Brasil", "3 Mundiales", "Rey del Fútbol"] },
  { palabra: "CRUYFF", pistas: ["Holanda", "Total Football", "Barça/Ajax"] },
  { palabra: "BECKENBAUER", pistas: ["Alemania", "Libero elegante", "Kaiser"] },
  { palabra: "ZIDANE", pistas: ["Francia", "Cabezazo 2002", "Elegante"] },
  { palabra: "RONALDINHO", pistas: ["Brasil", "Sonrisa eterna", "Barça/PSG"] },
  { palabra: "RAÚL", pistas: ["España", "7 de leyenda", "Real Madrid"] },
  { palabra: "CASILLAS", pistas: ["España", "Paradas imposibles", "San Iker"] },
  { palabra: "XAVI", pistas: ["España", "Pases de relojería", "Mediocentro"] },
  { palabra: "INIESTA", pistas: ["España", "Gol en Mundial 2010", "Don Andrés"] },
  { palabra: "PUYOL", pistas: ["España", "Melena rubia", "Defensa férreo"] },
  { palabra: "ZAMORANO", pistas: ["Chile", "1+8 = 9", "Inter de Milán"] },
  { palabra: "SALAS", pistas: ["Chile", "Matador", "Lazio/Juve"] },
  { palabra: "BAGGIO", pistas: ["Italia", "Codirote 1994", "Divina coleta"] },
  { palabra: "TOTTI", pistas: ["Italia", "Roma eterno", "10 legendario"] },
  { palabra: "DEL PIERO", pistas: ["Italia", "Juve 10", "Tiro curvo"] },
  { palabra: "MALDINI", pistas: ["Italia", "3 de leyenda", "AC Milan"] },
  { palabra: "NESTA", pistas: ["Italia", "Elegante defensa", "Milan/Lazio"] },
  { palabra: "BATISTUTA", pistas: ["Argentina", "Poderoso remate", "Fiorentina"] },
  { palabra: "RIVALDO", pistas: ["Brasil", "Chilena Barça", "Balón Oro"] },
  { palabra: "KAKÁ", pistas: ["Brasil", "Cristiano elegante", "Milan"] },
  { palabra: "R.CARLOS", pistas: ["Brasil", "Tiro imposible", "Lateral"] },
  { palabra: "CAFU", pistas: ["Brasil", "2 Mundiales", "Carrilero"] },
  { palabra: "NAZARIO", pistas: ["Brasil", "Fenómeno", "Lesiones"] },
  { palabra: "FIGO", pistas: ["Portugal", "Traspaso Barça-Madrid", "Balón Oro"] },
  { palabra: "HENRY", pistas: ["Francia", "Arsenal ídolo", "Velocidad"] },
  { palabra: "VIEIRA", pistas: ["Francia", "Medio dominante", "Arsenal"] },
  { palabra: "CANTONA", pistas: ["Francia", "Cuello alto", "7 United"] },
  { palabra: "SCHOLES", pistas: ["Inglaterra", "Tiro lejano", "Mediocentro"] },
  { palabra: "GERRARD", pistas: ["Inglaterra", "Liverpool corazón", "Final 2005"] },
  { palabra: "LAMPARD", pistas: ["Inglaterra", "Goles de medio", "Chelsea"] },
  { palabra: "BECKHAM", pistas: ["Inglaterra", "Tiro curva", "7 United"] },
  { palabra: "ROONEY", pistas: ["Inglaterra", "Precoz", "United 10"] },
  { palabra: "VAN PERSIE", pistas: ["Holanda", "Volley Arsenal", "Furia naranja"] },
  { palabra: "GULLIT", pistas: ["Holanda", "Trenzas", "Milan"] },
  { palabra: "HAGI", pistas: ["Rumanía", "Pitufo", "Barcelona"] },
  { palabra: "SHEVCHENKO", pistas: ["Ucrania", "Milan ídolo", "Balón Oro"] },
  { palabra: "KEMPES", pistas: ["Argentina", "Mundial 1978", "Bigotes"] },
  { palabra: "DI STEFANO", pistas: ["Argentina/España", "Leyenda Madrid", "Balón de Oro"] },
  { palabra: "PUSKAS", pistas: ["Hungría", "Goleador", "Madrid"] },
  { palabra: "LAUDRUP", pistas: ["Dinamarca", "Clase", "Barça/Madrid"] },
  { palabra: "SCHMEICHEL", pistas: ["Dinamarca", "Portero United", "Paradas"] },
  { palabra: "BALLACK", pistas: ["Alemania", "Medio completo", "Chelsea"] },
  { palabra: "KLOSE", pistas: ["Alemania", "Máximo goleador Mundiales", "Cabezazos"] },
  { palabra: "KROOS", pistas: ["Alemania", "Pases precisos", "Retirado 2025"] },
  { palabra: "SCHWEINSTEIGER", pistas: ["Alemania", "Medio corazón", "Basti"] },
  { palabra: "ETO'O", pistas: ["Camerún", "Barça/Inter", "Velocidad"] },
  { palabra: "DROGBA", pistas: ["Costa Marfil", "Final UCL 2012", "Fuerza"] },
  { palabra: "WEÁH", pistas: ["Liberia", "Balón Oro", "Presidente"] },
  { palabra: "IBRAHIMOVIC", pistas: ["Suecia", "Ego grande", "PSG/Milan"] },
  { palabra: "TORRES", pistas: ["España", "Liverpool/Chelsea 9", "Final Euro 2008"] },
  { palabra: "VILLA", pistas: ["España", "Goleador", "Barça/Atleti"] },
  { palabra: "MORIENTES", pistas: ["España", "9 clásico", "Madrid"] },
  { palabra: "GUTI", pistas: ["España", "Asistencias locas", "Madrid"] },
  { palabra: "MAKÉLÉLÉ", pistas: ["Francia", "3 piernas", "Recuperador"] },
  { palabra: "AGÜERO", pistas: ["Argentina", "Gol último minuto", "City ídolo"] },
  { palabra: "MASCHERANO", pistas: ["Argentina", "Jefecito", "Barça"] },
  { palabra: "PIRLO", pistas: ["Italia", "Pases largos", "Barba"] },
  { palabra: "BUFFON", pistas: ["Italia", "Portero longevo", "Juventus"] },
  { palabra: "CANNAVARO", pistas: ["Italia", "Defensa Balón Oro", "2006"] },
  { palabra: "GATTUSO", pistas: ["Italia", "Perro rabioso", "Milan"] },
  { palabra: "RAÚL", pistas: ["España", "7 de leyenda", "Real Madrid"] },
  { palabra: "GUARDIOLA", pistas: ["España", "Mediocentro", "Ahora DT"] },
  { palavra: "BALE", pistas: ["Gales", "Velocidad", "Madrid/Tottenham"] },
  { palavra: "GIGGS", pistas: ["Gales", "Carrera larga", "Manchester United"] },
  { palavra: "KEANE", pistas: ["Irlanda", "Medio duro", "Manchester United"] }
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
