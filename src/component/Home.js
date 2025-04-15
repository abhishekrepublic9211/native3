import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../style/styles';
import Card from './Card';
import Banner from './Banner';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Fixed Banner at the top */}
      <Banner />
     

      {/* Scrollable area starts here */}
      <ScrollView contentContainerStyle={styles.scrollArea}>
        <Card navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Home;
