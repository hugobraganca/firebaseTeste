import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { pontuacao:0 }
  }

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

  salvarDados() {
    var funcionarios = firebase.database().ref("funcionarios");
    //database.ref("pontuacao").remove();
    funcionarios.push().set(
      {
        nome: "Bragança",
        altura: "1,70",
        peso: "85kg"
      }
    );
    //funcionarios.remove();

  }

  listarDados() {
    var pontuacao = firebase.database().ref("pontuacao");
    pontuacao.on('value', (snapshot) => {
      var pontos = snapshot.val();
      this.setState( {pontuacao: pontos} );
    } );
  }

  render() {

    let {pontuacao} = this.state;

    return(
      <View>
        <Button 
          onPress={ () => {this.salvarDados(); } }
          title="Salvar dados"
          color="#841584"
          accessibilityLabel="Salvar dados"
        />

        <Button 
          onPress={ () => {this.listarDados(); } }
          title="Listar dados"
          color="#841584"
          accessibilityLabel="Listar dados"
        />
        <Text>{pontuacao}</Text>
      </View>
    );
  }
}

export default App;