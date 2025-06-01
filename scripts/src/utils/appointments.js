import { useEffect, useState } from "react";
import { getItemFromStorage, saveToStorage } from "./storage";

async function getAppointments() {
    const data = await getItemFromStorage('appointments');

    return data || {};
}

async function addAppointment(date, hour, model) {
    let appointments = await getAppointments();
    if (!appointments) appointments = {};

    const [day, month] = date.split('_');

    const newAppointment = { model, hour };

    if (!appointments[month]) appointments[month] = {};
    if (!appointments[month][day]) appointments[month][day] = [];

    appointments[month][day].push(newAppointment);

    await saveToStorage('appointments', appointments);
}

async function getAppointmentsWithDate(date) {
    const appointments = await getAppointments();
    const [day, month] = date.split('_');

    // console.log(appointments[month]);
    // console.log(appointments[month][day]);
    // return {
    //     today: appointments[month][day],
    //     month: appointments[month]
    // };
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

export { getAppointments, addAppointment, useAppointments, getAppointmentsWithDate };