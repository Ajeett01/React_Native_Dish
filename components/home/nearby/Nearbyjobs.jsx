import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './nearbyjobs.style'
import { icons, images } from '../../../constants'
const Nearbyjobs = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Popular Dishes</Text>
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card}>
          <Image style={styles.image} source={images.maskGroup} />
          <View style={styles.overlay}></View>
          <Text style={styles.text}>Biryani</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image style={styles.image} source={images.maskGroup} />
          <View style={styles.overlay}></View>
          <Text style={styles.text1}>Daal Batti</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image style={styles.image} source={images.maskGroup} />
          <View style={styles.overlay}></View>
          <Text style={styles.text1}>Veg Korma</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Nearbyjobs