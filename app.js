let ferrari = "Le Clerc"
let redbull = "Verstappen"
let redbull1 = "Checo Pérez"
let continente1 = "Asia"
let continente2= "Europa"

let bienvenida = alert("Bienvenido al calendario 2022 de F1")

function pilotos(){
    let piloto=prompt(`
Por favor ingrese su piloto favorito sobre el que desee informarse, segun corresponda el número:
1. Verstappen
2. Sergio Pérez
3. Hamilton
4. Sainz
`)

switch (piloto) {

    case "1":
    alert("Es holandes")
    break;

    case "2":
    alert("Es mexicano")
    break;

    case "3":
    alert("Es inglés")
    break;

    case "4":
    alert("Es espaniol")
    break;    

    default:
    alert("No se reconocio el numero ingresado")   
    break;
   
}    
}
pilotos()
 
let entrada=prompt(`
Por favor ingrese el circuito sobre el que desee informarse,
segun corresponda el número:
1. Las Vegas
2. Bahrein
3. Barcelona
4. Mónaco
5. Baku
`)

    switch (entrada) {

    case "1":
    alert("Este circuito se correrá en 2023")
    break;

    case "2":
    alert("Este circuito se corrió en " + continente1 + " y el ganador fue " + ferrari)
    break;

    case "3":
    alert("Este circuito se corrió en " + continente2 + " y el ganador fue " + redbull)
    break;

    case "4":
    alert("Este circuito se corrió en " + continente2 + " y el ganador fue " + redbull1)
    break;    

    case "5":
    alert("Este circuito se correra en " + continente2 + " el dia 12 de Junio de 2022") 
    break;   

    default:
    alert("Todavía no se corrió, aún no tengo la información de cuando se correrá")   
    break 
    
}    

alert("Espero que te haya gustado, gracias por participar")
 

  
