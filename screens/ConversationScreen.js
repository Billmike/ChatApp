import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

const styles = StyleSheet.create({
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingLeft: 25,
    paddingRight: 25
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
  },
  chatWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 15
  },
  chatTextStyle: {
    backgroundColor: '#FFF',
    marginLeft: 15,
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    borderRadius: 10,
    zIndex: 2,
    shadowColor: '#E7E9ED',
    shadowOffset: {
      width: 2,
      height: 5
    },
    shadowOpacity: 0.7
  },
  bubble: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFF',
    position: 'absolute',
    width: 0,
    height: 0,
    transform: [
      {rotate: '105deg'}
    ],
    bottom: -8,
    marginLeft: 16,
    borderRadius: 6,
    shadowColor: '#E7E9ED',
    shadowOffset: {
      width: 2,
      height: 5
    },
    shadowOpacity: 0.7
  }
})

class Conversation extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#F6F8FA', }}>
        <View style={styles.headerStyle}>
          <TouchableOpacity onPress={() => navigate('Home')}>
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
          <View style={styles.chatWrapper}>
            <Image
              source={require('../assets/images/profile4.jpeg')}
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                marginTop: 25
              }}
            />
            <View>
              <View style={styles.chatTextStyle}>
                <Text style={{ flex: 1, flexWrap: 'wrap' }}>
                  Kudos to Ivan for writing it from scratch. Thanks
                </Text>
              </View>
              <View style={styles.bubble} />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Conversation;
