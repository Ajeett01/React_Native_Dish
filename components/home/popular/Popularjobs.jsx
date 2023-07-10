import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './popularjobs.style'

const Popularjobs = () => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.header}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Indian</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.header}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Itallian</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.header}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Indian</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.header}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Indian</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Popularjobs