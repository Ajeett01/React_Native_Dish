import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  main: {
    margin: 0,
  },
  container: {
    marginTop: SIZES.xLarge,
    left: 23,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: 12,
    left: 23,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    position: 'relative',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 100,
    backgroundColor: '#1C1C1C9A',
    mixBlendMode: 'multiply',
    opacity: 1,
  },
  text: {
    position: 'absolute',
    top: '125%',
    left: '105%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 10,
  },
  text1: {
    position: 'absolute',
    top: '125%',
    left: '90%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 10,
  },
  image: {
    width: 57,
    height: 57,
    borderRadius: 90,
  },
});

export default styles;
