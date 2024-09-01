class Encuesta { // Definimos una nueva clase llamada Encuesta.
    
    constructor(titulo) { // Solo definimos 'titulo' de la encuesta dentro del constructor porque 'opciones' viene siendo un objeto vacío.
        this.titulo = titulo;
        this.opciones = {}; // Inicializamos la propiedad 'opciones' como un objeto vacío, este objeto almacenará las opciones de la encuesta y el respectivos conteos de votos.
    }
    
    agregarOpcion(opcion) {  // Método para agregar una nueva opción a la encuesta.
        this.opciones[opcion] = 0; // Añadimos una nueva propiedad al objeto 'opciones' con el nombre de la opción, el valor inicial de cada opción es 0, aún no ha recibido votos.
    }
    
    votar(opcion) { // Método para registrar un voto para una opción específica.
        if (this.opciones[opcion] !== undefined) { // Comprobamos si la opción existe en el objeto 'opciones', tiene que ser !== undefined porque la opción la declaramos en agregarOpcion.
            this.opciones[opcion]++; //Si la opción existe, incrementamos su valor en 1 para registrar un nuevo voto
        } else {
            console.log('Opción no válida.'); // Si la opción no existe en el objeto 'opciones', mostramos el mensaje en la consola.
        }
    }
    
    mostrarResultados() { // Método para mostrar los resultados de la encuesta
        console.log('Resultados de la encuesta ' + this.titulo + ':');
        for (let opcion in this.opciones) { // Iteramos sobre cada propiedad 'opción' del objeto 'opciones'
            console.log(opcion + ': ' + this.opciones[opcion] + ' votos.'); // Imprimimos el nombre de la opción y el número de votos que ha recibido
        }
    }
}

// Creamos una nueva instancia de la clase Encuesta con el título especificado
const encuesta1 = new Encuesta('¿Quién es el mejor jugador de la historia?');

// Agregamos varias opciones a la encuesta.
encuesta1.agregarOpcion('Messi');
encuesta1.agregarOpcion('Ronaldo');
encuesta1.agregarOpcion('Maradona');
encuesta1.agregarOpcion('Pelé');

// Registramos votos para las diferentes opciones.
encuesta1.votar('Messi'); // Un voto para Messi.
encuesta1.votar('Messi');     
encuesta1.votar('Messi');     
encuesta1.votar('Ronaldo');   
encuesta1.votar('Ronaldo');   
encuesta1.votar('Maradona');  
encuesta1.votar('Maradona');  
encuesta1.votar('Pelé');      

//Imprimimos los resultados de la encuesta.
encuesta1.mostrarResultados();
