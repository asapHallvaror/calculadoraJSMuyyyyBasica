// Selecciona el elemento HTML con el id "display" y lo asigna a la variable 'display'
const display = document.querySelector("#display");

// Selecciona todos los elementos HTML de tipo 'button' y los asigna a la variable 'buttons'
const buttons = document.querySelectorAll("button");

// Itera sobre cada botón y agrega un event listener para el evento 'click'
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Verifica si el botón clickeado tiene el id "=" (es decir, el botón de igual)
        if(btn.id === "="){
            // Evalúa la expresión en el 'display' y asigna el resultado de vuelta al 'display'
            display.value = eval(display.value);
        } else if(btn.id === "ac"){ // Si el botón clickeado tiene el id "ac" (botón de limpiar todo)
            // Borra el contenido del 'display'
            display.value = "";
        } else if(btn.id === "de"){ // Si el botón clickeado tiene el id "de" (botón de borrar un carácter)
            // Elimina el último carácter del contenido del 'display'
            display.value = display.value.slice(0, -1);
        } else {
            // Si no es ninguno de los botones especiales (=, ac, de), agrega el contenido del botón clickeado al 'display'
            display.value += btn.id;
        }
    })
})
