// SettingsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Configurações</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
