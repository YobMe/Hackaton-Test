import React from 'react'
import { View, ScrollView, StyleSheet, Image } from 'react-native'
import { Input, Text, Card, Button, Icon } from '@rneui/themed';
import AddCategory from '../components/AddCategory';

type Props = {}

 
const Category = (props: Props) => {
  return (
    <>
    <ScrollView>
      <View style={styles.container}>

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