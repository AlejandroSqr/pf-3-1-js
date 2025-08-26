
export function addTwoNumbers(/*aqui tambien va código*/){
//Calculadora JS en Consola

const operator = prompt('Ingrese Operación ( +, -, * / ): ');

//Etiqueta ParseFloat en Calculadora
const n1 = parseFloat(prompt('Num 1:  '));
const n2 = parseFloat(prompt('Num 2: '));

let result;

if (operator == '+') {
    result = n1 + n2;
}
else if (operator == '-') {
    result = n1 - n2;
}
else if (operator == '*') {
    result = n1 * n2;
}
else {
    result = n1 / n2;
} alert("Tu Resultado es " + result);

console.log(`${n1} ${operator} ${n2} = ${result}`);
