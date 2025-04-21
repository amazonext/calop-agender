export default function month() {
    const date = new Date();
    const infos = {};

    switch (date.getDay()) {
        case 0: infos.dayWeek = "Domingo";
            break
        case 1: infos.dayWeek = "Segunda-feira";
            break
        case 2: infos.dayWeek = "Terça-feira";
            break
        case 3: infos.dayWeek = "Quarta-feira";
            break
        case 4: infos.dayWeek = "Quinta-feira";
            break
        case 5: infos.dayWeek = "Sexta-feira";
            break
        case 6: infos.dayWeek = "Sábado";
            break
    }

    switch (date.getMonth()) {
        case 0: infos.month = "Janeiro"
            break
        case 1: infos.month = "Fevereiro"
            break
        case 2: infos.month = "Março"
            break
        case 3: infos.month = "Abril"
            break
        case 4: infos.month = "Maio"
            break
        case 5: infos.month = "Junho"
            break
        case 6: infos.month = "Julho"
            break
        case 7: infos.month = "Agosto"
            break
        case 8: infos.month = "Setembro"
            break
        case 9: infos.month = "Outubro"
            break
        case 10: infos.month = "Novembro"
            break
        case 11: infos.month = "Dezembro"
            break
    }

    return infos;
}