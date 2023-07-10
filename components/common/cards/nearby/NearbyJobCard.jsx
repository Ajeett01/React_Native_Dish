import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './nearbyjobcard.style'
import { icons, images } from '../../../../constants';
import ShortDivider from '../../ShortDivider/ShortDivider';
import useFetch from '../../../../hooks/data';
import OtherDishes from '../../../home/otherdishes/OtherDishes';

const NearbyJobCard = ({ setShowSelectD, showSelectD }) => {

  // const {data,refetch} = useFetch();
  return (
    <>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            {' '}
            Recommended <Image source={icons.path} />
          </Text>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={{ color: 'white', fontSize: 10 }}> Menu</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setShowSelectD(!showSelectD)}
          style={styles.textContainer}
        >
          <Text style={{ fontSize: 12, fontWeight: '600' }}>
            {' '}
            Masala Mughlai <Image source={icons.veg} />
            {'  '}
          </Text>
          <View style={styles.rating}>
            <Text style={styles.ratingtext}>
              4.2 <Image source={icons.star} />{' '}
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
          <Text style={styles.lineText}>
            Chicken fried in deep tomato sauce with
          </Text>
          <Text style={styles.lineText}>delicious spices.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <Image source={images.maskGroup2} style={styles.rightImage} />
      </View>
      <ShortDivider />
      <OtherDishes />
    </>
  );
};

export default NearbyJobCard