import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './dishdetails.style';
import { icons, images } from '../../../constants';
import Divider from '../../common/Divider.js/Divider';
import ShortDivider from '../../common/ShortDivider/ShortDivider';

const DishDetails = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.texts}>
          <Text style={{ fontWeight: 'bold', fontSize: 23 }}>
            Mashala Muglai
          </Text>
          <View style={styles.rating}>
            <Text style={styles.ratingtext}>
              4.2 <Image source={icons.star} />{' '}
            </Text>
          </View>
          <Text style={styles.desc}>
            Mashala Muglai is astyle of cookery developed
          </Text>
          <Image source={icons.set_time} style={{ top: 27 }} />
          <Text style={{ top: 10, left: 20 }}> 1 hour</Text>
          <View style={styles.ellipse}></View>
          <Image source={images.herbal} style={styles.herbal} />
          <Image source={images.Mask_17} style={styles.mask} />
        </View>
        <View style={styles.divider}>
          <Divider />
          <View style={styles.belowdiv}>
            <Text style={styles.header}>Ingredients</Text>
            <Text style={{ top: 4, fontSize: 8, color: '#8A8A8A' }}>
              For 2 people
            </Text>
            <View style={{ right: 20 }}>
              <ShortDivider />
            </View>
            <View style={{ top: 16 }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                Vegetabels (05) <Image source={icons.path} />
              </Text>
              <View style={{ top: 10 }}>
                <Text style={styles.detail}>Cauliflower</Text>
                <Text style={{ fontSize: 10, position: 'absolute', left: 286 }}>
                  01 Pc
                </Text>
              </View>
              <View style={{ top: 10 }}>
                <Text style={styles.detail}>Tomato</Text>
                <Text style={{ fontSize: 10, position: 'absolute', left: 286 }}>
                  10 Pc
                </Text>
              </View>
              <View style={{ top: 10 }}>
                <Text style={styles.detail}>Spinach</Text>
                <Text style={{ fontSize: 10, position: 'absolute', left: 286 }}>
                  1/2 Kg
                </Text>
              </View>
            </View>
            <View style={{ top: 44 }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                Spices (10) <Image source={icons.path} />
              </Text>
              <View style={{ top: 10 }}>
                <Text style={styles.detail}>Coriander oil</Text>
                <Text style={{ fontSize: 10, position: 'absolute', left: 286 }}>
                  100 g
                </Text>
              </View>
              <View style={{ top: 10 }}>
                <Text style={styles.detail}>Mustard oil</Text>
                <Text style={{ fontSize: 10, position: 'absolute', left: 286 }}>
                  1/2 L
                </Text>
              </View>
              <View style={{ top: 24 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  Appliances
                </Text>
                <View style={{ top: 16 }}>
                  <View style={styles.frigcontainer}>
                    <Image source={images.frig1} />
                    <Text style={{ fontSize: 8, color: '#242424',top:2 }}>Refrigerator</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishDetails;
