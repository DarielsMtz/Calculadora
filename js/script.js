document.addEventListener("DOMContentLoaded", function () {
  let resultado = document.getElementById("resultado"); // Seleccionar el elemento con el id resultado
  let btns = document.querySelectorAll(".btn_calculadora"); // Seleccionar todos los botones de la calculadora
  let evento_final = ""; // Variable para controlar el último evento

  // Lista de errores que se pueden producir
  const lista_errores = [
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
      // Evaluar la operación matemática
      return eval(calculo);
    } catch (error) {
      // En caso de que se produzca un error, devolver el nombre del error
      return error.name;
    }
  }

  // Evento click para cada botón de los números y operadores
  function btn_igual() {
    if (!lista_errores.includes(resultado.textContent)) {
      resultado.textContent = calcular_operacion(resultado.textContent);
    }
    // Cambiar el valor de la variable evento_final
    evento_final = "Igual";
  }

  // Función para manejar el botón AC
  function btn_AC() {
    resultado.textContent = "0";
    evento_final = "";
  }

  // Función para manejar los botones de número y operador
  function manejar_input(btn_clickeado) {
    if (lista_errores.includes(resultado.textContent)) {
      resultado.textContent = btn_clickeado;
    } else {
      // En caso de que el último evento sea el botón igual
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
      // Obtener el texto del botón clickeado
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
          manejar_input(btn_presionado);
          break;
      }
    });
  }

  // Agregar el evento click a cada botón
  btns.forEach(agregar_evento_click);
});
