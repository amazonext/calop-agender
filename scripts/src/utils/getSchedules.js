import createTable from './createTable';

export default async function getSchedules() {
    try {
        const db = createTable();

        const result = await db.getAllAsync("SELECT * FROM schedules;");

        return result;
    } catch (error) {
        console.error("Erro ao selecionar os itens da tabela: ", error);
    }
}