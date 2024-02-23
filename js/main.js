document.addEventListener("DOMContentLoaded", function () {
  // Llamamos a la salida por pantalla
  let salida = document.getElementById("resultado");
  // Llamamos a los botones con la clase "boton"
  let botones = document.querySelectorAll(".tecla");

  let ultimo_evento = "";

  // Variable para controlar si se ha presionado "="
  let igualPresionado = false;

  // Recorremos los botones y les añadimos un evento de click para que se ejecute lo que queremos
  botones.forEach((boton) => {
    boton.addEventListener("click", function () {
      let boton_clickado = boton.textContent;

      // Si el botón clickado es "AC" borramos la salida y escribimos "0"
      if (boton_clickado === "AC") {
        salida.textContent = "0";
        igualPresionado = false;
        return;
      }

      // Si el botón clickado es "=" y no se ha presionado previamente "=", evaluamos la operación
      if (boton_clickado === "=" && !igualPresionado) {
        try {
          salida.textContent = eval(salida.textContent);
          ultimo_evento = "Igual";
          igualPresionado = true;
        } catch {
          // Si hay un error en la operación matemática, mostramos un mensaje de error
          salida.textContent = "SintaxError";
        }
        return;
      }

      // Si el botón clickado es "AC" borramos el último número o operador
      if (
        salida.textContent === "0" ||
        salida.textContent === "Error" ||
        salida.textContent === "Infinity" ||
        salida.textContent === "-Infinity" ||
        salida.textContent === "NaN" ||
        salida.textContent === "undefined" ||
        salida.textContent === "SintaxError" ||
        igualPresionado
      ) {
        salida.textContent = boton_clickado;
        igualPresionado = false;
      } else {
        // Si no, añadimos el texto del botón clickado a la salida
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
