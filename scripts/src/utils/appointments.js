import { getItemFromStorage, saveToStorage } from "./storage";

async function getAppointments() {
    return await getItemFromStorage('appointments');
}

async function addAppointment(data, hour, model) {
    const appointments = await getAppointments();

    const newAppointment = {
        ...model,
        hour,
    };

    if (appointments[data]) appointments[data].push(newAppointment);
    else appointments[data] = [newAppointment];

    await saveToStorage('appointments', appointments);
}

export { getAppointments, addAppointment };