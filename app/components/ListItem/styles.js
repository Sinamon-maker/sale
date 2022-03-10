import { StyleSheet } from 'react-native';

import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default styles;