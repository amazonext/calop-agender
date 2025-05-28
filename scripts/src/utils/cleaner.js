import AsyncStorage from "@react-native-async-storage/async-storage";
import { dropTable, query } from "../helpers/db";
import { removeItemFromStorage } from "./storage";

export default function cleanApp() {
    AsyncStorage.getAllKeys().then(keys => {
        keys.forEach(key => {
            removeItemFromStorage(key);
        });
    });

    query("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'").forEach(table => {
        dropTable(table.name);
    });
}