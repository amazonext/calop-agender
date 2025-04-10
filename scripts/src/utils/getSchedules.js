import * as SQLite from 'expo-sqlite';
import createTable from './createTable';

export default function getSchedules() {
    // código...
    try {
        createTable();
    } catch (error) {

    }
}