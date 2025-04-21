import { StyleSheet } from 'react-native';
import { projectPalete } from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF7', 
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 30,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: '#D6AE4F', 
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: '#3A3C3F',
    marginTop: 10,
    marginBottom: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '500',
    color: '#3A3C3F',
    marginBottom: 5,
  },
  subtitleText: {
    fontSize: 26,
    color: '#3A3C3F',
  },
  appointmentContainer: {
    flex: 1,
    marginTop: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  calendarIcon: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#515151',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  dateNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#515151',
  },
  dateInfo: {
    justifyContent: 'center',
  },
  dateTitle: {
    fontSize: 30,
    fontWeight: '500',
    color: '#3A3C3F',
    marginBottom: 5,
  },
  noAppointments: {
    fontSize: 22,
    color: '#3A3C3F',
  }
});

export const settingsStyles = StyleSheet.create({
  userBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 12,
    marginBottom: 20,
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
