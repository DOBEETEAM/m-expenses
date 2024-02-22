import React from 'react'
import { Text, View } from 'react-native'
// @types
import { ProfileProps } from './profile.type'
// @styles
import {styles} from './profile.style'

const _Profile: React.FC<ProfileProps> = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export const Profile = React.memo(_Profile)
