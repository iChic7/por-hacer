const fs = require('fs');
const { boolean } = require('yargs');

let listaPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listaPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            return (err);
    });
}

const cargarDB = () => {

    try {
        listaPorHacer = require("../db/data.json");
    } catch (error) {
        listaPorHacer = [];
    }
}

const getListado = () => {

    try {
        listaPorHacer = require("../db/data.json");
    } catch (error) {
        listaPorHacer = [];
    }

    return listaPorHacer;
}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listaPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listaPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};

const borrar = (descripcion) => {
    cargarDB();

    let index = listaPorHacer.findIndex((tarea) => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listaPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};