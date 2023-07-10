import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  main: {
    marginTop: 8,
    left: 23,
    marginRight: 30,
    paddingBottom: 100,
  },
  con: {
    flexDirection: 'row',
  },
  iconContainer: {
    alignItems: 'center',
    top: 7,
    marginRight: 5,
    // Add styles for icon container
  },
  iconText: {
    // Add styles for icon text
    fontSize: 4,
  },
  lineContainer: {
    marginTop: 8,
    // Add styles for line container
  },
  lineText: {
    top: 0,
    fontSize: 8,
    color: '#707070',
    // Add styles for line of text
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // padding: SIZES.medium,
    borderRadius: SIZES.small,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  textContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  buttonContainer: {
    // alignItems: 'center',
    position: 'absolute',
    top: 75,
    bottom: 5,
    // left: 0,
    right: 42,
    zIndex: 2,
    // Add styles for button container
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#FF9A26',
    height: 21,
    width: 58,
    borderRadius: 3,
    // Add styles for add button
  },
  addButtonText: {
    color: '#FF8800',
    fontSize: 11,
    fontWeight: '700',
    // Add styles for, add button text
  },
  rating: {
    backgroundColor: '#51C452',
    borderRadius: 2,
    top: 5,
    height: 10,
    width: 22,
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingtext: {
    fontSize: 6,
    color: '#FFFFFF',
  },
  groupimg: {
    width: 92,
    height: 68,
    left: 130,
  },
  rightImage: {
    position: 'absolute',
    top: 20,
    right: 25,
    width: 92,
    height: 68,
    borderRadius: 5,
    // Add styles for right image
  },
  btnContainer: {
    backgroundColor: '#1C1C1C',
    height: 22,
    width: 56,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    right: 22,
  },
  ingri: {
    fontSize: 6,
    fontWeight: 'bold',
    top: 9,
    left: 35,
  },
});

export default styles;
