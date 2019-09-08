import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  headerStyle: {
    paddingTop: 50,
    paddingRight: 15,
    paddingLeft: 15
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
  }
})

const SearchContacts = ({ navigation }) => {
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
        <View>
          <Text>To</Text>
        </View>
      </View>
    </View>
  )
}

SearchContacts.navigationOptions = {
  header: null
}

export default SearchContacts;
