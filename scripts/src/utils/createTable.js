import * as SQLite from 'expo-sqlite';

export default function createTable() {
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

            console.log("Tabela criada com sucesso!");
        }

        return db;
    } catch (error) {
        console.error("Erro ao verificar/criar tabela: ", error);
    }
}