import { getFromStorage } from "./storage";
import { getAppointments } from "./appointments";
import { drawRandomNumber } from "../helpers/drawRandomNumber";

function getMessages() {
    const messages = getFromStorage('messages');

    return messages;
}

// [ ]: configurar o busyEmployee
async function getConditionalsMessages() {
    const appointments = getAppointments();
    const appointmentsLength = appointments.length;
    const messagesObject = await getMessages();

    if (appointmentsLength > 10) return messagesObject.conditionals.busyDay[drawRandomNumber(0, 4)];
}

async function getWeekDayMessage(weekIndex) {
    const messagesObject = await getMessages();
    const weekDayMessage = messagesObject.week[weekIndex][drawRandomNumber(0, 4)];

    return weekDayMessage;
}

async function getTurnMessage(currentTurn) {
    const messagesObject = await getMessages();
    const turnMessage = messagesObject.turn[currentTurn][drawRandomNumber(0, 4)];

    return turnMessage;
}

export { getConditionalsMessages, getWeekDayMessage, getTurnMessage };