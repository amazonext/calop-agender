import * as SQLite from 'expo-sqlite';
import createTable from './createTable';

export default function ediSchedule() {
    // código...
    try {
        createTable();
    } catch (error) {

    }
}
