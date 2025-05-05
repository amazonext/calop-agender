import * as Calendar from 'expo-calendar';

const CALENDAR_TITLE = 'Agendamentos do Calop Agender';
const CALENDAR_COLOR = '#E9B124';
const TIME_ZONE = 'America/Belem';

async function requestCalendarPermissions() {
    const { status } = await Calendar.requestCalendarPermissionsAsync();

    if (status !== 'granted') return false

    return true;
}

async function getDefaultCalendarSource() {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    const source = calendars.find(cal => cal.source?.id)?.source;

    if (!source) {
        return {
            isLocalAccount: true,
            name: 'Expo Calendar',
            type: Calendar.SourceType.LOCAL,
            id: undefined,
        };
    }

    return source;
}

async function getOrCreateCalendar() {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    const existing = calendars.find(cal => cal.title === CALENDAR_TITLE);

    if (existing) return existing.id;

    const defaultSource = await getDefaultCalendarSource();

    const newCalendarId = await Calendar.createCalendarAsync({
        title: CALENDAR_TITLE,
        color: CALENDAR_COLOR,
        entityType: Calendar.EntityTypes.EVENT,
        sourceId: defaultSource.id,
        source: defaultSource,
        name: CALENDAR_TITLE,
        ownerAccount: 'personal',
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });

    return newCalendarId;
}

function buildEventDates({ day, month, hourStart, hourEnd, minuteStart, minuteEnd }) {
    const year = new Date().getFullYear();
    const startDate = new Date(year, month - 1, day, hourStart, minuteStart);
    const endDate = new Date(year, month - 1, day, hourEnd, minuteEnd);

    return { startDate, endDate };
}

async function addEvent(eventData) {
    const hasPermissions = await requestCalendarPermissions();
    if (!hasPermissions) return 'Permissões negadas';

    const calendarId = await getOrCreateCalendar();
    const {
        title, description, day, month,
        hourStart, hourEnd, minuteStart, minuteEnd
    } = eventData;

    const { startDate, endDate } = buildEventDates({
        day, month, hourStart, hourEnd, minuteStart, minuteEnd
    });

    try {
        const eventId = await Calendar.createEventAsync(calendarId, {
            title: title || 'Evento sem título',
            startDate,
            endDate,
            timeZone: TIME_ZONE,
            notes: description || 'Sem descrição',
        });

        return 'Evento adicionado com sucesso!';
    } catch (error) {
        console.error('[Evento] Erro ao criar evento:', error);
        return 'Erro ao criar evento: ' + error;
    }
}

async function removeEvent(id) {
    try {
        await Calendar.deleteEventAsync(id);
    } catch (error) {
        console.error('[Evento] Erro ao remover evento:', error);
    }
}

async function editEvent(id, updatedData) {
    try {
        await Calendar.updateEventAsync(id, updatedData);
    } catch (error) {
        console.error('[Evento] Erro ao editar evento:', error);
    }
}

async function debugListCalendars() {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    console.log('[Debug] Calendários disponíveis:', JSON.stringify(calendars, null, 2));
}

export { addEvent, removeEvent, editEvent, debugListCalendars };