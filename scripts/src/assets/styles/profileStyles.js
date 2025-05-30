import { StyleSheet } from "react-native";
import { projectPalete } from "./colors";
import { global } from "./global/globalStyle";

export const profileStyles = StyleSheet.create({
  ...global, //importei estilos globais
  
  
  container: {
    flex: 1,
    backgroundColor: projectPalete.color2,
    paddingHorizontal: 20,
  },
  
  
  header: {
    height: 56,
    backgroundColor: projectPalete.color2, 
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: projectPalete.color5, 
    justifyContent: "space-between",
  },
  backButton: {
    width: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: projectPalete.color8,
  },
  
  // Container da foto
  photoContainer: {
    marginTop: 30,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: projectPalete.color4,
    justifyContent: "center",
    alignItems: "center",
  },
  
  // Botão de alterar foto
  changePhotoButton: {
    marginTop: 10,
    backgroundColor: projectPalete.color6,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignItems: 'center',
  },
  changePhotoButtonText: {
    color: projectPalete.color8,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  
  // Botões de input
  inputButton: {
    backgroundColor: projectPalete.color5,
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  inputButtonLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: projectPalete.color8,
    marginBottom: 6,
  },
  inputButtonValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: projectPalete.color3,
  },
});