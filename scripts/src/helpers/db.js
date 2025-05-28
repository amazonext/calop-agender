import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync("./db/my-db.db");

// execução genérica sem retorno
function exec(sql, params = []) {
    return db.execSync(sql, params);
}

// query genérica com retorno
function query(sql, params = []) {
    return db.getAllSync(sql, params);
}

// cria uma tabela se não existir
function createTable(tableName, columnsDefinition) {
    exec(`CREATE TABLE IF NOT EXISTS ${tableName} (${columnsDefinition})`);
}

// remove uma tabela do banco de dados
function dropTable(tableName) {
    exec(`DROP TABLE IF EXISTS ${tableName}`);
}

// seleciona todas as linhas
function selectAll(tableName) {
    return query(`SELECT * FROM ${tableName}`);
}

// seleciona linhas com filtro
function selectWhere(tableName, column, value) {
    const sql = `SELECT * FROM ${tableName} WHERE ${column} LIKE ?`;
    return query(sql, [`%${value}%`]);
}

// insere um objeto
function insertRow(tableName, dataObj) {
    const cols = Object.keys(dataObj);
    const placeholders = cols.map(() => '?').join(', ');

    // aplica o trim apenas em valores do tipo string
    const values = cols.map(col => {
        const value = dataObj[col];
        return typeof value === 'string' ? value.trim() : value;
    });

    const sql = `INSERT INTO ${tableName} (${cols.join(', ')}) VALUES (${placeholders})`;
    query(sql, values);
}

// atualiza um registro pelo seu id
function updateRow(tableName, id, dataObj) {
    const cols = Object.keys(dataObj);
    const assignments = cols.map(col => `${col} = ?`).join(', ');
    const values = cols.map(col => dataObj[col]);
    const sql = `UPDATE ${tableName} SET ${assignments} WHERE id = ?`;
    exec(sql, [...values, id]);
}

// deleta um registro pelo seu id
function deleteRow(tableName, id) {
    exec(`DELETE FROM ${tableName} WHERE id = ?`, [id]);
}

export { createTable, dropTable, selectAll, insertRow, updateRow, deleteRow, query, selectWhere };