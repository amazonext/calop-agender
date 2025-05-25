import { createTable, insertRow, selectAll, updateRow } from "../helpers/db";

function createTableUserInfos() {
    createTable('user_infos', `
        name TEXT NOT NULL,
        enterprise_name TEXT NOT NULL,
        image_uri TEXT
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