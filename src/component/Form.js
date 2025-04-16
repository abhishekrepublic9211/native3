import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from '../style/styles';

const Form = () => {
  const [dob, setDob] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePickerFor, setDatePickerFor] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [totalLimit, setTotalLimit] = useState('');
  const [availableLimit, setAvailableLimit] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  const showDatePicker = (field) => {
    setDatePickerFor(field);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    if (datePickerFor === 'dob') {
      setDob(formattedDate);
    } else if (datePickerFor === 'expiry') {
      setExpiryDate(formattedDate);
    }
    hideDatePicker();
  };

  const handleSubmit = async () => {
    const formData = {
      name,
      email,
      dob,
      mobile,
      total_limit: totalLimit,
      available_limit: availableLimit,
      card_holder: cardHolder,
      card_number: cardNumber,
      expiry_date: expiryDate,
      cvv,
    };

    try {
      const response = await fetch('http://localhost/saveForm.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      Alert.alert('Response', result.message);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong!');
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollArea}>
        <View style={styles.formContainer}>
          {/* <Image
            source={require('../image/mainCard.png')}
            style={{ width: '100%', height: 100, alignSelf: 'center', marginBottom: 20}}
          /> */}
          <View style={{ width: '100%', maxWidth: 300, alignSelf: 'center', marginBottom: 20 }}>
  <Image
    source={require('../image/mainCard.png')}
    style={{
      width: '100%',
      height: undefined,
      aspectRatio: 3,
      resizeMode: 'contain',
    }}
  />
</View>



          <Text style={styles.text}>Fill the Form</Text>

          <Text>Name</Text>
          <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />

          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text>Date of Birth</Text>
          <TouchableOpacity onPress={() => showDatePicker('dob')}>
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              value={dob}
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>

          <Text>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            value={mobile}
            onChangeText={setMobile}
          />

          <Text>Total Limit</Text>
          <TextInput
            style={styles.input}
            placeholder="Total limit"
            keyboardType="numeric"
            value={totalLimit}
            onChangeText={setTotalLimit}
          />

          <Text>Available Limit</Text>
          <TextInput
            style={styles.input}
            placeholder="Available limit"
            keyboardType="numeric"
            value={availableLimit}
            onChangeText={setAvailableLimit}
          />

          <Text>Card Holder Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Card Holder Name"
            value={cardHolder}
            onChangeText={setCardHolder}
          />

          <Text>Card Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            keyboardType="number-pad"
            value={cardNumber}
            onChangeText={setCardNumber}
          />

          <Text>Expiry Date</Text>
          <TouchableOpacity onPress={() => showDatePicker('expiry')}>
            <TextInput
              style={styles.input}
              placeholder="Expiry Date"
              value={expiryDate}
              editable={false}
              pointerEvents="none"
            />
          </TouchableOpacity>

          <Text>CVV</Text>
          <TextInput
            style={styles.input}
            placeholder="CVV"
            secureTextEntry
            keyboardType="number-pad"
            value={cvv}
            onChangeText={setCvv}
          />

          <Button title="Submit" onPress={handleSubmit} />

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Form;
