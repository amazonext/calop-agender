import { createTable, insertRow, updateRow } from "../helpers/db";

function createTableUserInfos() {
    createTable('user_infos', `
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        username TEXT NOT NULL,
        enterprise_name TEXT NOT NULL
    `);
}

function addUserInfos(userInfos) {
    createTableUserInfos();

    insertRow('user_infos', userInfos);
}

function editUserInfos(userInfos) {
    updateRow('user_infos', userInfos);
}

function getUserInfos() {
    return selectAll('user_infos')[0];
}

export { addUserInfos, editUserInfos, getUserInfos };