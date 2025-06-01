import { getItemFromStorage } from "./storage";
import { getAppointments } from "./appointments";
import { drawRandomNumber } from "../helpers/drawRandomNumber";
import { getCurrentWeekday, getCurrentTurn } from "./date";

async function getMessagesFromStorage() {
    return await getItemFromStorage('messages');
}

// [ ]: configurar o busyEmployee
async function getConditionalsMessages() {
    const appointments = await getAppointments();
    const appointmentsLength = appointments.length;
    const messagesObject = await getMessagesFromStorage();

    if (appointmentsLength > 10) return messagesObject.conditionals.busyDay[drawRandomNumber(0, 4)];
}

async function getWeekDayMessage(weekIndex) {
    const messagesObject = await getMessagesFromStorage();
    return messagesObject.week[weekIndex][drawRandomNumber(0, 4)];
}

async function getTurnMessage(currentTurn) {
    const messagesObject = await getMessagesFromStorage();
    return messagesObject.turn[currentTurn][drawRandomNumber(0, 4)];
}

export async function getMessage() {
    const weekDayIndex = getCurrentWeekday().index;
    const currentTurn = getCurrentTurn();

    const messages = [];

    const conditional = await getConditionalsMessages();
    if (conditional) messages.push(conditional);

    const weekMessage = await getWeekDayMessage(weekDayIndex);
    const turnMessage = await getTurnMessage(currentTurn);

    messages.push(weekMessage, turnMessage);

    return messages[drawRandomNumber(0, messages.length - 1)];
}

export async function useMessage() {
    return await getMessage();
}