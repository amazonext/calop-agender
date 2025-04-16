import * as SQLite from 'expo-sqlite';

export default async function createTable() {
    try {
        const db = await SQLite.openDatabaseAsync("./db/my-db.db");

        const result = await db.getAllAsync(`
            SELECT name FROM sqlite_master
            WHERE type='table' AND name='schedules';
        `);

        if (result.length > 0) {
            console.log("Tabela 'schedules' já existe. Nenhuma ação foi tomada.");
        } else {
            await db.execAsync(`
                CREATE TABLE schedules (
                    id INTEGER PRIMARY KEY NOT NULL,
                    procedure TEXT NOT NULL,
                    hour TEXT NOT NULL,
                    value INTEGER NOT NULL
                );
            `);
            console.log("Tabela 'schedules' foi criada com sucesso!");
        }

        return db;
    } catch (error) {
        console.error("Erro ao verificar/criar tabela: ", error);
    }
}