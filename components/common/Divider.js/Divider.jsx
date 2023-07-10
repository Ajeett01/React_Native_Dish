import React from 'react';
import { View, Text } from 'react-native';
import styles from './divider.style'

const Divider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}></View>
    </View>
  );
};

export default Divider;
