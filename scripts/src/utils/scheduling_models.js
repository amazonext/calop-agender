import { createTable, deleteRow, insertRow, selectAll, updateRow } from "../helpers/db";

function createTableSchedules() {
    createTable('scheduling_models', `
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        description TEXT NOT NULL,
        value REAL NOT NULL,
        detailing TEXT,
        profissionalName TEXT NOT NULL
    `);
}

function createSchedule(schedule) {
    createTableSchedules();

    insertRow('scheduling_models', schedule);
}

function getAllSchedules() {
    return selectAll('scheduling_models');
}

function editSchedule(id, schedule) {
    updateRow('scheduling_models', id, schedule);
}

function deleteSchedule(id) {
    deleteRow('scheduling_models', id);
}

export { createSchedule, getAllSchedules, editSchedule, deleteSchedule };