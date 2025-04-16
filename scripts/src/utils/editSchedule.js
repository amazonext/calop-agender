import createTable from './createTable';

export default async function ediSchedule(id, procediments, hour, value) {
    try {
        const db = await createTable();

        await db.runAsync(
            `UPDATE schedules
             SET procediments = ?, 
             hour = ?, 
             value = ? 
             WHERE id = ?`,
            [procediments, hour, value, id]
        );

        console.log("Agendamento enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar agendamento: ", error);
    }
}
