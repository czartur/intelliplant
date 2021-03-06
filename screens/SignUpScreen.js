import React, { useState } from "react";
import * as Font from "expo-font";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import * as firebase from "firebase";

const logo = { uri: "https://i.ibb.co/tsbwb1X/logo.jpg" };

/*const [loaded] = useFonts({
  SofiaProLight: require('../assets/fonts/sofia-pro-light.otf'),
});*/

const SignUpScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const emailHandler = (enteredText) => {
    setEmail(enteredText);
  };
  const passwordHandler = (enteredText) => {
    setPassword(enteredText);
  };
  const handleRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.errorMessage}>
        {error && email != "" && <Text style={styles.error}>{error}</Text>}
      </View>
      <Image source={logo} style={styles.image} />
      <TextInput style={styles.inputBox} placeholder="Nome Completo" />
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        onChangeText={emailHandler}
        value={email}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.inputBox}
        placeholder="Senha"
        onChangeText={passwordHandler}
        value={password}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.inputBox}
        placeholder="Confirmar Senha"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text> Fazer Cadastro </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdfeff",
  },
  inputBox: {
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#73C6D8",
    width: "80%",
    height: 40,
    margin: 8,
    fontFamily: "sofia-pro",
  },
  button: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5DAE22",
    borderRadius: 4,
    height: 30,
    width: "80%",
  },
  errorMessage: {
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: "20%",
    resizeMode: "contain",
  },
});
export default SignUpScreen;
