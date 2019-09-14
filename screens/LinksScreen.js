import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

// actions
import { signupRequest, signupSuccessAction } from '../redux/reducers/user';

class SignupScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    username: '',
    phoneNumber: ''
  }

  onSignup = () => {
    const { username, phoneNumber } = this.state;
    const userData = { username, phoneNumber }
    const { success } = this.props.signupSuccessAction(userData);
    if (success) {
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    const { isLoading } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.joinText}>Join us</Text>
        <TextInput
          placeholder="Username"
          keyboardType="default"
          style={styles.inputStyle}
          placeholderTextColor="#C7C7C7"
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          style={styles.inputStyle}
          placeholderTextColor="#C7C7C7"
          onChangeText={(text) => this.setState({ phoneNumber: text })}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onSignup}>
          <Text style={styles.buttonTextStyle}>Join</Text>
        </TouchableOpacity>
        {isLoading && <ActivityIndicator
          size="large"
        />}
      </ScrollView>
    )
  }
}

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

const mapStateToProps = ({ user }) => ({
  isLoading: user.isLoading
})

export default connect(mapStateToProps, { signupSuccessAction })(SignupScreen)
