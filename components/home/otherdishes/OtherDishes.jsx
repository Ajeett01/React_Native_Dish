import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './otherdishes.style';
import { icons,images } from '../../../constants';
import ShortDivider from '../../common/ShortDivider/ShortDivider';

const OtherDishes = () => {
  // const {data,refetch} = useFetch();
  const imageUrl =
    'https://img.freepik.com/free-photo/top-view-delicious-corn-dog_23-2149387975.jpg';
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => setShowSelectD(!showSelectD)}
        style={styles.textContainer}
      >
        <Text style={{ fontSize: 12, fontWeight: '600' }}>
          {' '}
          Masala Paneer <Image source={icons.veg} />
          {'  '}
        </Text>
        <View style={styles.rating}>
          <Text style={styles.ratingtext}>
            4.3 <Image source={icons.star} />{' '}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.con}>
        <View style={styles.iconContainer}>
          <Image source={icons.frig} />
          <Text style={styles.iconText}> Refrigerator</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={icons.frig} />
          <Text style={styles.iconText}> Refrigerator</Text>
        </View>
        <Text style={styles.ingri}>Ingredients</Text>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.lineText}>Paneer tossed in gravy</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.rightImage} />
    </View>
    // <ShortDivider />
  );
};

export default OtherDishes;
