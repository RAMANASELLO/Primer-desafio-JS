let ferrari = "Le Clerc"

let redbull = "Verstappen"

let redbull1 = "Checo Pérez"

let continente1 = "Asia"

let continente2= "Europa"


let bienvenida = alert("Bienvenido al calendario 2022 de F1")

let entrada = prompt("Intruduzca un circuito de F1")

if (entrada !== ("Buenos Aires") && ("Socchi")) {

alert ("Ok, circuito reconocido")  
   
   
let entrada1=prompt("Por favor ingrese el circuito sobre el que desee informarse")

    switch (entrada1) {

    case "Las Vegas":

    alert("Este circuito se correrá en 2023")
    break;

    case "Bahrein":

    alert("Este circuito se corrió en " + continente1 + " y el ganador fue " + ferrari)
    break;

    case "Barcelona":
    alert("Este circuito se corrió en " + continente2 + " y el ganador fue " + redbull)
    break;

    case "Monaco":
    alert("Este circuito se corrió en " + continente2 + " y el ganador fue " + redbull1)
    break;    

    case "Baku":
    alert("Este circuito se correra en " + continente2 + " el dia 12 de Junio de 2022")    

    default:
    alert("Todavía no se corrió, aún no tengo la información de cuando se correrá")   
    break 
    }
}    

if (entrada===("Buenos Aires" && "Socchi")) {
alert ("Este circuito ya no esta en el calendario") 
}

alert("Espero que te haya gustado, gracias por participar")
 

  
