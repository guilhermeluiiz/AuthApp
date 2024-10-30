// UsersScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';

export default function UsersScreen({ navigation, route }) {
  const { email, password, token } = route.params;
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=1', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        setUsers(data.data);
      } else {
        console.log('Erro ao carregar usuários');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Lista de Usuários</Text>
      <Button title="Configurações" onPress={() => navigation.navigate('Settings')} />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('UserDetail', { userId: item.id })}>
            <View style={{ padding: 10 }}>
              <Text>{item.first_name} {item.last_name}</Text>
              <Text>{item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}





