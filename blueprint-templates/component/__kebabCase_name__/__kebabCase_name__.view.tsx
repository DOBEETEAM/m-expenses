import React from 'react'
import {Text, View} from 'react-native'
import { {{pascalCase name}}Props } from './{{kebabCase name}}.type'
import {styles} from './{{kebabCase name}}.style'

const _{{pascalCase name}}: React.FC<{{pascalCase name}}Props> = () => {
  return (
    <View>
      <Text>{{pascalCase name}}</Text>
    </View>
  )
}

export const {{pascalCase name}} = React.memo(_{{pascalCase name}})
