document.addEventListener("DOMContentLoaded", function () {
  let resultado = document.getElementById("resultado");
  let btns = document.querySelectorAll(".tecla");
  let evento_final = "";

  // Lista de errores que se pueden producir
  const lista_errores = [
    "0",
    "Error",
    "Infinity",
    "-Infinity",
    "NaN",
    "undefined",
    "SintaxError",
  ];

  // Función para realizar la operación matemática
  function calcular_operacion(calculo) {
    try {
      return eval(calculo);
    } catch (error) {
      return error.name;
    }
  }

  // Evento click para cada botón
  function btn_igual() {
    resultado.textContent = calcular_operacion(resultado.textContent);
    evento_final = "Igual";
  }

  // Función para manejar el botón AC
  function btn_AC() {
    resultado.textContent = "0";
  }

  // Función para manejar los botones de número y operador
  function manejarBotonNumeroOperador(btn_clickeado) {
    if (lista_errores.includes(resultado.textContent)) {
      resultado.textContent = btn_clickeado;
    } else {
      if (evento_final === "Igual") {
        resultado.textContent = btn_clickeado;
        evento_final = "";
      } else {
        resultado.textContent += btn_clickeado;
      }
    }
  }

  //  Función para agregar el evento click a cada botón
  function agregar_evento_click(btn_evento) {
    btn_evento.addEventListener("click", function () {
      const btn_presionado = btn_evento.textContent;

      // Sentencias switch para manejar los botones
      switch (btn_presionado) {
        // En el caso de que el botón clickeado sea el botón igual
        case "=":
          btn_igual();
          break;
        // En el caso de que el botón clickeado sea el botón AC
        case "AC":
          btn_AC();
          break;
        // En el caso de que el botón clickeado sea un número o un operador
        default:
          manejarBotonNumeroOperador(btn_presionado);
          break;
      }
    });
  }

  // Agregar el evento click a cada botón
  btns.forEach(agregar_evento_click);
});
