import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

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

  cadastrarUsuario() {
    var email = "hugobraganca94@gmail.com";
    var senha = "123456";

    const usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(
      email,
      senha
    ).catch(
      (erro) => {
        var messagemErro = "";
        if( erro.code == "auth/weak-password") {
          messagemErro = "A senha precisa ter no mínimo 6 caracteres!"
        }
        //erro.code, erro.message
        alert( messagemErro );
      }
    );
  }

  verificarUsuarioLogado() {

    const usuario = firebase.auth();

    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if( usuarioAtual ) {
          alert("Usuário está logado");
        }else {
          alert("Usuário não está logado");
        }
      }
    );


    // const usuarioAtual = usuario.currentUser;

    // if( usuarioAtual ) {
    //   alert("Usuário está logado");
    // }else {
    //   alert("Usuário não está logado");
    // }

  }

  render() {

    return(
      <View>
        <Button 
          onPress={ () => {this.cadastrarUsuario(); } }
          title="Cadastrar Usuário"
          color="#841584"
          accessibilityLabel="Cadastrar Usuário"
        />

        <Button 
          onPress={ () => {this.verificarUsuarioLogado(); } }
          title="Verificar usuário logado"
          color="#841584"
          accessibilityLabel="Verificar usuário logado"
        />
      </View>
    );
  }
}

export default App;