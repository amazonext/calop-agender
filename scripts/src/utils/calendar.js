import * as Calendar from 'expo-calendar';

async function requestPermissions() {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status !== 'granted') {
        console.log('Permissão de calendário não concedida');
        return false;
    }

    return true;
}

async function getDefaultCalendarSource() {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    const defaultCalendar = calendars.find(cal => cal.source.name === 'Default');

    return defaultCalendar?.source || calendars[0]?.source;
}

async function getOrCreateCalendar() {
    const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
    const existing = calendars.find(cal => cal.title === 'PROJECT_NAME');

    if (existing) return existing.id;

    const defaultCalendarSource = await getDefaultCalendarSource();

    return await Calendar.createCalendarAsync({
        title: 'PROJECT_NAME',
        color: 'blue',
        entityType: Calendar.EntityTypes.EVENT,
        sourceId: defaultCalendarSource.id,
        source: defaultCalendarSource,
        name: 'PROJECT_NAME',
        ownerAccount: 'personal',
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
}

function getEventDates({ day, month, hourStart, hourEnd, minuteStart, minuteEnd }) {
    const year = new Date().getFullYear();
    const startDate = new Date(year, month - 1, day, hourStart, minuteStart);
    const endDate = new Date(year, month - 1, day, hourEnd, minuteEnd);

    return { startDate, endDate };
}

async function addEvent(eventData) {
    const hasPermissions = await requestPermissions();
    if (!hasPermissions) return;

    const calendarId = await getOrCreateCalendar();
    const {
        title, description, day, month,
        hourStart, hourEnd, minuteStart, minuteEnd
    } = eventData;

    const { startDate, endDate } = getEventDates({
        day, month, hourStart, hourEnd, minuteStart, minuteEnd
    });

    try {
        await Calendar.createEventAsync(calendarId, {
            title: title || 'Evento sem título',
            startDate,
            endDate,
            timeZone: 'America/Belem',
            notes: description || 'Sem descrição',
        });

        return 'Evento adicionado com sucesso!';
    } catch (error) {
        return 'Erro ao criar evento: ' + error;
    }
}

async function removeEvent(id) {
    try {
        await Calendar.deleteEventAsync(id);
        console.log('Evento removido com sucesso!');
    } catch (error) {
        console.error('Erro ao remover evento:', error);
    }
}

async function editEvent(id, updatedData) {
    try {
        await Calendar.updateEventAsync(id, updatedData);
        console.log('Evento atualizado com sucesso!');
    } catch (error) {
        console.error('Erro ao editar evento:', error);
    }
}

export { addEvent, removeEvent, editEvent }