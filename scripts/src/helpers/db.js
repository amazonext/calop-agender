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
function updateRow(tableName, dataObj, whereObj) {
    const setCols = Object.keys(dataObj);
    const setAssignments = setCols.map(col => `${col} = ?`).join(', ');
    const setValues = setCols.map(col => dataObj[col]);

    const whereCols = Object.keys(whereObj);
    const whereConditions = whereCols.map(col => `${col} = ?`).join(' AND ');
    const whereValues = whereCols.map(col => whereObj[col]);

    const sql = `UPDATE ${tableName} SET ${setAssignments} WHERE ${whereConditions}`;
    const values = [...setValues, ...whereValues];

    query(sql, values);
}

// deleta um registro pelo seu id
function deleteRow(tableName, columnName, value) {
    query(`DELETE FROM ${tableName} WHERE ${columnName} = ?`, [value]);
}

export { createTable, dropTable, selectAll, insertRow, updateRow, deleteRow, query, selectWhere };