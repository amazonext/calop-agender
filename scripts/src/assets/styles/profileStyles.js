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
  // Botões de input
  inputButton: {
    backgroundColor: projectPalete.color11,
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
    color: projectPalete.color3,
    marginBottom: 6,
  },
  inputButtonValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: projectPalete.color10,
  },
});