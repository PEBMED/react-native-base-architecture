import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.highlight}>
            Nome
          </Text>
          <TextInput style={styles.input} />
          <Text style={styles.highlight}>
            E-mail
          </Text>
          <TextInput style={styles.input} />
          <Pressable style={styles.button}>
            <Text style={styles.highlight}>
              AQUI
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#e3e3e3',
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#e3e3e3',
  },
});

export default App;
