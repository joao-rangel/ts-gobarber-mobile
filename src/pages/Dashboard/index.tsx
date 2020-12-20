import React, { useCallback, useEffect, useState } from 'react';
import { Button, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <>
      <StatusBar backgroundColor="#28262e" />

      <Container>
        <Header>
          <HeaderTitle>
            Bem vindo,
            {'\n'}
            <UserName>{user.name}</UserName>
          </HeaderTitle>

          <ProfileButton onPress={navigateToProfile}>
            <UserAvatar source={{ uri: user.avatar_url }} />
          </ProfileButton>
        </Header>
        <Button title="Sair" onPress={signOut} />
      </Container>
    </>
  );
};

export default Dashboard;
