import createTable from './createTable';

export default function deleteSchedule(id) {
    try {
        const db = createTable();

        db.execSync(
            "DELETE FROM schedules WHERE id = ?",
            [id]
        );

        console.log("Agendamento deletado com sucesso!");
    } catch (error) {
        console.error("Erro ao deletar agendamento: ", error);
    }
}
