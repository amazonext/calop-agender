import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

// styles
import styles from '../assets/css/styles';

export default function Home() {
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDay(now.getDate());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo-app.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Tela inicial</Text>
      </View>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
        <Text style={styles.subtitleText}>Agende seus clientes agora</Text>
      </View>

      <View style={styles.appointmentContainer}>
        <View style={styles.dateContainer}>
          <View style={styles.calendarIcon}>
            <Text style={styles.dateNumber}>{currentDay}</Text>
          </View>
          <View style={styles.dateInfo}>
            <Text style={styles.dateTitle}>Hoje</Text>
            <Text style={styles.noAppointments}>Nenhum agendamento</Text>
          </View>
        </View>
      </View>
    </View>
  );
}