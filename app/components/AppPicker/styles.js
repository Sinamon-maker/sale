import { StyleSheet } from "react-native";

import defaultStyles from "../../config/styles";

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.medium,
  },
  category: {
    flex: 1,
  },

  icon: {
    marginRight: 10,
  },
  modalButton: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  closeBtnText: {
    color: defaultStyles.colors.white,
  },

  closeBtn: {
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: defaultStyles.colors.secondary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
});

export default styles;
