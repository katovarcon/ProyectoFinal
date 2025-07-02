//ESTRUCTURA DEL ARCHIVO

// Sistema de Gestión de Biblioteca: BibliotecApp

// Paso 1: Estructura de Datos
// Creamos dos arrays para iniciar con una mini base de datos para nuestra biblioteca digital

// // a) Creamos el array de libros

const libros = [
    {
      id: 1,
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      año: 1967,
      genero: "Realismo mágico",
      disponible: true
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      año: 1949,
      genero: "Distopía",
      disponible: false
    },
    {
      id: 3,
      titulo: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      año: 1605,
      genero: "Novela clásica",
      disponible: true
    },
    {
      id: 4,
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
      año: 1813,
      genero: "Romance",
      disponible: true
    },
    {
      id: 5,
      titulo: "Harry Potter y la piedra filosofal",
      autor: "J.K. Rowling",
      año: 1997,
      genero: "Fantasía",
      disponible: false
    },
    {
      id: 6,
      titulo: "El hobbit",
      autor: "J.R.R. Tolkien",
      año: 1937,
      genero: "Fantasía épica",
      disponible: true
    },
    {
      id: 7,
      titulo: "Rayuela",
      autor: "Julio Cortázar",
      año: 1963,
      genero: "Ficción experimental",
      disponible: true
    },
    {
      id: 8,
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      año: 1953,
      genero: "Ciencia ficción",
      disponible: true
    },
    {
      id: 9,
      titulo: "Crónica de una muerte anunciada",
      autor: "Gabriel García Márquez",
      año: 1981,
      genero: "Novela corta",
      disponible: false
    },
    {
      id: 10,
      titulo: "La sombra del viento",
      autor: "Carlos Ruiz Zafón",
      año: 2001,
      genero: "Misterio",
      disponible: true
    }
  ];
  
// Listo! Hasta aquí ya tenemos nuestra primera estantería digital armada

// Paso b): Creamos el array de usuarios

const usuarios = [
  {
    id: 1,
    nombre: "Luna Martínez",
    email: "luna.martinez@hotmail.com",
    librosPrestados: [2, 5] // Tiene "1984" y "Harry Potter"
  },
  {
    id: 2,
    nombre: "Tomás García",
    email: "tomas.garcia@gmail.com",
    librosPrestados: [] // No tiene libros por ahora 
  },
  {
    id: 3,
    nombre: "Valentina López",
    email: "valentina.lopez@gmail.com",
    librosPrestados: [9] // Tiene "Crónica de una muerte anunciada"
  },
  {
    id: 4,
    nombre: "Martín Herrera",
    email: "martin.herrera@hotmail.com",
    librosPrestados: [6] // Tiene "El hobbit"
  },
  {
    id: 5,
    nombre: "Camila Torres",
    email: "camila.torres@gmail.com",
    librosPrestados: [] // Todavía no pidió ninguno 📚💤
  }
];

// Listo! Ahora también ya tenemos nuestra lista de usuarios

// Punto 2: Funciones de Gestión de Libros
// Aquí implementamos las funciones que nos permitirán gestionar los libros de nuestra biblioteca digital. 

// a) Función para agregar un libro

function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = {
      id: id,
      titulo: titulo,
      autor: autor,
      año: anio,
      genero: genero,
      disponible: true
    };
  
    libros.push(nuevoLibro);
    console.log(`📘 Libro "${titulo}" agregado con éxito.`);
  }
  
// b) Función para buscar un libro 

  function buscarLibro(criterio, valor) {
    const resultados = [];
  
    for (let i = 0; i < libros.length; i++) {
      if (libros[i][criterio].toString().toLowerCase().includes(valor.toLowerCase())) {
        resultados.push(libros[i]);
      }
    }
  
    if (resultados.length === 0) {
      console.log(`❌ No se encontraron libros con ${criterio} = "${valor}".`);
    } else {
      console.log(`🔎 Libros encontrados con ${criterio} = "${valor}":`);
      console.table(resultados);
    }
  }

// c) Función para ordenar libros por título

function ordenarLibros(criterio) {
    for (let i = 0; i < libros.length - 1; i++) {
      for (let j = 0; j < libros.length - i - 1; j++) {
        if (libros[j][criterio] > libros[j + 1][criterio]) {
          // Intercambiamos posiciones
          let temp = libros[j];
          libros[j] = libros[j + 1];
          libros[j + 1] = temp;
        }
      }
    }
  
    console.log(`📚 Libros ordenados por ${criterio}:`);
    console.table(libros);
  }

// d) Función para eliminar un libro

  function borrarLibro(id) {
    const index = libros.findIndex(libro => libro.id === id);
  
    if (index !== -1) {
      const eliminado = libros.splice(index, 1);
      console.log(`🗑️ Libro "${eliminado[0].titulo}" eliminado correctamente.`);
    } else {
      console.log(`⚠️ No se encontró ningún libro con ID ${id}.`);
    }
  }

// Paso 3: Gestión de Usuarios
// Ahora le damos vida a las y los lectores de nuestra app, con funciones como: buscar, registrar y eliminar de forma fácil y clara.

//a) Función para registar un nuevo usuario
function registrarUsuario(nombre, email) {
    const nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
  
    const nuevoUsuario = {
      id: nuevoId,
      nombre: nombre,
      email: email,
      librosPrestados: []
    };
  
    usuarios.push(nuevoUsuario);
    console.log(`✅ Usuario "${nombre}" registrado con éxito.`);
  }

// b) Función para buscar un usuario por correo electrónico

function buscarUsuario(email) {
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);
  
    if (usuarioEncontrado) {
      console.log(`🔍 Usuario encontrado:`);
      console.table(usuarioEncontrado);
      return usuarioEncontrado;
    } else {
      console.log(`❌ No se encontró ningún usuario con el email "${email}".`);
      return null;
    }
  }

// c) Función para  mostrar todos los usuarios

function mostrarTodosLosUsuarios() {
    if (usuarios.length === 0) {
      console.log("❌ No hay usuarios registrados.");
    } else {
      console.log("👥 Lista de todos los usuarios:");
      console.table(usuarios);
    }
  }
  
// d) Función para eliminar un usuario

function borrarUsuario(nombre, email) {
    const index = usuarios.findIndex(
      usuario => usuario.nombre === nombre && usuario.email === email
    );
  
    if (index !== -1) {
      const eliminado = usuarios.splice(index, 1)[0];
      console.log(`🗑️ Usuario "${eliminado.nombre}" eliminado con éxito.`);
    } else {
      console.log(`⚠️ No se encontró ningún usuario con nombre "${nombre}" y email "${email}".`);
    }
  }

// Punto 4: Gestión de Préstamos
// Ahora vamos a hacer que BibliotecApp cobre vida con préstramos y devoluciones.

// a) Función para prestar un libro 

function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
  
    if (!libro) {
      console.log(`📕 No se encontró el libro con ID ${idLibro}.`);
      return;
    }
  
    if (!usuario) {
      console.log(`👤 No se encontró el usuario con ID ${idUsuario}.`);
      return;
    }
  
    if (!libro.disponible) {
      console.log(`❌ El libro "${libro.titulo}" no está disponible actualmente.`);
      return;
    }
  
    libro.disponible = false;
    usuario.librosPrestados.push(idLibro);
  
    console.log(`✅ El libro "${libro.titulo}" fue prestado a ${usuario.nombre}.`);
  }

  // b) Función para devolver un libro

  function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
  
    if (!libro) {
      console.log(`📕 No se encontró el libro con ID ${idLibro}.`);
      return;
    }
  
    if (!usuario) {
      console.log(`👤 No se encontró el usuario con ID ${idUsuario}.`);
      return;
    }
  
    const libroIndex = usuario.librosPrestados.indexOf(idLibro);
  
    if (libroIndex === -1) {
      console.log(`⚠️ El usuario "${usuario.nombre}" no tiene el libro "${libro.titulo}".`);
      return;
    }
  
    libro.disponible = true;
    usuario.librosPrestados.splice(libroIndex, 1);
  
    console.log(`📗 El libro "${libro.titulo}" fue devuelto por ${usuario.nombre}.`);
  }

// Punto 5: Sistema de Préstamos
// Ahora toca generar un reporte completo del estado de los libros usando métodos avanzados

function generarReporteLibros() {
    if (libros.length === 0) {
      console.log("⚠️ No hay libros cargados en el sistema.");
      return;
    }
  
    // Total de libros
    const totalLibros = libros.length;
  
    // Libros prestados (disponible === false)
    const librosPrestados = libros.filter(libro => !libro.disponible);
    const cantidadPrestados = librosPrestados.length;
  
    // Libros por género usando reduce
    const librosPorGenero = libros.reduce((acc, libro) => {
      acc[libro.genero] = (acc[libro.genero] || 0) + 1;
      return acc;
    }, {});
  
    // Libro más antiguo
    const libroMasAntiguo = libros.reduce((másViejo, libro) => {
      return libro.año < másViejo.año ? libro : másViejo;
    });
  
    // Libro más nuevo
    const libroMasNuevo = libros.reduce((másNuevo, libro) => {
      return libro.año > másNuevo.año ? libro : másNuevo;
    });
  
// Mostrar el reporte
    console.log("📊 📚 Reporte de Libros – LibroManía");
    console.log("Total de libros:", totalLibros);
    console.log("Libros prestados:", cantidadPrestados);
    console.log("📘 Cantidad de libros por género:");
    console.table(librosPorGenero);
    console.log("📕 Libro más antiguo:", `${libroMasAntiguo.titulo} (${libroMasAntiguo.año})`);
    console.log("📗 Libro más nuevo:", `${libroMasNuevo.titulo} (${libroMasNuevo.año})`);
  }
  

// Paso 6: Identificación Avanzada de Libros
// Tenemos que detectar libros que contengan más de una palabra en su título 

function librosConPalabrasEnTitulo() {
    const titulosValidos = libros.filter(libro => {
      const palabras = libro.titulo.trim().split(" ");
  
// Verificamos que tenga más de una palabra
      if (palabras.length <= 1) {
        return false;
      }
  
// Verificamos que todas las palabras estén formadas solo por letras
      const todasSonLetras = palabras.every(palabra => {
        for (let i = 0; i < palabra.length; i++) {
          const caracter = palabra[i].toLowerCase();
          
          // Si el caracter no es una letra (a-z con tildes y ñ), lo rechazamos
          if (
            (caracter < "a" || caracter > "z") &&
            !"áéíóúüñ".includes(caracter)
          ) {
            return false;
          }
        }
        return true;
      });
  
      return todasSonLetras;
    });
  
    const resultados = titulosValidos.map(libro => libro.titulo);
  
// Mostrar en consola
    if (resultados.length > 0) {
      console.log("📚 Títulos válidos con más de una palabra:");
      console.table(resultados);
    } else {
      console.log("❌ No se encontraron títulos válidos.");
    }
  
    return resultados;
  }
  
// Paso 7: Cálculos Estadísticos
// Vamos a calcular el promedio de años de publicación de los libros e información importante para que el usuario pueda consultarlo.

function calcularEstadisticas() {
    if (libros.length === 0) {
      console.log("⚠️ No hay libros para calcular estadísticas.");
      return;
    }
  
    // Sacamos todos los años de los libros
    const años = libros.map(libro => libro.año);
  
    // Promedio de años
    const sumaAños = años.reduce((acum, año) => acum + año, 0);
    const promedio = Math.round(sumaAños / años.length);
  
    // Contamos cuántas veces aparece cada año
    const contadorAños = {};
    años.forEach(año => {
      contadorAños[año] = (contadorAños[año] || 0) + 1;
    });
  
    // Encontramos el año más frecuente
    let añoMasFrecuente = años[0];
    let maxFrecuencia = 0;
  
    for (const año in contadorAños) {
      if (contadorAños[año] > maxFrecuencia) {
        maxFrecuencia = contadorAños[año];
        añoMasFrecuente = año;
      }
    }
  
    // Diferencia entre el año más viejo y el más nuevo
    const añoMasAntiguo = Math.min(...años);
    const añoMasNuevo = Math.max(...años);
    const diferencia = añoMasNuevo - añoMasAntiguo;
  
    // Mostramos resultados
    console.log("📊 Estadísticas de publicación - BibliotecApp 📚");
    console.log(`🕰️ Promedio de años de publicación: ${promedio}`);
    console.log(`🎯 Año más frecuente de publicación: ${añoMasFrecuente} (se repite ${maxFrecuencia} veces)`);
    console.log(`⏳ Diferencia entre libro más antiguo y más nuevo: ${diferencia} años`);
  }

// Paso 8: Manejo de Cadenas
// Vamos a limpiar y poner todo lindo en nuestra biblioteca para que los datos estén ordenados. 

function normalizarDatos() {
    // Ordenamos los títulos y autores
    libros.forEach(libro => {
      libro.titulo = libro.titulo.toUpperCase();
      libro.autor = libro.autor.trim();
    });
  
    // Ordenamos los emails de usuarios
    usuarios.forEach(usuario => {
      usuario.email = usuario.email.toLowerCase();
    });
  
    console.log("✨ Datos ordenados correctamente.");
  }

// Paso 9: Interfaz de Usuario por Consola
// Vamos a crear un menú interactivo para que el usuario pueda elegir qué hacer con la biblioteca.

prompt = require('prompt-sync')();

function menuPrincipal() {
  let salir = false;

  while (!salir) {
    const opcion = prompt(
      "📚 Bienvenido a BibliotecApp – Menú Principal\n" +
      "Elegí una opción:\n\n" +
      "1. Agregar nuevo libro\n" +
      "2. Buscar libro\n" +
      "3. Ordenar libros\n" +
      "4. Borrar libro\n" +
      "5. Registrar usuario\n" +
      "6. Mostrar todos los usuarios\n" +
      "7. Buscar usuario\n" +
      "8. Borrar usuario\n" +
      "9. Prestar libro\n" +
      "10. Devolver libro\n" +
      "11. Generar reporte de libros\n" +
      "12. Libros con más de una palabra (solo letras)\n" +
      "13. Calcular estadísticas\n" +
      "14. Organizar datos\n" +
      "15. Salir 🚪"
    );

    switch (opcion) {
      case "1":
        const id = parseInt(prompt("📘 ID del libro:"));
        if (isNaN(id)) {
          console.log("❌ El ID debe ser un número.");
          break;
        }
        const titulo = prompt("📘 Título del libro:");
        const autor = prompt("✍️ Autor del libro:");
        const anio = parseInt(prompt("📅 Año de publicación:"));
        if (isNaN(anio)) {
          console.log("❌ El año debe ser un número.");
          break;
        }
        const genero = prompt("📚 Género del libro:");
        agregarLibro(id, titulo, autor, anio, genero);
        break;

      case "2":
        const criterioBusqueda = prompt("🔍 Buscar por 'titulo', 'autor' o 'genero':");
        const valorBusqueda = prompt(`🔍 Buscar valor en ${criterioBusqueda}:`);
        buscarLibro(criterioBusqueda, valorBusqueda);
        break;

      case "3":
        const criterioOrden = prompt("📑 Ordenar por 'titulo' o 'año':");
        ordenarLibros(criterioOrden);
        break;

      case "4":
        const idBorrar = parseInt(prompt("🗑️ Borrar ID del libro:"));
        borrarLibro(idBorrar);
        break;

      case "5":
        const nombreUsuario = prompt("👤 Nombre del usuario:");
        const emailUsuario = prompt("📧 Email del usuario:");
        registrarUsuario(nombreUsuario.trim(), emailUsuario.trim());
        break;

      case "6":
        mostrarTodosLosUsuarios();
        break;

      case "7":
        const emailBusqueda = prompt("🔍 Buscar email de usuario:");
        buscarUsuario(emailBusqueda);
        break;

      case "8":
        const nombreBorrar = prompt("🧍 Borrar nombre de usuario:");
        const emailBorrar = prompt("📧 Borrar email de usuario:");
        borrarUsuario(nombreBorrar.trim(), emailBorrar.trim());
        break;

      case "9":
        const idLibroPrestamo = parseInt(prompt("📚 ID del libro a prestar:"));
        const idUsuarioPrestamo = parseInt(prompt("👤 ID del usuario que lo toma prestado:"));
        prestarLibro(idLibroPrestamo, idUsuarioPrestamo);
        break;

      case "10":
        const idLibroDevolver = parseInt(prompt("📚 ID del libro a devolver:"));
        const idUsuarioDevolver = parseInt(prompt("👤 ID del usuario que lo devuelve:"));
        devolverLibro(idLibroDevolver, idUsuarioDevolver);
        break;

      case "11":
        generarReporteLibros();
        break;

      case "12":
        librosConPalabrasEnTitulo();
        break;

      case "13":
        calcularEstadisticas();
        break;

      case "14":
        normalizarDatos();
        break;

      case "15":
        console.log("👋 ¡Gracias por usar BibliotecApp!");
        salir = true;
        break;

      default:
        console.log("❌ Opción no válida. Intenta de nuevo.");
        break;
    }
  }
}
  menuPrincipal();

  // Y asi termina nuestra app de gestión de biblioteca digital, BibliotecApp.