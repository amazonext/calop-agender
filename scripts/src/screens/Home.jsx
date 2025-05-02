import { View, Text, Image } from "react-native";

// styles
import { homeStyles } from "../assets/css/homeStyle";

// utils
import { currentDay, currentMonth, currentWeekday } from "../utils/date";
import { getUserInfos } from "../utils/user";

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <Image
          source={require('../assets/images/logo-app.png')}
          style={homeStyles.logo}
        />
        <Text style={homeStyles.title}>Tela inicial</Text>
      </View>

      <View style={homeStyles.welcomeContainer}>
        <Text style={homeStyles.welcomeText}>Bem-vindo!</Text>
        <Text style={homeStyles.subtitleText}>Agende seus clientes agora</Text>
      </View>

      <View style={homeStyles.appointmentContainer}>
        <View style={homeStyles.dateContainer}>
          <View style={homeStyles.calendarIcon}>
            <Text style={homeStyles.dateNumber}>{currentDay}</Text>
          </View>
          <View style={homeStyles.dateInfo}>
            <Text style={homeStyles.dateTitle}>Hoje</Text>
            <Text style={homeStyles.noAppointments}>Nenhum agendamento</Text>
          </View>
        </View>
      </View>
    </View>
  );
}