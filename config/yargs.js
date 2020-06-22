const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer que desea borrar",
};

const completado = {
    demand: false,
    alias: "c",
    default: true,
};

const argv = require("yargs")
    .command("crear", "Crea una tarea por hacer", { descripcion })
    .command("listar", "Imprime las tareas por hacer", {})
    .command("actualizar", "Actualiza una tarea por hacer", { descripcion, completado })
    .command("borrar", "Borra una tarea por hacer", { descripcion })
    .help().argv;

module.exports = {
    argv
};