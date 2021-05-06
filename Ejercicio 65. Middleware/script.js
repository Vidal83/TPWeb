/*
MIDDLEWARE:  es una forma de filtrar una solicitud y una respuesta en una aplicación. Añade una pequeña capa
  entre el cliente y la aplicación ( através de una función). Nos ayuda a generar un código más sencillo de mantener.
  Ejemplos de Middleware:
  * Limpiar las etiquetas HTML añadiendo sangrias y volviendo a dar formato al contenido
  * Notificaciones de errores y excepciones
  * Código que monitoriza el rendimiento de la aplicación
*/

// 1- SE NECESITA el módulo "connect" para hacer un Middleware --> INstalarlo !!!
// ESTO ES UN TEXTO DE PRUEBA PARA EL COMMIT DE GITHUB.

//Y esto es el segundo texto de prueba para el Commit en Github.

var connect = require("connect"),
  http = require("http");
/*
  Arrancamos a través de connect
*/
var app = connect().use(diezaseis).use(meses).use(verano).use(hola);
// CONTROL de ACCESO con un Middleware : solución muy segura, eliminamos el control de acceso del propio código en
// en si ( la lógica ) y lo ponemos en el Middleware, ANTES de iniciar la lógica de la aplicación ( osea el código en si)
// Función MIDDLEWARE; SIEMPRE debe de tener la sintaxis con "next"
function diezaseis(req, res, next) {
  var hora = new Date().getHours();
  if (hora < 10 || hora > 18) {
    res.writeHead(503, { "Content-Type": "text/plain" });
    res.end("Sitio cerrado, vuelve entre las 10:00 y las 18:00");
  } else {
    next();
  }
}
function meses(req, res, next) {
  var mes = new Date().getDay();
  console.log(mes);
  if (mes < 12 || mes > 22) {
    res.writeHead(503, { "Content-Type": "text/plain" });
    res.end("Vuelve entre los dias 5 y 22 de cada mes");
  } else {
    next();
  }
}
function verano(req, res, next) {
  var veranos = new Date().getMonth();
  if (veranos != 5 || veranos != 6 || veranos != 7) {
    res.writeHead(503, { "Content-Type": "text/plain" });
    res.end("Solo abrimos los meses de verano");
  } else {
    next();
  }
}
function hola(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bienvenido, puedes pasar");
}
http.Server(app).listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
