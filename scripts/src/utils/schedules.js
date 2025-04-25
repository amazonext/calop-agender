import { createTable, deleteRow, insertRow, selectAll, updateRow } from "../helpers/db";

function createTableSchedules() {
    createTable('schedules', `
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        procedure TEXT NOT NULL,
        value REAL NOT NULL,
        detailing TEXT,
        profissionalName TEXT NOT NULL
    `);
}

function createSchedule(schedule) {
    createTableSchedules();

    insertRow('schedules', schedule);
}

function getAllSchedules() {
    return selectAll('schedules');
}

function editSchedule(id, schedule) {
    updateRow('schedule', id, schedule);
}

function deleteSchedule(id) {
    deleteRow('schedule', id);
}

export { createSchedule, getAllSchedules, editSchedule, deleteSchedule };