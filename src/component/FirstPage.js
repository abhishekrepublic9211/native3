import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Credit card image */}
      <Image
        source={require('../image/newsletter-cover3.jpg')} 
        style={styles.cardImage}
        resizeMode="contain"
      />

      {/* Text section */}
      <View style={styles.textSection}>
        <Text style={styles.heading}>Welcome to the world of benefits</Text>
        <Text style={styles.subheading}>Explore from a range of Credit Cards</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.authSection}>
        <Text style={styles.cardHolderText}>Already an Cardholder?</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.replace('Home')}>
            <Text style={styles.signUpText} >Sign-up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace('Home')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfd6ff', // light bluish
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardImage: {
    width: '100%',
    height: '50%',
    marginTop: 20,
  },
  textSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f3c88',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginTop: 5,
  },
  authSection: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  cardHolderText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 20,
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: '#1f3c88',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  signUpText: {
    color: '#1f3c88',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#1f3c88',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
  },
});
