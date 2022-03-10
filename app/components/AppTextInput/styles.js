import { StyleSheet,  } from 'react-native';
import defaultStyles from "../../config/styles";


const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default styles