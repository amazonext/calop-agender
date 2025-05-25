import { getFromStorage, saveToStorage } from "./storage";

async function getAppointments() {
    const appointments = await getFromStorage('appointments');

    return appointments
}

function addAppointment(appointment) { }

export { getAppointments, addAppointment };