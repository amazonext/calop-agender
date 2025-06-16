import { createTable, deleteRow, insertRow, selectAll, updateRow } from "../helpers/db";

function createTableUserInfos() {
    createTable('user_infos', `
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        enterprise_name TEXT NOT NULL
    `);
}

function addUserInfos(userInfos) {
    createTableUserInfos();

    const existingUsers = selectAll('user_infos');

    deleteRow('user_infos', 1);
    if (existingUsers.length === 0) insertRow('user_infos', userInfos);
}

function editUserInfos(userInfos) {
    updateRow('user_infos', userInfos, { id: 1});
}

function getUserInfos() {
    const results = selectAll('user_infos');
    return results[0];
}

export { addUserInfos, editUserInfos, getUserInfos };