import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

class Conversation extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View>
        <View>
          <Ionicons
            name="ios-arrow-back"
            size={20}
          />
          <Text>Sandy</Text>
          <View>
            <Ionicons
              name="ios-search"
              size={25}
            />
            <Entypo
              name="dots-three-horizontal"
              size={20}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Conversation;
