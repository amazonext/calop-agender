import * as SQLite from 'expo-sqlite';
import createTable from './createTable';

export default function deleteSchedule() {
    // código...
    try {
        createTable();
    } catch (error) {

    }
}