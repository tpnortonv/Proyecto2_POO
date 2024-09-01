# Sistema de Encuestas en JavaScript

## Descripción

Este código en JavaScript define una clase llamada `Encuesta` para gestionar encuestas de manera sencilla. La clase permite agregar opciones, registrar votos y mostrar los resultados de la encuesta. Está diseñado para ser utilizado en aplicaciones donde se necesiten encuestas interactivas y fáciles de implementar.

## Funcionalidades

1. **Creación de Encuesta**: Inicializa una encuesta con un título y un conjunto vacío de opciones.
2. **Agregar Opciones**: Permite añadir opciones a la encuesta, cada una iniciando con un conteo de votos en 0.
3. **Registrar Votos**:
   - Incrementa el conteo de votos de una opción específica si esta existe.
   - Maneja errores en caso de que la opción no sea válida.
4. **Mostrar Resultados**: Muestra en la consola los resultados de la encuesta, detallando el número de votos para cada opción.

## Instrucciones de Ejecución

1. **Definir la Clase**:
   - Copia el código de la clase `Encuesta` en un archivo JavaScript (.js).
2. **Crear una Instancia**:
   - Inicializa una nueva encuesta con un título específico.
3. **Agregar Opciones**:
   - Usa el método `agregarOpcion` para añadir opciones a la encuesta.
4. **Registrar Votos**:
   - Usa el método `votar` para registrar votos para las opciones disponibles.
5. **Mostrar Resultados**:
   - Usa el método `mostrarResultados` para imprimir los resultados en la consola.

## Código

```javascript
class Encuesta { // Definimos una nueva clase llamada Encuesta.
    
    constructor(titulo) { // Solo definimos 'titulo' de la encuesta dentro del constructor porque 'opciones' viene siendo un objeto vacío.
        this.titulo = titulo;
        this.opciones = {}; // Inicializamos la propiedad 'opciones' como un objeto vacío, este objeto almacenará las opciones de la encuesta y los respectivos conteos de votos.
    }
    
    agregarOpcion(opcion) {  // Método para agregar una nueva opción a la encuesta.
        this.opciones[opcion] = 0; // Añadimos una nueva propiedad al objeto 'opciones' con el nombre de la opción, el valor inicial de cada opción es 0, aún no ha recibido votos.
    }
    
    votar(opcion) { // Método para registrar un voto para una opción específica.
        if (this.opciones[opcion] !== undefined) { // Comprobamos si la opción existe en el objeto 'opciones', tiene que ser !== undefined porque la opción la declaramos en agregarOpcion.
            this.opciones[opcion]++; // Si la opción existe, incrementamos su valor en 1 para registrar un nuevo voto.
        } else {
            console.log('Opción no válida.'); // Si la opción no existe en el objeto 'opciones', mostramos el mensaje en la consola.
        }
    }
    
    mostrarResultados() { // Método para mostrar los resultados de la encuesta.
        console.log('Resultados de la encuesta ' + this.titulo + ':');
        for (let opcion in this.opciones) { // Iteramos sobre cada propiedad 'opción' del objeto 'opciones'.
            console.log(opcion + ': ' + this.opciones[opcion] + ' votos.'); // Imprimimos el nombre de la opción y el número de votos que ha recibido.
        }
    }
}

// Creamos una nueva instancia de la clase Encuesta con el título especificado.
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

// Imprimimos los resultados de la encuesta.
encuesta1.mostrarResultados();
