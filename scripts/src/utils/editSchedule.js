import createTable from './createTable';

export default function editSchedule(id, procedure, hour, value) {
    try {
        const db = createTable();

                `UPDATE schedules
                SET procedure = ?,
                hour = ?,
                value = ?
                WHERE id = ?`,
        db.execSync(
            [procedure, hour, value, id]
        );

        console.log("Agendamento enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar agendamento: ", error);
    }
}
