import * as SQLite from 'expo-sqlite';

function createTable() {
    try {
        const db = SQLite.openDatabaseSync("./db/my-db.db");

        const result = db.getAllSync(`
            SELECT name FROM sqlite_master
            WHERE type='table' AND name='schedules';
        `);

        if (result.length > 0) {
            console.log("Tabela 'schedules' já existe. Nenhuma ação foi tomada.");
        } else {
            db.execSync(`
                CREATE TABLE schedules (
                    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                    procedure TEXT NOT NULL,
                    hour TEXT NOT NULL,
                    value INTEGER NOT NULL
                )
            `);

            db.execSync(`
                CREATE TABLE user (
                    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                    name TEXT NOT NULL,
                    enterprise_name TEXT NOT NULL
                )
            `);

            console.log("Tabelas criadas com sucesso!");
        }

        return db;
    } catch (error) {
        console.error("Erro ao verificar/criar tabela: ", error);
    }
}

function createSchedule() {
    try {
        const db = createTable();

        db.execSync(
            "INSERT INTO schedules (procedure, hour, value) VALUES (?, ?, ?)",
            [procedure, hour, value]
        );

        console.log("Agendamento criado com sucesso!");
    } catch (error) {
        console.error("Erro ao criar agendamento: ", error);
    }
}

function getSchedules() {
    try {
        const db = createTable();

        const results = db.getAllSync("SELECT * FROM schedules");

        return results;
    } catch (error) {
        console.error("Erro ao selecionar os itens da tabela: ", error);
    }
}

function editSchedule(id, procedure, hour, value) {
    try {
        const db = createTable();

        db.execSync(
            "UPDATE schedules SET procedure = ?, hour = ?, value = ? WHERE id = ?",
            [procedure, hour, value, id]
        );

        console.log("Agendamento atualizado com sucesso!");
    } catch (error) {
        console.error("Erro ao atualizar agendamento: ", error);
    }
}

function deleteSchedule(id) {
    try {
        const db = createTable();

        db.execSync(
            "DELETE FROM schedules WHERE id = ?",
            [id]
        );

        console.log("Agendamento deletado com sucesso!");
    } catch (error) {
        console.error("Erro ao deletar agendamento: ", error);
    }
}

function updateUsername(newUsername) {
    try {
        const db = createTable();

        db.execSync("UPDATE user SET name = ?", [newUsername]);
    } catch (error) {
        console.error("Erro ao atualizar o nome de usuário: " + error);
    }
}

export { createSchedule, getSchedules, editSchedule, deleteSchedule, updateUsername }