import { createTable, deleteRow, insertRow, selectAll, updateRow } from "../helpers/db";

function createTableSchedulings() {
    createTable('scheduling_models', `
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        description TEXT NOT NULL,
        value REAL NOT NULL,
        detailing TEXT,
        profissionalName TEXT NOT NULL
    `);
}

function createScheduling(scheduling) {
    createTableSchedulings();

    insertRow('scheduling_models', scheduling);
}

function getAllSchedulings() {
    return selectAll('scheduling_models');
}

function editScheduling(id, scheduling) {
    updateRow('scheduling_models', id, scheduling);
}

function deleteScheduling(id) {
    deleteRow('scheduling_models', id);
}

export { createScheduling, getAllSchedulings, editScheduling, deleteScheduling };