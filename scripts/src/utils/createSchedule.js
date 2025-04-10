import * as SQLite from 'expo-sqlite';
import createTable from './createTable';

export default function createSchedule() {
    // código...
    try {
        createTable();
    } catch (error) {

    }
}