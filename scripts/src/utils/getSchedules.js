import createTable from './createTable';

export default function getSchedules() {
    try {
        const db = createTable();

        const results = db.getAllSync("SELECT * FROM schedules");

        return results;
    } catch (error) {
        console.error("Erro ao selecionar os itens da tabela: ", error);
    }
}