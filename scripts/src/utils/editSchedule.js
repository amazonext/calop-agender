import createTable from './createTable';

export default async function editSchedule(id, procedure, hour, value) {
    try {
        const db = await createTable();

        await db.runAsync(
                `UPDATE schedules
                SET procedure = ?,
                hour = ?,
                value = ?
                WHERE id = ?`,
            [procedure, hour, value, id]
        );

        console.log("Agendamento enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar agendamento: ", error);
    }
}
