import React from 'react'
import { Text, View } from 'react-native'
// @types
import { TransactionHistoryProps } from './transaction-history.type'
// @styles
import {styles} from './transaction-history.style'

const _TransactionHistory: React.FC<TransactionHistoryProps> = () => {
  return (
    <View>
      <Text>TransactionHistory</Text>
    </View>
  )
}

export const TransactionHistory = React.memo(_TransactionHistory)
