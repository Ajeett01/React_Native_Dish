import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {styles2} from './welcome.style'
import styles from './welcome.style'
import { COLORS, icons, images, SIZES } from '../../../constants';

const Welcome = () => {
  return (
    <>
      <View style={styles.rectangle}></View>
      <View style={styles.rectangle2}>
        <View style={styles.view}>
          <View style={styles.viewin1}>
            <Image source={icons.select_date} />
            <Text style={styles.text}>21 May 2021</Text>
            <Image style={{ left: 41.7 }} source={icons.set_time} />
            <Text style={{ left: 56.7, fontSize: 12, fontWeight: 'bold' }}>
              10:30 Pm-12:30 Pm
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default Welcome;