import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAU-j2COdZHfLtn4tBI0Kzogs2E5mXdALQ",
      authDomain: "configuracaofirebasereac-5c0ae.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-5c0ae.firebaseio.com",
      projectId: "configuracaofirebasereac-5c0ae",
      storageBucket: "configuracaofirebasereac-5c0ae.appspot.com",
      messagingSenderId: "56789860439"
    };
    firebase.initializeApp(config);
  }

  render() {
    return(
      <View>
        <Text>Meu App</Text>
      </View>
    );
  }
}

export default App;