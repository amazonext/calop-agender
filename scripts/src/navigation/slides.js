// css
import { projectPalete, theHeapstersPalete } from '../assets/css/colors';

export default [
    {
        key: 'welcome',
        title: 'Seja muito bem-vindo!',
        text: 'Nós, da equipe The Heapsters, estamos super felizes em ter você no Calop Agender. Aqui você vai descobrir como simplificar o seu dia a dia em poucos toques!',
        image: require('../assets/images/logo-equipe.jpeg'),
        backgroundColor: theHeapstersPalete.color5,
        colors: {
            title: theHeapstersPalete.color1,
            text: theHeapstersPalete.color4
        }
    },
    {
        key: 'about-scheduling',
        title: 'Agendamento Simplificado',
        text: 'Marque compromissos em segundos.',
        image: require('../assets/images/logo-app.png'),
        backgroundColor: projectPalete.color6,
        colors: {
            title: projectPalete.color3,
            text: projectPalete.color2
        }
    },
    {
        key: 'about-create-model',
        title: 'Crie modelos de agendamento',
        text: 'Agilize a adição de agendamentos com modelos de agendamento.',
        image: require('../assets/images/logo-app.png'),
        backgroundColor: projectPalete.color6,
        colors: {
            title: projectPalete.color3,
            text: projectPalete.color2
        }
    },
    {
        key: 'about-home',
        title: 'Veja seus agendamentos do dia',
        text: 'Interface inteligente disposta a mostrar seus agendamentos de forma eficaz.',
        image: require('../assets/images/logo-app.png'),
        backgroundColor: projectPalete.color6,
        colors: {
            title: projectPalete.color3,
            text: projectPalete.color2
        }
    }
];