
import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginTop: SIZES.xLarge,
    left: 24,
    paddingBottom: 200,
    paddingRight: 30,
  },
  texts: {
    top: 0,
  },
  rating: {
    position: 'absolute',
    backgroundColor: '#51C452',
    borderRadius: 2,
    top: 15,
    left: 180,
    height: 10,
    width: 22,

    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingtext: {
    fontSize: 6,
  },
  desc: {
    top: 4,
    fontSize: 8,
    color: '#A3A3A3',
  },
  ellipse: {
    position: 'absolute',
    right: 0,
    width: 192,
    height: 192,
    backgroundColor: '#FFF9F2',
    borderRadius: 90,
  },
  herbal: {
    position: 'absolute',
    zIndex: 2,
    left: 273,
  },
  mask: {
    position: 'absolute',
    left: 180,
    top: 54,
  },
  divider: {
    top: 38,
    zIndex: -1,
  },
  belowdiv: {
    top: 22,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 10,
  },
  frigcontainer: {
    height: 95,
    width: 72,
    backgroundColor: '#F5F5F5',
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',
  },
});

export default styles;