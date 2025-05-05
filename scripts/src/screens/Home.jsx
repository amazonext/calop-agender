import { View, Text, Image } from "react-native";

// styles
import { homeStyles } from "../assets/css/homeStyle";

// utils
import { currentDay, currentMonth, currentWeekday } from "../utils/date";
import { getUserInfos } from "../utils/user";

export default function Home() {
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <Image
          source={require('../assets/images/logo-alternative.png')}
          style={homeStyles.logo}
        />
        <Text style={homeStyles.title}>Bem-vindo, {getUserInfos().name}!</Text>
      </View>

      <View style={homeStyles.appointmentContainer}>
        <View style={homeStyles.dateContainer}>
          <View style={homeStyles.calendarIcon}>
            <Text style={homeStyles.date}>{currentMonth().name}</Text>
            <Text style={homeStyles.date}>{currentDay()}</Text>
          </View>

          <View style={homeStyles.dateInfo}>
            <Text style={homeStyles.dateTitle}>{currentWeekday()}</Text>
            <Text style={homeStyles.appointments}>Nenhum agendamento para hoje</Text>
          </View>
        </View>
      </View>
    </View>
  );
}