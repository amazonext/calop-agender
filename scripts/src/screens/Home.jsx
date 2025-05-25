import { View, Text, Image } from "react-native";

// styles
import { homeStyles } from "../assets/css/homeStyle";

// utils
import { getCurrentDay, getCurrentMonth, getCurrentWeekday } from "../utils/date";
import { getUserInfos } from "../utils/user_db";
import { getAppointments } from "../utils/appointments";

// [ ]: adicionar o getTurn no Home

export default function Home() {
  const userInfos = getUserInfos();
  const USERNAME = userInfos && userInfos.name ? userInfos.name : "usuário";

  // const appointments = getFromStorage('appointments').length || 0;
  const appointments = async () => await getAppointments();
  const appointmentsLength = appointments.length;

  const todayServices = [];

  const tips = [
    "🦜 Psiu! Use a aba 'Criar Serviços' à esquerda para adicionar novos tipos de atendimento!",
    "🦜 Que tal agendar um novo serviço? Toque na aba 'Agendar' à direita!",
    "🦜 Dica da Calopsita: Mantenha seus serviços organizados criando categorias claras!",
    "🦜 Voou da memória? Volte sempre à tela inicial para ver o resumo do seu dia!",
    "🦜 Canto da Calopsita: Agende com antecedência para não perder nenhum cliente!",
    "🦜 Organize-se como uma calopsita esperta: crie seus serviços primeiro, depois agende!",
    "🦜 Dica de ouro: Use a navegação inferior para voar rapidamente entre as funcionalidades!"
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <Image
          source={require('../assets/images/logo-alternative.png')}
          style={homeStyles.logo}
        />
        <Text style={homeStyles.welcomeText}>Bem-vindo, {USERNAME}!</Text>
      </View>

      <View style={homeStyles.appointmentContainer}>
        <View style={homeStyles.dateContainer}>
          <View style={homeStyles.calendarIcon}>
            <Text style={homeStyles.date}>{getCurrentMonth().name}</Text>
            <Text style={homeStyles.date}>{getCurrentDay()}</Text>
          </View>

          <View style={homeStyles.dateInfo}>
            <Text style={homeStyles.dateTitle}>{getCurrentWeekday().name}</Text>
            <Text style={homeStyles.appointments}>Nenhum agendamento para hoje</Text>
          </View>
        </View>

        <View style={homeStyles.summaryContainer}>
          <Text style={homeStyles.summaryTitle}>Resumo</Text>

          <View style={homeStyles.summaryCards}>
            <View style={homeStyles.summaryCard}>
              <Text style={homeStyles.cardNumber}>{appointmentsLength}</Text>
              <Text style={homeStyles.cardLabel}>Serviços do mês</Text>
            </View>

            <View style={homeStyles.summaryCard}>
              <Text style={homeStyles.cardLabel}>Serviços de hoje</Text>
              <View style={homeStyles.todayServicesContainer}>
                {todayServices.length > 0 ? (
                  todayServices.map((service, index) => (
                    <Text key={index} style={homeStyles.serviceItem}>
                      • {service}
                    </Text>
                  ))
                ) : (
                  <Text style={homeStyles.noServicesText}>Nenhum serviço hoje</Text>
                )}
              </View>
            </View>
          </View>
        </View>

        <View style={homeStyles.tipContainer}>
          <Text style={homeStyles.tipText}>{randomTip}</Text>
        </View>
      </View>
    </View>
  );
}