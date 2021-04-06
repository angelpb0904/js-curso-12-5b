

const description = {
    demand: true, // Opcion obligatoria
    alias: 'd', // -
    desc: 'Descripcion de la tarea a realizar'
}

const title = {
    demand: true, // Opcion obligatoria
    alias: 't', // -
    desc: 'Titulo de la tarea a realizar - unico'
}

const completed = {
    alias: 'c',
    default: true, // Por default por su valor es true
    desc: 'Marca como completada la tarea'
}
const erased = {
    alias: 'e',
    default: true, // Por default por su valor es true
    desc: 'Borrar la tarea'
}

// Esta bandera sera obligatoria para el comando create.
const optionsCreate = {
    description,
    title
}

const optionsUpdate = {
    title,
    completed
}
const optionsErase = {
    title,
    erased
}


module.exports = {
    optionsCreate,
    optionsUpdate,
    optionsErase
}