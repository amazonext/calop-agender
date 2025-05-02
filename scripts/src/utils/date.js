function currentWeekday() {
    const date = new Date();
    const weekIndex = date.getDay();

    const weekdays = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    return weekdays[weekIndex];
}

function currentMonth() {
    const date = new Date();
    const monthIndex = date.getMonth();

    const colors = [
        "#E6C87D", "#FFF4B2", "#F2D6A5", "#FFFBCC", "#D9B86A", "#F6E2A5",
        "#F4D160", "#E3C17A", "#FBC798", "#FDE8A9", "#EFD393", "#D4B16A",
    ];

    const monthNames = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];

    return {
        name: monthNames[monthIndex],
        color: colors[monthIndex % colors.length]
    };
}

function currentDay() {
    const date = new Date();
    return date.getDate();
}

export { currentDay, currentMonth, currentWeekday };