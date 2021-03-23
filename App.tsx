import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

const Example = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity testID='alert' onPress={() => Alert.alert("teste")}>
        <Text>CLIQUE AQUI</Text>
      </TouchableOpacity>
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
    marginHorizontal: 10,
    backgroundColor: '#e3e3e3',
  },
});

export default Example;