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
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';
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
  },
  contactView: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 20
  },
  phoneNumberType: {
    marginLeft: 'auto',
    color: '#696969',
    textTransform: 'capitalize'
  },
  initialsView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'purple',
    marginRight: 20
  },
  initialsText: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 5,
    color: '#FFF'
  },
  nameStyle: {
    fontSize: 15
  },
  phoneNumberStyle: {
    color: '#696969'
  }
})

const SearchContacts = ({ navigation }) => {
  const [keyboardTypeState, setKeyboardTypeState] = useState({ keyboardType: 'email-address' });
  const [contactsState, setContactsState] = useState({ contacts: [], searchValue: '' })

  useEffect(() => {
    getContacts();
  }, [])

  const getContacts = async () => {
    const { data } = await Contacts.getContactsAsync({
      fields: [
        Contacts.PHONE_NUMBERS
      ]
    });
    setContactsState({ contacts: data })
  }

  const toggleKeyboardType = () => {
    const { keyboardType } = keyboardTypeState;
    keyboardType === 'email-address' ?
      setKeyboardTypeState({ keyboardType: 'numeric' }) :
      setKeyboardTypeState({ keyboardType: 'email-address' })
  }

  const searchContactsByName = (nativeTextEvent) => {
    const { nativeEvent: { text } } = nativeTextEvent;
    const { contacts } = contactsState;

      if (text.trim() === '') {
        getContacts()
      } else {
        const foundContacts = contacts.filter(contact => contact.firstName.toLowerCase().includes(text.toLowerCase()));
        foundContacts.length === 0 ?
        getContacts() :
        setContactsState({ ...contactsState, contacts: foundContacts });
      }
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
            value={contactsState.searchValue}
            onChange={(text) => searchContactsByName(text)}
            // onChangeText={(text) => setContactsState({ ...contactsState, searchValue: text })}
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
      <ScrollView>
        {
          contactsState.contacts.map(contact => (
            <TouchableOpacity style={styles.contactView} key={contact.id}>
              <View style={styles.initialsView}>
                <Text style={styles.initialsText}>{contact.firstName[0]}</Text>
              </View>
              <View>
                <Text style={styles.nameStyle}>{contact.firstName}</Text>
                <Text style={styles.phoneNumberStyle}>{contact.phoneNumbers[0].number}</Text>
              </View>
              <Text style={styles.phoneNumberType}>
                {
                  contact.phoneNumbers.length > 1 ?
                  'Multiple' :
                  contact.phoneNumbers[0].label
                }
              </Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  )
}

SearchContacts.navigationOptions = {
  header: null
}

export default SearchContacts;
