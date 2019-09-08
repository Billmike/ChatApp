import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  FlatList,
  StatusBar,
  Alert
} from 'react-native';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

const CHAT_DATA = [
  {
    id: '1',
    username: 'Channel',
    message: 'Username: An existing app',
    time: '14:52',
    unread: 3,
    profileImage: require('../assets/images/profile1.jpeg'),
    online: true
  },
  {
    id: '2',
    username: 'Priscilla',
    message: 'Username: An existing app',
    time: '14:52',
    profileImage: require('../assets/images/profile2.jpeg'),
    online: false
  },
  {
    id: '3',
    username: 'Michael',
    message: 'Username: An existing app',
    time: '14:52',
    profileImage: require('../assets/images/profile3.jpeg'),
    online: false
  },
  {
    id: '4',
    username: 'Samuel',
    message: 'Username: An existing app',
    time: '14:52',
    unread: 2,
    profileImage: require('../assets/images/profile4.jpeg'),
    online: true
  },
  {
    id: '5',
    username: 'Channel',
    message: 'Username: An existing app',
    time: '14:52',
    profileImage: require('../assets/images/profile5.jpeg'),
    online: false
  }
]

const renderChats = ({
  id,
  username,
  message,
  time,
  unread,
  profileImage,
  online
}, navigate) => (
    <TouchableOpacity
      key={id}
      style={styles.chatWrapper}
      onPress={() => navigate('Conversation')}
    >
      <View>
        <Image
          source={profileImage}
          style={{
            marginRight: 15,
            width: 50,
            height: 50,
            borderRadius: 25
          }}
        />
        {online && <View style={styles.onlineNotif} />}
      </View>
      <View>
        <Text style={styles.nameTextStyle}>{username}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View style={styles.displayTimeWrapper}>
        <Text style={{ color: '#9FA1AA' }}>{time}</Text>
        {unread && <View style={styles.newMessagesCount}>
          <Text style={{ textAlign: 'center', color: '#FFF' }}>{unread}</Text>
        </View>}
      </View>
    </TouchableOpacity>
)

const renderFlatList = (label, navigate) => (
  <FlatList
    data={CHAT_DATA}
    tabLabel={label}
    renderItem={({ item, index }) => (
      renderChats(item, navigate)
    )}
    keyExtractor={(i, x) => x.toString()}
  />
)

const getContacts = async () => {
  const time = Date.now();
  console.log('permissions!?')
  const permission = await Permissions.askAsync(Permissions.CONTACTS);
  if (permission !== 'granted') { return }
  const contacts = await Contacts.getContactsAsync({
    fields: [
      Contacts.PHONE_NUMBERS
    ]
  });
  console.log('contacts', contacts);
}

export default function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F6F8FA" />
      <View style={styles.searchWrapper}>
          <Image
            source={require('../assets/images/profile2.jpeg')}
            style={[styles.profileImage, { borderRadius: 20 }]}
          />
        <View style={styles.searchSectionWrapper}>
          <Ionicons
            name="ios-search"
            size={20}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search Chat"
            style={styles.searchInputStyle}
          />
        </View>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <ScrollableTabView
            initialPage={0}
            tabBarInactiveTextColor="#C7C8CC"
            tabBarActiveTextColor="#122140"
            tabBarUnderlineStyle={{
              height: 3,
              width: '20%',
              marginLeft: 25,
              borderWidth: 1,
              borderColor: '#636AF7',
              backgroundColor: '#636AF7'
            }}
          >
            <Text tabLabel='Friends'>Coming Sooooooon.</Text>
            {renderFlatList("Chats", navigate)}
            <Text tabLabel='Communities'>Coming Sooooooon.</Text>
          </ScrollableTabView>
      </ScrollView>
      <TouchableOpacity style={styles.fabView} onPress={() => navigate('SearchContacts')}>
        <AntDesign
          name="plus"
          size={25}
          style={styles.plusStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#F6F8FA',
    paddingTop: 15,
    paddingBottom: 25
  },
  searchInputStyle: {
    backgroundColor: 'white',
    width: '60%',
    marginLeft: 15,
    borderRadius: 10,
  },
  searchSectionWrapper: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  searchIcon: {
    padding: 10,
    color: '#CFD0D9',
  },
  profileImage: {
    width: 40,
    height: 40
  },
  chatWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F9',
    paddingBottom: 25
  },
  displayTimeWrapper: {
    marginLeft: 'auto',
  },
  onlineNotif: {
    height: 15,
    width: 15,
    position: 'absolute',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#10CF64',
    left: 40
  },
  nameTextStyle: {
    color: '#021538',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10
  },
  message: {
    color: '#9FA1AA',
    fontSize: 14
  },
  newMessagesCount: {
    backgroundColor: '#636AF7',
    width: 20,
    height: 20,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10
  },
  fabView: {
    backgroundColor: '#636AF7',
    width: 50,
    height: 50,
    borderRadius: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 30,
    marginBottom: 25,
    display: 'flex',
    shadowColor: '#DDDEFF',
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 2
    }
  },
  plusStyle: {
    marginTop: 12,
    alignSelf: 'center',
    color: '#FFF'
  }
});
