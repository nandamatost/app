import React from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import style from './styles';
import gato from './../../assets/Imagem-Gato-PNG.png';

const Login = () => {
  return (
  <View style={style.container}>
    <Image source={gato} style={style.gato}/>
        <TextInput style={style.TextInput}/>
        <TextInput style={style.TextInput}/>

        <TouchableOpacity>
            <Text style={style.text}>
                Entrar :)
            </Text>
        </TouchableOpacity>

        <Text style={style.text}>Esqueci minha senha</Text>
  </View>
  )
};

export default Login;
