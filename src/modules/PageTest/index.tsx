import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  View,
  TextInput,
} from 'react-native';

const App = () => {
  const [login, setLogin] = React.useState({ email: '', password: '' });

  const change = (i: string, e: string) => setLogin({ ...login, [i]: e });
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.contain}>
        <View style={styles.texts}>
          <Text style={styles.title}>
            Acesse sua conta e tenha os melhores conteúdos de Enfermagem.
          </Text>
          <Text style={styles.text}>
            Caso você já tenha cadastrado em algum produto da PEBMED (Whitebook
            ou Portal), basta acessar com seu login e senha.
          </Text>
          <View style={styles.inputs}>
            <TextInput
              testID="email"
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#000"
              onChangeText={text => change('email', text)}
              autoCompleteType="email"
              autoCapitalize="none"
              value={login.email}
            />
            <TextInput
              testID="password"
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#000"
              secureTextEntry={true}
              onChangeText={text => change('password', text)}
              autoCapitalize="none"
              value={login.password}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            testID="button"
            onPress={() => Alert.alert(JSON.stringify(login))}
            style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContain}>
            <Text style={styles.textButton}>Esqueci a senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContain}>
            <Text style={styles.textButton}>
              Ainda com problemas? Clique aqui
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  contain: {
    paddingHorizontal: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  texts: {
    marginTop: 50,
    width: '100%',
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  inputs: {
    width: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b5',
    marginTop: 20,
    paddingVertical: 10,
    fontSize: 14,
  },
  buttons: {
    width: '100%',
  },
  button: {
    backgroundColor: '#46106b',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  textContain: {
    width: '100%',
  },
  textButton: {
    color: '#46106b',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
  },
});

export default App;
