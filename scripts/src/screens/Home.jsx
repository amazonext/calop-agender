import { View, Text, Image } from "react-native";

// styles
import { homeStyles } from "../assets/styles/homeStyle";

// utils
import { getCurrentDay, getCurrentMonth, getCurrentWeekday } from "../utils/date";
import { getUserInfos } from "../utils/user_db";
import { getAppointments } from "../utils/appointments";
import { getMessage } from "../utils/messages";

export default function Home() {
  const userInfos = getUserInfos();
  const USERNAME = userInfos && userInfos.name ?
    <Text style={{ fontWeight: 'bold' }}>{userInfos.name}</Text> : "usuário";
  const ENTERPRISE_NAME = userInfos && userInfos.enterprise ?
    <Text style={{ fontWeight: 'bold' }}>{userInfos.enterprise}</Text> : "sua empresa";

  const appointments = async () => await getAppointments();
  const appointmentsLength = appointments.length;

  const message = getMessage();

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
        <Text style={homeStyles.welcomeTextUser}>Bem-vindo, {USERNAME}!</Text>
        <Text style={homeStyles.welcomeTextEnterprise}>Como vai a {ENTERPRISE_NAME}?</Text>
      </View>

      <View style={homeStyles.appointmentContainer}>
        <View style={homeStyles.dateContainer}>
          <View style={homeStyles.dateInfo}>
            <Text style={homeStyles.weekTextBefore}>
              Hoje é <Text style={homeStyles.weekText}>{getCurrentWeekday().name}</Text>
            </Text>
            <Text style={homeStyles.message}>{message}</Text>
          </View>
        </View>

        <View style={homeStyles.summaryContainer}>
          <Text style={homeStyles.summaryTitle}>Resumo</Text>

          <View style={homeStyles.summaryCards}>
            <View style={homeStyles.summaryCard}>
              <Text style={homeStyles.cardLabel}>Serviços do mês</Text>
              <Text style={homeStyles.cardNumber}>{appointmentsLength}</Text>
            </View>

            <View style={homeStyles.summaryCard}>
              <Text style={homeStyles.cardLabel}>Serviços de hoje</Text>
              <View style={homeStyles.todayServicesContainer}>
                {appointmentsLength > 0 ? (
                  appointments.map((service, index) => (
                    <Text key={index} style={homeStyles.serviceItem}>
                      • {service}
                    </Text>
                  ))
                ) : (
                  <Text style={homeStyles.servicesText}>{appointmentsLength}</Text>
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