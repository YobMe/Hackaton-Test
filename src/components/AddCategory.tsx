import { View, Text } from 'react-native'
import React from 'react'
import { Card, Button } from '@rneui/themed'

type Props = {}

const AddCategory = (props: Props) => {
  return (
    <>
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>FONTS</Card.Title>
        <Card.Divider />
        <Button
          title={'TITLE FIELD: MODEL'}
          style={{}}
          containerStyle={{}}
          onPress={() => {
            console.log('presses');
            
          }}
        />
      </Card>
    </>
  )
}

export default AddCategory