import { StyleSheet } from "react-native";
import { projectPalete } from "./colors";
import { global } from "./global/globalStyle";

export const profileStyles = StyleSheet.create({
  ...global,
  container: {
    flex: 1,
    backgroundColor: projectPalete.color2,
    paddingHorizontal: 20,
    alignItems: 'center'
  },

  // Container da foto
  photoContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: projectPalete.color4,
  },

  // Botão de alterar foto
  changePhotoButton: {
    backgroundColor: projectPalete.color6,
    padding: 10,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0
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
    width: '95%'
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