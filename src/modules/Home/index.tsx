import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('pageTest')}
        style={{
          width: 100,
          height: 50,
          backgroundColor: '#999',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
