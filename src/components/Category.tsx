import React from 'react'
import { View, ScrollView, StyleSheet, Image } from 'react-native'
import { Input, Text, Card, Button, Icon } from '@rneui/themed';
import AddCategory from './AddCategory';

type Props = {}


const handleChange = ():void => {
  console.log('12345');
  
}
 
const Category = (props: Props) => {
  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>FONTS</Card.Title>
          <Card.Divider />
          <Text style={styles.fonts} h1>
            h1 Heading
          </Text>
          <Text style={styles.fonts} h2>
            h2 Heading
          </Text>
          <Text style={styles.fonts} h3>
            h3 Heading
          </Text>
          <Text style={styles.fonts} h4>
            h4 Heading
          </Text>
          <Text style={styles.fonts}>Normal Text</Text>
        </Card>

        <AddCategory />
        
      </View>
    </ScrollView>
    <View>
       <Button
          title={'Add New Category'}
          onPress={() => {
            console.log('presses');
            
          }}
            />
        </View>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  });

export default Category