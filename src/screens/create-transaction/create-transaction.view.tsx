import React from 'react'
import { Text, View } from 'react-native'
// @types
import { CreateTransactionProps } from './create-transaction.type'
// @styles
import {styles} from './create-transaction.style'
import { Container, NavBar } from '@components/base'
import { useCreateTransactionStyle } from './create-transaction.hook'

const _CreateTransaction: React.FC<CreateTransactionProps> = ({navigation, route}) => {
  const {transactionCategory} = route.params
  const {navBarStyle} = useCreateTransactionStyle({transactionCategory})


  return (
    <Container flex style={[navBarStyle]} >
      <NavBar back title={transactionCategory} containerStyle={[navBarStyle]} />

      <Text>{transactionCategory}</Text>
    </Container>
  )
}

export const CreateTransaction = React.memo(_CreateTransaction)
