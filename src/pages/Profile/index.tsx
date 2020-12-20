import React from 'react';
import { View, Text } from 'react-native';

const Profile: React.FC = () => {
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
        Profile
      </Text>
    </View>
  );
};

export default Profile;
