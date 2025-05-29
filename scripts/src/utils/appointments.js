import { useEffect, useState } from "react";
import { getItemFromStorage, saveToStorage } from "./storage";

async function getAppointments() {
    return await getItemFromStorage('appointments');
}

async function addAppointment(data, hour, model) {
    const appointments = await getAppointments();

    const newAppointment = {
        model,
        hour
    };

    if (!appointments[data]) appointments[data] = [newAppointment];
    else appointments[data].push(newAppointment);

    await saveToStorage('appointments', appointments);
}

function useAppointments() {
    const [appointment, setAppointment] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const appointments = await getAppointments();
            setAppointment(appointments);
        }

        fetchData();
    }, []);

    return appointment;
}

export { getAppointments, addAppointment, useAppointments };