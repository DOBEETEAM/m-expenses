import React from 'react';
import {Text, View} from 'react-native';
// @types
import {HomeProps} from './home.type';
// @components
import {Container} from '@components/base';
// @styles
import {styles} from './home.style';

const _Home: React.FC<HomeProps> = () => {
  return (
    <Container flex safeLayout noBackground>
      <Text>hjkdfks</Text>
    </Container>
  );
};

export const Home = React.memo(_Home);
