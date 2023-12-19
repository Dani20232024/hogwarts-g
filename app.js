let hogwarts = 0;
const nombre = document.getElementById("nombre").value
const edad = document.getElementById("edad").value
const familia = document.getElementById("familia").value
const linaje = document.getElementById("linaje").value
const cualidades = document.getElementById("cualidades").value
const solucionPaso1 = document.getElementById("paso1");

const informacionPrincipal = () => {
  const nombre = document.getElementById("nombre").value
  const edad = document.getElementById("edad").value
  const familia = document.getElementById("familia").value
  const linaje = document.getElementById("linaje").value
  const cualidades = document.getElementById("cualidades").value

  hogwarts = {
    nombre: nombre,
    edad: edad,
    familia: familia,
    linaje: linaje,
    casa: "",
    patronus: "",
    cualidades: cualidades,
  };

  solucionPaso1.innerText = "Tus datos han sido guardados"

};

const clasesProfesores = () => {
  let clases = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    encantamientos: "Profesora Jackie",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
  };

  const solucionPaso2 = document.getElementById("paso2");
  solucionPaso2.innerText = `Transformaciones: ${clases.transformaciones}
  Herbologia: ${clases.herbologia}
  Encantamientos: ${clases.encantamientos}
  Animales Magicos: ${clases.animalesMagicos}
  Historia De Magia: ${clases.historiaDeMagia}`
}

const casaAsignada = () => {
  const nombre = document.getElementById("nombre").value
  const edad = document.getElementById("edad").value
  const familia = document.getElementById("familia").value
  const linaje = document.getElementById("linaje").value
  const cualidades = document.getElementById("cualidades").value
  const solucionPaso3 = document.getElementById("paso3");

  hogwarts = {
    nombre: nombre,
    edad: edad,
    familia: familia,
    linaje: linaje,
    casa: "",
    patronus: "",
    cualidades: cualidades,
  };

  if (hogwarts.cualidades.includes("Ambición") && hogwarts.cualidades.includes("Determinación") && hogwarts.cualidades.includes("Astucia") && hogwarts.linaje == "Sangre pura") {
    hogwarts.casa = "Slytherin";
    solucionPaso3.innerText = `Tu casa es ${hogwarts.casa}`
  }
  
  else if (hogwarts.cualidades.includes("Valor") && hogwarts.cualidades.includes("Fuerza") && hogwarts.cualidades.includes("Audacia")) {
    hogwarts.casa = "Gryffindor";
    solucionPaso3.innerText = `Tu casa es ${hogwarts.casa}`;
  }
  
  else if (hogwarts.cualidades.includes("Justicia") && hogwarts.cualidades.includes("Lealtad") && hogwarts.cualidades.includes("Paciencia") && hogwarts.linaje == "Mestizo" | hogwarts.linaje == "Muggle") {
    hogwarts.casa = "Hufflepuff";
    solucionPaso3.innerText = `Tu casa es ${hogwarts.casa}`;
  }
  
  else if (hogwarts.cualidades.includes("Creatividad") && hogwarts.cualidades.includes("Erudición") && hogwarts.cualidades.includes("Inteligencia")) {
    hogwarts.casa = "Ravenclaw";
    solucionPaso3.innerText = `Tu casa es ${hogwarts.casa}`;
  }
  
  else {
    hogwarts.casa = "Ninguna"
    solucionPaso3.innerText = `Tu casa es ${hogwarts.casa}`;
  }
}


const verificarBoggart = () => {
  let boggart = {
    animal: "pollo",
    color: "amarillo",
    tamaño: "enorme",
    pelo: "mucho",
    textura: "gruesa",
    transformacion: "un pollito"
  }

  const solucionPaso4 = document.getElementById("paso4");
  
  const claseTransformaciones = {
    nombre: "Profesor Kevin Slughorn",
    horario: "2:00PM - 3:45PM",
    realizarTransformacionRiddikulus: () => {
      let boggarts = document.getElementById("boggart").value
      if (boggarts == "Hay un boggart presente") {
        solucionPaso4.innerText = `Transformación ¡Riddikulus!, has hecho el encantamiento.
        El boggart es ${boggart.tamaño}, parece un ${boggart.animal} demonio, es de textura ${boggart.textura} y de color ${boggart.color}
        Lo has derrotado, la transformación se ha hecho, el boggart ahora es ${boggart.transformacion}`;
      }
      
      else {
        solucionPaso4.innerText = "No hay ningún bloggart presente";
      }
    },
  }
  
  claseTransformaciones.realizarTransformacionRiddikulus()
  
}

let animalesPosibles = 0;

const generarPatronus = () => {
  const nombre = document.getElementById("nombre").value
  const edad = document.getElementById("edad").value
  const familia = document.getElementById("familia").value
  const linaje = document.getElementById("linaje").value
  const cualidades = document.getElementById("cualidades").value
  const solucionPaso5 = document.getElementById("paso5")

  hogwarts = {
    nombre: nombre,
    edad: edad,
    familia: familia,
    linaje: linaje,
    casa: "",
    patronus: "",
    cualidades: cualidades,
  };

  const defensaContraLasArtesOscuras = {
    generarAnimalPatronus: () => {
      animalesPosibles = ["Abarimon", "Aethonan", "Araña", "Arpía", "AlizorDeWestacottus", "Sentauro", "Minotauro", "King Kong", "Bestia", "Unicornio", "Medusa", "Cíclope"];
      this.animalPatronus = animalesPosibles[Math.floor(Math.random() * animalesPosibles.length)]
      hogwarts.patronus = this.animalPatronus;
      
    }
  };
  const dementor = () => {
    solucionPaso5.innerText = "Ha aparecido un dementor!"
    
    if (!hogwarts.patronus) {
      solucionPaso5.innerText = `Dementor te ha encontrado, has sido absorbido, serás llevado a la enfermería `
    }
    
    else {
      solucionPaso5.innerText = `Tu animal Patronus es ${hogwarts.patronus}.
      Has detenido el dementor porque tienes tu animal patronus.`
    }
  }
  
  defensaContraLasArtesOscuras.generarAnimalPatronus();
  
  
  dementor();
}

const verInformacion = () => {
  const nombre = document.getElementById("nombre").value
  const edad = document.getElementById("edad").value
  const familia = document.getElementById("familia").value
  const linaje = document.getElementById("linaje").value
  const cualidades = document.getElementById("cualidades").value
  const solucionPaso6 = document.getElementById("paso6")

  hogwarts = {
    nombre: nombre,
    edad: edad,
    familia: familia,
    linaje: linaje,
    casa: "",
    patronus: "",
    cualidades: cualidades,
  };

  if (hogwarts.cualidades.includes("Ambición") && hogwarts.cualidades.includes("Determinación") && hogwarts.cualidades.includes("Astucia") && hogwarts.linaje == "Sangre pura") {
    hogwarts.casa = "Slytherin";
  }
  
  else if (hogwarts.cualidades.includes("Valor") && hogwarts.cualidades.includes("Fuerza") && hogwarts.cualidades.includes("Audacia")) {
    hogwarts.casa = "Gryffindor";
  }
  
  else if (hogwarts.cualidades.includes("Justicia") && hogwarts.cualidades.includes("Lealtad") && hogwarts.cualidades.includes("Paciencia") && hogwarts.linaje == "Mestizo" | hogwarts.linaje == "Muggle") {
    hogwarts.casa = "Hufflepuff";
  }
  
  else if (hogwarts.cualidades.includes("Creatividad") && hogwarts.cualidades.includes("Erudición") && hogwarts.cualidades.includes("Inteligencia")) {
    hogwarts.casa = "Ravenclaw";
  }
  
  else {
    hogwarts.casa = "Ninguna"
  }

  animalesPosibles = ["Abarimon", "Aethonan", "Araña", "Arpía", "AlizorDeWestacottus", "Sentauro", "Minotauro", "King Kong", "Bestia", "Unicornio", "Medusa", "Cíclope"];
  this.animalPatronus = animalesPosibles[Math.floor(Math.random() * animalesPosibles.length)]
  hogwarts.patronus = this.animalPatronus;

  solucionPaso6.innerText = `Nombre: ${nombre}
  Edad: ${edad}
  Familia: ${familia}
  Linaje: ${linaje}
  Casa: ${hogwarts.casa}
  Patrónus: ${hogwarts.patronus}
  Cualidades: ${cualidades}`;
}
  
  
  
  
  
  
  
  