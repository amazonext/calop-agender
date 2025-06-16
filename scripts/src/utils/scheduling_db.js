import { createTable, deleteRow, insertRow, selectAll, updateRow, query, selectWhere } from "../helpers/db";

function createTableSchedulings() {
    createTable('scheduling_models', `
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        procedure TEXT NOT NULL,
        price REAL NOT NULL,
        detailing TEXT,
        profissional_name TEXT NOT NULL,
        key_identifier INTEGER UNIQUE
    `);
}

// função para checar se o keyIdentifier já existe
function checkKeyIdentifier(randomKey, callback, tryGenerate) {
    try {
        const rows = query(
            'SELECT 1 FROM scheduling_models WHERE key_identifier = ? LIMIT 1',
            [randomKey]
        );

        if (rows.length === 0) callback(randomKey);
        else tryGenerate();

    } catch (error) {
        console.error('Erro ao verificar keyIdentifier:', error);
    }
}

// função para gerar um keyIdentifier único (usando recursão)
function generateUniqueKeyIdentifier(callback) {
    const randomKey = Math.floor(Math.random() * 1000000);

    function tryGenerate() {
        checkKeyIdentifier(randomKey, callback, () => {
            generateUniqueKeyIdentifier(callback);
        });
    }

    tryGenerate();
}

function createProcedure(scheduling) {
    createTableSchedulings();

    generateUniqueKeyIdentifier(key_identifier => {
        const newScheduling = {
            ...scheduling,
            key_identifier
        };

        insertRow('scheduling_models', newScheduling);
    });
}

function getAllProcedures() {
    return selectAll('scheduling_models');
}

function getSelectedProcedure(procedure) {
    selectWhere('scheduling_models', 'description', procedure);
}

function editProcedure(scheduling, identifier) {
    const validColumns = ['procedure', 'price', 'detailing', 'profissional_name', 'key_identifier', 'id'];
    const filteredScheduling = {};
    for (const key in scheduling) {
        if (validColumns.includes(key)) filteredScheduling[key] = scheduling[key];
    }
    updateRow('scheduling_models', filteredScheduling, { key_identifier: identifier });
}

function deleteProcedure(key_identifier) {
    deleteRow('scheduling_models', 'key_identifier', key_identifier);
}

export { createProcedure, getAllProcedures, editProcedure, deleteProcedure, getSelectedProcedure };