import React from 'react'
import { Text, View } from 'react-native'
import { SignUpProps } from './sign-up.type'
import {styles} from './sign-up.style'

const _SignUp: React.FC<SignUpProps> = () => {
  return (
    <View>
      <Text>SignUp</Text>
    </View>
  )
}

export const SignUp = React.memo(_SignUp)
