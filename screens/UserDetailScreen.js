// UserDetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

export default function UserDetailScreen({ route }) {
  const { userId } = route.params;
  const [user, setUser] = useState(null);

  const fetchUserDetail = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      const data = await response.json();
      if (response.ok) {
        setUser(data.data);
      } else {
        console.log('Erro ao carregar detalhes do usuário');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  if (!user) return <Text>Carregando...</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Image source={{ uri: user.avatar }} style={{ width: 100, height: 100, borderRadius: 50 }} />
      <Text>Nome: {user.first_name} {user.last_name}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
}


