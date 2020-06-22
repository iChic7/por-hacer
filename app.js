const argv = require("./config/yargs").argv;

const colors = require("colors");

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log("=======POR HACER=======".yellow);
            console.log(tarea.descripcion.blue);
            if (tarea.completado === true || tarea.completado === "true") {
                console.log("Estado:", "Completada".green);
            } else {
                console.log("Estado:", "Pendiente".red);
            }
        }
        console.log("=======================".yellow);
        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("comando desconocido");
        break;
}