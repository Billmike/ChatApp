import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchContacts = () => {
  return (
    <View>
      <View>
        <View>
          <Ionicons
            name={Platform.OS === 'ios' ?
              'ios-arrow-round-back' :
              'md-arrow-back'
            }
            size={25}
          />
          <Text>New Conversation</Text>
        </View>
      </View>
    </View>
  )
}

export default SearchContacts;
