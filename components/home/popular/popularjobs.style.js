import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    marginLeft: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    width: 76,
    height: 24,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FF9A26',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FF941A',
    fontSize:10,
    fontWeight:'bold',
  },
  headerTitle: {
    fontSize: SIZES.large,
    top: 12,
    left: 23,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
