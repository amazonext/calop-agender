function getCurrentWeekday() {
    const date = new Date();
    const weekIndex = date.getDay();

    const colors = [
        "#E6C87D", "#D9B86A", "#F4D160", "#E3C17A",
        "#FBC798", "#EFD393", "#D4B16A",
    ];

    const weekdays = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    return {
        index: weekIndex,
        name: weekdays[weekIndex],
        color: colors[weekIndex % colors.length]
    };
}

function getCurrentMonth() {
    const date = new Date();
    const monthIndex = date.getMonth();

    const colors = [
        "#E6C87D", "#FFF4B2", "#F2D6A5", "#FFFBCC", "#D9B86A", "#DDC375",
        "#F4D160", "#E3C17A", "#FBC798", "#FDE8A9", "#EFD393", "#D4B16A",
    ];

    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    return {
        name: monthNames[monthIndex],
        color: colors[monthIndex % colors.length]
    };
}

function getCurrentDay() {
    const date = new Date();
    return date.getDate();
}

function getCurrentTurn() {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 5 && hour < 12) return "morning";
    if (hour >= 12 && hour < 18) return "afternoon";
    return "night";
}

export { getCurrentDay, getCurrentMonth, getCurrentWeekday, getCurrentTurn };