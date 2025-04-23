import { StyleSheet, Dimensions } from 'react-native';
import { projectPalete } from './colors';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: projectPalete.color2,
    paddingHorizontal: 20,
  },
  content: {
    backgroundColor: "#F4ECDD",
    borderRadius: 15,
  },
  titleItem: {
    fontSize: 30,
    textAlign: 'center',
    color: "black",
    fontWeight: "bold",
    padding: 5,
    color: projectPalete.color3
  },
  field: {
    fontSize: 20,
    color: "black",
    padding: 5,
    gap: 2
  },
  label: {
    fontSize: 20,
    color: projectPalete.color10
  },
  input: {
    backgroundColor: projectPalete.color1,
    borderRadius: 10,
    color: "#fff"
  },
  button: {
    alignItems: "center",
    fontSize: 20,
    padding: 5,
    backgroundColor: projectPalete.color6,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  header: {
    marginTop: 30,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: projectPalete.color6,
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    color: projectPalete.color8,
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
    color: projectPalete.color8,
    marginBottom: 5,
  },
  subtitleText: {
    fontSize: 26,
    color: projectPalete.color8,
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
    borderWidth: 5,
    borderColor: projectPalete.color7,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  dateNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: projectPalete.color7,
  },
  dateInfo: {
    justifyContent: 'center',
  },
  dateTitle: {
    fontSize: 30,
    fontWeight: '500',
    color: projectPalete.color8,
    marginBottom: 5,
  },
  noAppointments: {
    fontSize: 22,
    color: projectPalete.color8,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: width * 0.8,
    height: height * 0.5,
    resizeMode: 'contain'
  },
  titleSlide: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16
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
    marginVertical: 15,
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
  button: {
    backgroundColor: projectPalete.color6,
    padding: 16,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  buttonText: {
    color: projectPalete.color8,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});