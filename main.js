// ejercicio 1
let num1 = prompt("ingrese el primer numero")
let num2 = prompt("igrese el segundo numero")

if( num1 > num2){
    console.log("el primer numero es mayor que el segundo")
}else{
    console.log("el primer numero no es mayor que el segundo")
}


// ejercicio 2

let num3 = prompt("ingrese el primer numero")
let num4 = prompt("igrese el segundo numero")

if( num3 === num4){
    console.log("los numeros son iguales")
}else{
    console.log("los numeros son diferentes")
}


// ejercicio 3

let num5 = prompt("ingrese el primer numero")
let num6 = prompt("igrese el segundo numero")

if (num5 > num6){
    console.log("el primer numero es mayor que el segundo")
}else if (num5 < num6){
    console.log("el segundo numero es mayor que el primero")
}else{
    console.log("ambos numeros son iguales")
}


// ejercicio 4

let num7 = prompt("ingrese el primer numero")
let num8 = prompt("igrese el segundo numero")
let num9 = prompt("ingrese el primer numero")

let nunMinimo = num7

if (num8 < nunMinimo){
    nunMinimo = num8
}
if ( num9 < nunMinimo){
    nunMinimo = num9
}
console.log("el numero mas pequeño es: "+ nunMinimo)


// ejercicio 5

function datosPersonas(obj1, obj2) {
    let mensajeFinal = "";

    if (obj1.altura > obj2.altura) {
      mensajeFinal += obj1.nombre + " es la persona mas alta. ";
    } else if (obj1.altura < obj2.altura) {
      mensajeFinal += obj2.nombre + " es la persona mas alta. "
    } else {
      mensajeFinal += "Ambas personas miden lo mismo. "
    }

    if (obj1.edad > obj2.edad) {
      mensajeFinal += obj1.nombre + " es la persona de mayor edad."
    } else if (obj1 < obj2.edad) {
      mensajeFinal += obj2.nombre + " es la persona de mayor edad."
    } else {
      mensajeFinal += "Ambas personas tiene la misma edad"
    }
    return mensajeFinal;
  }
  let luis = {
    nombre: "Marco",
    edad: 36,
    altura: "1,67",
  };

  let yennys = {
    nombre: "Alejandra",
    edad: 21,
    altura: "1,70",
  };


// ejercicio 6

let nombre1 = prompt("ingrese su nombre")
let edad1 = prompt("ingrese su edad")
let altura = prompt("ingrese su altura")
let vision = prompt("ingrese su vision")
if (edad >= 18 && altura > 1.50 && vision >= 8) {
    console.log("estas capacitado para conducir")
} else {
    colnsole.log("no estas capacitado para conducir")
}


// ejercicio 7

let nombre = prompt("Ingresa tu nombre:")
let pase = prompt("Ingresa tu tipo de pase (vip o normal):")
let poseeEntrada = prompt("¿Posees entrada? (si o no):")


if (nombre === "Tú mismo" || pase === "vip") {
    console.log("¡Bienvenido, " + nombre + "! Tienes ingreso libre.")
} else {
    if (poseeEntrada === "si") {
        let utilizarEntrada = prompt("¿Deseas utilizar tu entrada? (si o no):")
        if (utilizarEntrada === "si") {
            console.log("¡Bienvenido, " + nombre + "! Disfruta del evento.")
        } else {
            let comprar = prompt("¿Deseas comprar un pase? (si o no):")
            if (comprar === "si") {
                let dineroDisponible = parseFloat(prompt("Ingresa la cantidad de dinero disponible:"))
                if (dineroDisponible >= 1000) {
                    console.log("Venta exitosa. ¡Bienvenido/a, " + nombre + "!")
                } else {
                    console.log("Lo siento, no tienes suficiente dinero para comprar.")
                }
            } else {
                console.log("Gracias por tu visita. ¡Hasta pronto!")
            }
        }
    } else {
        let comprar = prompt("¿Deseas comprar un pase? (si o no):")
        if (comprar === "si") {
            let dineroDisponible = parseFloat(prompt("Ingresa la cantidad de dinero disponible:"))
            if (dineroDisponible >= 1000) {
                console.log("Venta exitosa. ¡Bienvenido, " + nombre + "!")
            } else {
                console.log("Lo siento, no tienes suficiente dinero para comprar.")
            }
        } else {
            console.log("Gracias por tu visita. ¡Hasta pronto!")
        }
    }
}


// ejercicio 8

const numeroIncognita = Math.floor(Math.random() * 10) + 1
const intentosMaximos = 3

for (let intento = 1; intento <= intentosMaximos; intento++) {
    const numeroIngresado = parseInt(prompt(`Intento #${intento}: Ingresa un número del 1 al 10:`))

    if (numeroIngresado === numeroIncognita) {
        console.log("¡Ganaste, has adivinado el número!")
        break;
    } else {
        const mensaje = numeroIngresado < numeroIncognita ? "menor" : "mayor"
        console.log(`El número ingresado es ${mensaje}, vuelve a intentarlo.`)
    }
}

if (intento > intentosMaximos) {
    console.log(`Lo siento, has agotado tus intentos. El número era ${numeroIncognita}.`)
}



// ejercicio 9

let edad = prompt("ingrese su edad")

if ( edad >= 0 && edad <= 12){
    console.log("eres un infante")
}else if (edad >=13 && edad <= 18){
    console.log("eres un adolecente")
}else if (edad >= 19 && edad <= 45){
    console.log("eres un mayor joven")
}else if (edad > 45){
    console.log("eres un anciano")
}else if (edad > 100){
    let confirmacion = prompt("¿Estás seguro de que tienes más de 100 años? (si o no):");
    if (confirmacion.toLowerCase() === "si") {
        console.log("eres una persona muy ansiana.");
    } else {
        console.log("Probablemente ingresaste tu edad incorrectamente.");
    }
} else {
    console.log("Edad inválida.");
}


// ejercicio10

function jugarPiedraPapelTijeras(jugador1, jugador2) {
    jugador1 = jugador1.toLowerCase();
    jugador2 = jugador2.toLowerCase();
  
    if (jugador1 === jugador2) {
      return "¡Empate!";
    } else if (
      (jugador1 === "piedra" && jugador2 === "tijeras") 
      (jugador1 === "tijeras" && jugador2 === "papel") 
      (jugador1 === "papel" && jugador2 === "piedra")
    ) {
      return "¡Jugador 1 ha ganado!";
    } else if (
      (jugador2 === "piedra" && jugador1 === "tijeras") 
      (jugador2 === "tijeras" && jugador1 === "papel") 
      (jugador2 === "papel" && jugador1 === "piedra")
    ) {
      return "¡Jugador 2 ha ganado!";
    } else {
      return "¡Alguien ha hecho trampa!";
    }
  }
  
  const jugador1 = prompt("Jugador 1, ingresa piedra, papel o tijeras:").trim()
  const jugador2 = prompt("Jugador 2, ingresa piedra, papel o tijeras:").trim()
  
  const resultado = jugarPiedraPapelTijeras(jugador1, jugador2)
  console.log(resultado)



// ejercicio 11

function colores(color) {
    let mensaje = ""
    switch (color) {
      case "negro":
      case "blanco":
        mensaje = "falta de color"
        break;
      case "verde":
        mensaje = "el color de la naturaleza"
        break;
      case "azul":
        mensaje = "el color del agua"
        break;
      case "amarillo":
        mensaje = "el color del sol"
        break;
      case "rojo":
        mensaje = "el color del fuego"
        break;
      case "marron":
        mensaje = "el color de la tierra"
        break;
      default:
        mensaje = "Excelente elección, no lo teníamos pensado."
        break;
    }
    return mensaje
  }
  
  console.log(colores("negro"))



// ejercicio 12


function realizarOperacion(valor1, valor2, operacion) {
    let resultado;
    let mensaje = ""
  
    switch (operacion) {
      case "suma":
        resultado = valor1 + valor2;
        mensaje =(` El resultado de la suma es: ${resultado} `)
        break;
      case "resta":
        resultado = valor1 - valor2;
        mensaje = (` El resultado de la resta es: ${resultado} `)
        break;
      case "multiplicacion":
        resultado = valor1 * valor2;
        mensaje = (` El resultado de la multiplicacion es: ${resultado} `)
        break;
      case "division":
        if (valor2 !== 0) {
          resultado = valor1 / valor2;
          mensaje = (` El resultado de la division es: ${resultado} `)
        } else {
          mensaje = "ERROR: No se puede dividir por 0."
        }
        break;
      default:
        mensaje = "Operación no válida."
        break;
    }
  
    return mensaje
  }
  
  const valor1 = parseFloat(prompt("Ingresa el primer valor:"))
  const valor2 = parseFloat(prompt("Ingresa el segundo valor:"))
  const operacion = prompt("Ingresa la operación (suma, resta, multiplicacion, division):")
  
  const mensajeResultado = realizarOperacion(valor1, valor2, operacion)
  console.log(mensajeResultado)


// ejercicio 13

function obtenerDatos(){
    let nombre = prompt("ingrese su nombre:")
    let apellido = prompt("ingrese su apellido:")
    let documento = prompt("ingrese su numero de documento:")
    let fechaNacimiento = prompt("ingrese su fecha de nacimiento:")

    let datos = {
        nombre,
        apellido,
        documento,
        fechaNacimiento,
    }
    return datos
}

function confirmar(datos){
    console.table(datos)
    let confirmacion = confirm("son los datos correctos?")

    return confirmacion
}

function principal(){
    let datosDNI = obtenerDatos()
    let confirmacion = confirmar(datosDNI)
    if (confirmacion){
        let dni={
            ...datosDNI
        }
        console.log("registro exitoso")
        console.table(dni)
    } else{
        console.log("vuelva a intertarlo en un mes")
    }
}
principal()



