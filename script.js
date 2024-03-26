// Solicitar al usuario su nombre de usuario
var userName = prompt("Por favor, introduce tu nombre de usuario:");
// Convertir la primera letra en mayúscula
userName = userName.charAt(0).toUpperCase() + userName.slice(1);

// Precio por defecto del Bitcoin en dólares (puedes cambiar este valor según el precio actual)
var precioBitcoinPorDefecto = 0.000014;

// Solicitar al usuario el valor a convertir a Bitcoin
var valorIngresado = parseFloat(
  prompt("Ingrese el valor en dólares para convertir a Bitcoin:")
);

// Verificar si el valor ingresado es un número válido
if (isNaN(valorIngresado)) {
  alert("Por favor, ingrese un número válido.");
} else {
  // Convertir el valor ingresado a Bitcoin
  var valorEnBitcoin = valorIngresado * precioBitcoinPorDefecto;

  // Mostrar el resultado en un mensaje de alerta
  if (valorIngresado === 1) {
  alert("Hola " + userName + "! El valor ingresado de " + valorIngresado.toFixed(2) + " dólar equivale a " + valorEnBitcoin.toFixed(6) + " Bitcoins (BTC) según el precio actual del Bitcoin.");
} else {
  alert("Hola " + userName + "! El valor ingresado de " + valorIngresado.toFixed(2) + " dólares equivale a " + valorEnBitcoin.toFixed(6) + " Bitcoins (BTC) según el precio actual del Bitcoin.");
}

}
