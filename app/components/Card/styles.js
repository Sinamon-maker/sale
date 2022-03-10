import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer:{
    padding: 20,

  },
  title:{
marginBottom:7,
  },
  subTitle:{
    color: colors.secondary,
    fontWeight: 'bold',
  }
});

export default styles;
