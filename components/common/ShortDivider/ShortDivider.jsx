import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './shortdivider.style';

const ShortDivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}></View>
    </View>
  );
};

export default ShortDivider