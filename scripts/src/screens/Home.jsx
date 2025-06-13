import { View, Text, Image, ScrollView, RefreshControl } from "react-native";
import { useState, useEffect } from "react";

// hooks
import { useUserInfo } from "../hooks/useUserInfo";
import { useRefresh } from "../hooks/useRefresh";

// styles
import { homeStyles } from "../assets/styles/homeStyle";
import { projectPalete } from "../assets/styles/colors";

// utils
import { getCurrentWeekday } from "../utils/date";
import { getAppointmentsLength, getAppointmentsWithDate } from "../utils/appointments";
import { useMessage } from "../utils/messages";

// components
import Loading from "../components/Loading";

export default function Home() {
  const { name, enterprise_name } = useUserInfo() || {};
  const [appointmentsLength, setAppointmentsLength] = useState(null);
  const [message, setMessage] = useState(null);
  const [isRefreshingManually, setIsRefreshingManually] = useState(false);

  const USERNAME = name ? <Text style={{ fontWeight: 'bold' }}>{name}</Text> : "usuário";
  const ENTERPRISE_NAME = enterprise_name ? <Text style={{ fontWeight: 'bold' }}>{enterprise_name}</Text> : "sua empresa";

  const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  });
  const date = new Date();
  const dateFormatted = dateFormatter.format(date);

  const loadAppointmentsSummary = async () => {
    const appointmentsWithDateInfos = await getAppointmentsWithDate(dateFormatted);
    const data = await getAppointmentsLength(appointmentsWithDateInfos);
    setAppointmentsLength(data);
  };

  const loadMessage = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const newMessage = await useMessage();
    setMessage(newMessage);
  };

  const onRefresh = async () => {
    setIsRefreshingManually(true);
    await Promise.all([loadAppointmentsSummary(), loadMessage()]);
    setRandomTip(generateRandomTip());
    setIsRefreshingManually(false);
  };

  const { refreshing, onRefresh: handleRefresh } = useRefresh(onRefresh);

  useEffect(() => {
    onRefresh();
  }, []);

  if (
    isRefreshingManually ||
    !name ||
    !enterprise_name ||
    !appointmentsLength ||
    !message
  ) {
    return <Loading />;
  }

  return (
    <View style={homeStyles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[projectPalete.color1]}
            tintColor={projectPalete.color1}
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
                <Text style={homeStyles.cardNumber}>{appointmentsLength.month}</Text>
              </View>

              <View style={homeStyles.summaryCard}>
                <Text style={homeStyles.cardLabel}>Serviços de hoje</Text>
                <View style={homeStyles.todayServicesContainer}>
                  <Text style={homeStyles.servicesText}>{appointmentsLength.today}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}