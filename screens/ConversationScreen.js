import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingLeft: 15,
    paddingRight: 15
  },
  searchView: {
    display: 'flex',
    flexDirection: 'row'
  },
  nameText: {
    fontSize: 17,
    fontWeight: '600'
  },
  dateText: {
    textTransform: 'uppercase',
    fontSize: 13,
    marginTop: 15,
    color: '#C2C4CF',
    textAlign: 'center',
    fontWeight: '600'
  }
})

class Conversation extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation: { goBack } } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#F6F8FA', }}>
        <View style={styles.headerStyle}>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons
              name="ios-arrow-back"
              size={20}
              style={{
                color: '#ACAEBD'
              }}
            />
          </TouchableOpacity>
          <Text style={styles.nameText}>Sandy</Text>
          <View style={styles.searchView}>
            <Ionicons
              name="ios-search"
              size={20}
              style={{
                marginRight: 10,
                color: '#ACAEBD'
              }}
            />
            <Entypo
              name="dots-three-horizontal"
              size={20}
              style={{
                color: '#ACAEBD'
              }}
            />
          </View>
        </View>
        <ScrollView>
          <Text style={styles.dateText}>Sept 16th, 12:30</Text>
        </ScrollView>
      </View>
    )
  }
}

export default Conversation;
