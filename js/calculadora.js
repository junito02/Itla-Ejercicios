function operacion(signo) {
  let num1 = prompt("escribe el primer numero");
  let num2 = prompt("escribe el segundo numero");

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("escribe numeros validos");
  }

  let result;

  switch (signo) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("el numero 0 no es divisible");
      }
      result = num1 / num2;
      break;
    default:
      alert("escribe un numero valido");
  }
  alert(`el resultado de la operacion es: ${result}`);
}
