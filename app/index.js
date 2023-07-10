import { useState,useEffect } from "react";
import { View , Text, ScrollView, SafeAreaView} from "react-native";
import {Stack, useRouter} from 'expo-router';

import { COLORS , icons , images , SIZES} from '../constants';
import {NearbyJobCard, Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'
import Divider from "../components/common/Divider.js/Divider";
import ShortDivider from "../components/common/ShortDivider/ShortDivider";
import DishDetails from "../components/home/DishDetails/DishDetails";

const Home =()=>{
    const router = useRouter();
    const [showSelectD, setShowSelectD] = useState(true);
    const headerTitle = showSelectD ? 'Select Dishes' : '';

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.arrow}
                dimensions="100%"
                setShowSelectD={setShowSelectD}
              />
            ),
            headerTitle: headerTitle,
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {showSelectD ? (
            <View>
              <View style={{ flex: 1, padding: 42 }}>
                <Welcome />
              </View>
              <View>
                <Popularjobs />
              </View>
              <View>
                <Nearbyjobs />
                <Divider />
              </View>
              <View>
                <NearbyJobCard
                  setShowSelectD={setShowSelectD}
                  showSelectD={showSelectD}
                  // data={data}
                />
              </View>
            </View>
          ) : (
            <View>
              <DishDetails />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
}

export default Home;