import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TextInput
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  headerStyle: {
    paddingTop: 50,
    paddingRight: 15,
    paddingLeft: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowColor: '#A9A9A9',
    shadowOpacity: 1.0,
    paddingBottom: 15,
    backgroundColor: '#FFF',
  },
  newConversationView: {
    display: 'flex',
    flexDirection: 'row'
  },
  newConversationText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#C2C4CF',
    marginTop: 2,
    fontWeight: '600'
  },
  searchFieldView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  to: {
    marginTop: 4,
    fontSize: 14
  },
  inputStyle: {
    paddingLeft: 15,
    width: '92%'
  }
})

const SearchContacts = ({ navigation }) => {
  const [keyboardTypeState, setKeyboardTypeState] = useState({ keyboardType: 'email-address' });

  const toggleKeyboardType = () => {
    const { keyboardType } = keyboardTypeState;
    keyboardType === 'email-address' ?
      setKeyboardTypeState({ keyboardType: 'numeric' }) :
      setKeyboardTypeState({ keyboardType: 'email-address' })
  }

  return (
    <View>
      <View style={styles.headerStyle}>
        <View style={styles.newConversationView}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <Ionicons
              name={Platform.OS === 'ios' ?
                'ios-arrow-round-back' :
                'md-arrow-back'
              }
              size={25}
            />
          </TouchableOpacity>
          <Text style={styles.newConversationText}>New conversation</Text>
        </View>
        <View style={styles.searchFieldView}>
          <Text style={styles.to}>To</Text>
          <TextInput
            placeholder="Type a name, phone number or email address"
            style={styles.inputStyle}
            placeholderTextColor="#696969"
            keyboardType={keyboardTypeState.keyboardType}
          />
          <TouchableOpacity onPress={() => toggleKeyboardType()}>
            <MaterialIcons
              name={keyboardTypeState.keyboardType === 'email-address' ?
              'dialpad' :
              'keyboard'
              }
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

SearchContacts.navigationOptions = {
  header: null
}

export default SearchContacts;
