import React from 'react'
import { Text, View } from 'react-native'
// @types
import { BudgetProps } from './budget.type'
// @styles
import {styles} from './budget.style'

const _Budget: React.FC<BudgetProps> = () => {
  return (
    <View>
      <Text>Budget</Text>
    </View>
  )
}

export const Budget = React.memo(_Budget)
