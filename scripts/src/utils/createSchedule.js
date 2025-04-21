import createTable from './createTable';

export default function createSchedule(procedure, hour, value) {
    try {
        const db = createTable();

        db.execSync(
            "INSERT INTO schedules (procedure, hour, value) VALUES (?, ?, ?)",
            [procedure, hour, value]
        );

        console.log("Agendamento criado com sucesso!");
    } catch (error) {
        console.error("Erro ao criar agendamento: ", error);
    }
}
