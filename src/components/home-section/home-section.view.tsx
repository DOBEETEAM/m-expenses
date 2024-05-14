import React, {useCallback, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {HomeSectionProps} from './home-section.type';
import {TypographyType} from '@resources/theme';
import {useTheme} from '@shared/hooks';
import {Container, Typography, Button} from '@components/base';
import {styles} from './home-section.style';
import {hexToRgba} from '@utils/color';

const _HomeSection: React.FC<HomeSectionProps> = ({children, title, renderTitle, containerStyle}) => {
  const {theme} = useTheme();

  const buttonSeeAll = useMemo(
    () => ({
      backgroundColor: theme.color.primary5,
      paddingVertical: 5,
      paddingHorizontal: 16,
      height: 32,
      borderRadius: theme.layout.borderRadiusHuge,
    }),
    [theme],
  );

  return (
    <Container noBackground>
      <Container noBackground flex row centerVertical style={styles.container}>
        {
          renderTitle ? renderTitle() : (
            <Typography type={TypographyType.TITLE_LARGE} style={{fontWeight: '600'}}>{title}</Typography>
          )
        }
        <Button
          style={buttonSeeAll}
          title="See All"
          typoProps={{type: TypographyType.LABEL_MEDIUM_PRIMARY}}
        />
      </Container>

      {children && children}
    </Container>

  );
};

export const HomeSection = React.memo(_HomeSection);
