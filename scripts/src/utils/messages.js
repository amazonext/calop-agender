import { getFromStorage } from "./storage";
import { getAppointments } from "./appointments";
import { drawRandomNumber } from "../helpers/drawRandomNumber";
import { getCurrentWeekday, getCurrentTurn } from "./date";

function getMessagesFromStorage() {
    const messages = getFromStorage('messages');

    return messages;
}

// [ ]: configurar o busyEmployee
async function getConditionalsMessages() {
    const appointments = getAppointments();
    const appointmentsLength = appointments.length;
    const messagesObject = await getMessagesFromStorage();

    if (appointmentsLength > 10) return messagesObject.conditionals.busyDay[drawRandomNumber(0, 4)];
}

async function getWeekDayMessage(weekIndex) {
    const messagesObject = await getMessagesFromStorage();
    const weekDayMessage = messagesObject.week[weekIndex][drawRandomNumber(0, 4)];

    return weekDayMessage;
}

async function getTurnMessage(currentTurn) {
    const messagesObject = await getMessagesFromStorage();
    const turnMessage = messagesObject.turn[currentTurn][drawRandomNumber(0, 4)];

    return turnMessage;
}

export function getMessage() {
    const weekDayIndex = getCurrentWeekday().index;
    const currentTurn = getCurrentTurn();
    const messages = [];

    if (!getConditionalsMessages() === undefined) messages.push(getConditionalsMessages());

    messages.push(getWeekDayMessage(weekDayIndex), getTurnMessage(currentTurn));

    return messages[drawRandomNumber(0, messages.length - 1)];
}