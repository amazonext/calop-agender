import { View, Text, Image, ScrollView, RefreshControl } from "react-native";

// hooks
import { useUserInfo } from "../hooks/useUserInfo";

// styles
import { homeStyles } from "../assets/styles/homeStyle";

// utils
import { getCurrentWeekday } from "../utils/date";
import { getAppointments, getAppointmentsToday, getAppointmentsWithDate } from "../utils/appointments";
import { getMessage } from "../utils/messages";
import Loading from "../components/Loading";
import { useState } from "react";
import { useRefresh } from '../hooks/useRefresh';
import { projectPalete } from "../assets/styles/colors";

export default function Home() {
  const { name, enterprise_name } = useUserInfo() || {};
  const [appointments, setAppointments] = useState([]);
  const USERNAME = name ?
    <Text style={{ fontWeight: 'bold' }}>{name}</Text> : "usuário";
  const ENTERPRISE_NAME = enterprise_name ?
    <Text style={{ fontWeight: 'bold' }}>{enterprise_name}</Text> : "sua empresa";


  const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  });
  const date = new Date();
  const dateFormatted = dateFormatter.format(date).replace('/', '_');
  const dateToday = dateFormatted;
  console.log(getAppointmentsWithDate(dateToday));

  const appointmentsArray = async () => await getAppointmentsToday();
  const appointmentsLength = appointmentsArray.length;

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

  const fetchAppointments = async () => {
    const data = await getAppointments();
    setAppointments(data);
  };

  const { refreshing, onRefresh: handleRefresh } = useRefresh(fetchAppointments);

  if ((USERNAME === "usuário" || ENTERPRISE_NAME === "sua empresa") || !appointments) return <Loading />;

  return (
    <View style={homeStyles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[projectPalete.color1]}
            tintColor={projectPalete.color1}
            progressViewOffset={5}
          />
        }
      >
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
                    appointmentsArray.map((service, index) => (
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
      </ScrollView>
    </View>
  );
}