import React from 'react';
import { View, Button, Text } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 200,
          color: '#fff',
          fontSize: 30,
        }}
      >
        Dashboard
      </Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
