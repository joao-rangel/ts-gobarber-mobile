import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0px 30px ${Platform.OS === 'android' ? 10 : 60}px;
  position: relative;
`;

export const ScrollContainer = styled.ScrollView``;

export const BackButton = styled.TouchableOpacity`
  margin: 20px 0 0px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 16px 0 32px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  width: 186px;
  height: 186px;
  border-radius: 98px;

  align-self: center;
`;

export const UserAvatar = styled.Image`
  flex: 1;
  border-radius: 98px;
`;
