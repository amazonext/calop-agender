// [x]: criar o banco de dados de agendamentos
// [x]: criar o storage de mensagens personalizadas
// [ ]: fazer uma condição para verificar se os procedimentos já foram realizados

import { createTable } from "../helpers/db";
import { saveToStorage } from "./storage";

export default function initializeApp() {
    // db
    createTable('scheduling_models', `
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        procedure TEXT NOT NULL,
        value REAL NOT NULL,
        detailing TEXT,
        profissional_name TEXT NOT NULL,
        key_identifier INTEGER NOT NULL UNIQUE
    `);

    // storage de mensagens
    saveToStorage('messages', {
        week: [
            [ // domingo
                "Domingo tranquilo por aí? Ótimo dia pra recarregar as energias!",
                "Amanhã começa tudo de novo. Hoje é dia de descanso 😌",
                "Domingo, dia perfeito pra organizar a mente e o coração.",
                "Domingo com poucas marcações? Aproveite esse respiro!",
                "Um bom domingo prepara uma ótima semana!"
            ],
            [ // segunda
                "Bom início de semana! Vamos com tudo!",
                "Segunda chegou! Hora de recomeçar com energia.",
                "Café na mão e semana começando no ritmo certo ☕️",
                "Segunda-feira: a chance de começar do zero com tudo!",
                "Dia de alinhar metas e começar forte!"
            ],
            [ // terça
                "Terça tá com cara de produtividade!",
                "A semana tá só começando, bora pra cima!",
                "Terça com ritmo forte! Excelente!",
                "A constância de hoje é o sucesso de amanhã.",
                "Você já dominou a segunda, agora é só manter o foco!"
            ],
            [ // quarta
                "Quarta-feira: o meio da batalha! Você tá indo muito bem 💪",
                "Metade da semana vencida. Parabéns pela dedicação!",
                "Já é quarta? O tempo voa quando estamos produtivos!",
                "Se chegou até aqui, vai até o fim!",
                "Hoje é dia de manter o ritmo e olhar o progresso."
            ],
            [ // quinta
                "Quinta é a nova sexta! Já dá pra sentir o fim de semana chegando 😎",
                "Mais um pouco e a semana vira história!",
                "Quinta é dia de não desistir!",
                "Hoje é o empurrão final até a sexta!",
                "Persistência é o nome do jogo de quinta-feira."
            ],
            [ // sexta
                "Sextou com estilo! Que tal fechar a semana com chave de ouro?",
                "Hoje é dia de finalizar e desacelerar. Aproveite seu dia!",
                "Fechando a semana com força total 💥",
                "Sexta com produtividade é fim de semana com tranquilidade.",
                "Sorria: hoje é sexta-feira!"
            ],
            [ // sábado
                "Sábado com agenda cheia? Isso é sucesso!",
                "Dia de cuidar e ser cuidado. Feliz sábado!",
                "Aproveite o sábado com equilíbrio entre trabalho e descanso.",
                "Seu sábado tá sendo incrível por aqui!",
                "Agenda de sábado cheia de boas energias!"
            ]
        ],

        turn: {
            // manhã
            morning: [
                "Bom dia! Um dia inteiro pela frente pra fazer acontecer ✨",
                "Começando cedo? Isso é foco!",
                "Manhã produtiva é sinal de uma tarde tranquila!",
                "Café, agenda e foco: a manhã já começa com energia!",
                "Aproveite as primeiras horas do dia para brilhar!"
            ],
            // tarde
            afternoon: [
                "Boa tarde! Ainda dá tempo de realizar muita coisa hoje 😊",
                "Meio do dia, hora de dar aquele gás final!",
                "Tarde em movimento, continue nesse ritmo!",
                "A produtividade da tarde depende da motivação da manhã!",
                "A Hora perfeita pra ajustar os detalhes do dia!"
            ],
            // noite
            night: [
                "Boa noite! Hora de desacelerar (ou continuar brilhando, se for o caso ✨)",
                "Mais um dia vencido. Que orgulho do seu trabalho!",
                "Fim do dia com sensação de dever cumprido!",
                "Se ainda tiver algo pra fazer, você dá conta!",
                "Hora de agradecer e descansar. Amanhã tem mais!"
            ]
        },

        conditionals: {
            // dia movimentado
            busyDay: [
                "Uau, hoje tá movimentado, hein?! Bora com tudo 💥",
                "Agenda lotada é sinônimo de sucesso! 👏",
                "Dia puxado? Isso mostra que o trabalho tá rendendo!",
                "Muitas marcações hoje! Parabéns pela organização.",
                "Movimentação intensa por aqui. Que ótimo sinal!"
            ],
            // funcionário ocupado
            busyEmployee: [
                "{{name}} tá voando hoje! Que dedicação 👏",
                "Destaque do dia: {{name}}! Obrigado pelo empenho incrível.",
                "{{name}} está cuidando de tudo hoje! Que orgulho da equipe!",
                "{{name}}, você é o motor da produtividade hoje!",
                "O dia tá cheio pro(a) {{name}}, mas o desempenho tá lá em cima!"
            ]
        }
    });

    // storage de dicas
    saveToStorage('tips', [
        "🦜 Psiu! Use a aba 'Criar Serviços' à esquerda para adicionar novos tipos de atendimento!",
        "🦜 Que tal agendar um novo serviço? Toque na aba 'Agendar' à direita!",
        "🦜 Dica da Calopsita: Mantenha seus serviços organizados criando categorias claras!",
        "🦜 Voou da memória? Volte sempre à tela inicial para ver o resumo do seu dia!",
        "🦜 Canto da Calopsita: Agende com antecedência para não perder nenhum cliente!",
        "🦜 Organize-se como uma calopsita esperta: crie seus serviços primeiro, depois agende!",
        "🦜 Dica de ouro: Use a navegação inferior para voar rapidamente entre as funcionalidades!",
        "🦜 Calopsita lembra: conferir os horários disponíveis evita conflitos no agendamento!",
        "🦜 Dica voadora: personalize os nomes dos serviços para deixar tudo mais com a sua cara!",
        "🦜 Piu piu! Atualize os preços dos seus serviços sempre que necessário!",
        "🦜 Um bom atendimento começa com uma boa organização. Você tá no caminho certo!",
        "🦜 Agendamentos coloridos? Use ícones ou emojis nos títulos para identificar rapidinho!",
        "🦜 Cuidado com o bico! Evite agendamentos sobrepostos para não se enrolar!",
        "🦜 Calopsita esperta compartilha a agenda com a equipe! Todo mundo ganha com isso!",
        "🦜 Lembrete do ninho: revise sua agenda do dia logo cedo para um voo tranquilo!",
        "🦜 Criatividade no ar: nomeie categorias como quiser — é seu espaço de voo!",
        "🦜 Pru pru! Clientes felizes voltam — mantenha a pontualidade nos agendamentos!",
        "🦜 Calopsita feliz é calopsita organizada! Continue assim e voe alto! 🕊️"
    ]);

    saveToStorage('appointments', {});
}