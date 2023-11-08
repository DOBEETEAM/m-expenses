import React from 'react'
import { Text, View } from 'react-native'
import { AppIntroProps } from './app-intro.type'
import {styles} from './app-intro.style'

const _AppIntro: React.FC<AppIntroProps> = () => {
  return (
    <View>
      <Text>AppIntro</Text>
    </View>
  )
}

export const AppIntro = React.memo(_AppIntro)
