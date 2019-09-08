import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.joinText}>Join us</Text>
      <TextInput
        placeholder="Username"
        keyboardType="default"
        style={styles.inputStyle}
        placeholderTextColor="#C7C7C7"
      />
      <TextInput
        placeholder="Phone Number"
        keyboardType="phone-pad"
        style={styles.inputStyle}
        placeholderTextColor="#C7C7C7"
      />
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>Join</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15
  },
  joinText: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 100
  },
  inputStyle: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
    marginTop: 50
  },
  buttonStyle: {
    backgroundColor: '#636AF7',
    borderRadius: 3,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 45
  },
  buttonTextStyle: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 17
  }
});
