import { useState, useEffect, useCallback } from 'react';
import { selectAll } from '../helpers/db';

export function useSelectAll (tableName) {
    const [rows, setRows] = useState([]);

    const fetchRows = useCallback(() => {
        try {
            const result = selectAll(tableName);
            setRows(result);
        } catch (error) {
            console.error(`Erro ao selecionar dados da tabela ${tableName}: `, error);
        }
    }, [tableName]);

    useEffect(() => {
        fetchRows();
    }, [fetchRows]);

    return [rows, fetchRows];
}