document.addEventListener("DOMContentLoaded", function () {
  let salida = document.getElementById("resultado");
  let botones = document.querySelectorAll(".tecla");

  // Variable para controlar el último evento
  let ultimo_evento = "";

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
  function calculate(operacion) {
    try {
      return eval(operacion);
    } catch (error) {
      return error.name;
    }
  }

  // Evento click para cada botón
  botones.forEach((boton) => {
    boton.addEventListener("click", function () {
      let boton_clickado = boton.textContent;

      // Si se pulsa el botón =, se realiza la operación
      if (boton_clickado === "=") {
        salida.textContent = calculate(salida.textContent);
        ultimo_evento = "Igual";
        return;
      }

      // Si se pulsa el botón AC, se borra todo
      if (boton_clickado === "AC") {
        salida.textContent = "0";
        return;
      }

      if (lista_errores.includes(salida.textContent)) {
        salida.textContent = boton_clickado;
      } else {
        // Si se pulsa un número o un operador, se añade al resultado
        if (ultimo_evento === "Igual") {
          salida.textContent = boton_clickado;
          ultimo_evento = "";
        } else {
          salida.textContent += boton_clickado;
        }
      }
    });
  });
});
