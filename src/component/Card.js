import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../style/styles';
import cardImage from '../image/newsletter3.png';

const Card = ({ navigation }) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContainer}>
        <Image source={cardImage} style={styles.image} />
        <Text style={styles.h2}>Apply New Card</Text>
        <TouchableOpacity style={styles.clickHerebtn}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Form')}>Click Here</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <Image source={cardImage} style={styles.image} />
        <Text style={styles.h2}>Reward Point</Text>
        <TouchableOpacity style={styles.clickHerebtn}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Form')}>Click Here</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <Image source={cardImage} style={styles.image} />
        <Text style={styles.h2}>Annual Charges</Text>
        <TouchableOpacity style={styles.clickHerebtn}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Form')}>Click Here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <Image source={cardImage} style={styles.image} />
        <Text style={styles.h2}>Card Activation</Text>
        <TouchableOpacity style={styles.clickHerebtn}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Form')}>Click Here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <Image source={cardImage} style={styles.image} />
        <Text style={styles.h2}>Instant Loan</Text>
        <TouchableOpacity style={styles.clickHerebtn}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Form')}>Click Here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <Image source={cardImage} style={styles.image} />
        <Text style={styles.h2}>Separate Merged Cards</Text>
        <TouchableOpacity style={styles.clickHerebtn}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Form')}>Click Here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <Image source={cardImage} style={styles.image} />
        <Text style={styles.h2}>Card Block</Text>
        <TouchableOpacity style={styles.clickHerebtn}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Form')}>Click Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
