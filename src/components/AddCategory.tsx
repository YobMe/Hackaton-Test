import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Card, Button, Dialog } from '@rneui/themed'
import { InputOutline } from 'react-native-input-outline';
import {Fields} from './Fields';
import { getData, storeData } from '../utils/data-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../reduxToolkit/features/categorySlice';


type Props = {}

const AddCategory = (props: Props) => {
 const dispatch = useDispatch();
 const { categories } = useSelector((state:any) => state.category);
 const [visible, setVisible] = useState(false);
 const [categoryName, setCategoryName] = useState('');
 const [fields, setFields] = useState([{fieldName:'',type:'TEXT'}]);



 const types: Array<any>  = [
    {name:'Text',value: 'TEXT'},
    {name:'Checkbox',value: 'CHECKBOX'},
    {name:'Date',value: 'DATE'},
    {name:'Number',value: 'NUMBER'},
];

 const handleDelete = (indx:number) => {
     console.log('name: ', indx);
     setFields((prev:any) => {
       if (indx > -1) {
         return  prev.splice(indx, 1); 
       }
    })
 }

 

 const handleChange = (indx:number,val:string) => {
        console.log('index: ',indx,'val: ',val);
        setFields(prev => prev.map((item,index) => (index === indx) ? {fieldName: val ,type: item.type} : item ))
        
        console.log('categoryName: ',categoryName,'fields: ',fields);
         storeData(categoryName,fields);
    }

    const getSavedData = async() => {
        const data = await getData("categories");
        if(data != null){
            dispatch(setCategories(data));
         }
    }



  return (
    <>
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>FONTS</Card.Title>
        <InputOutline
            onChangeText={newText => {
                setCategoryName(newText);
                const isExist = categories.includes(categoryName);
                if(isExist){
                    const removePrev = categories.filter((item:any) => item!= categoryName)
                    const updated = [...removePrev,categoryName];
                    if(updated.length >=1){ storeData('categories',updated); }
                }else{
                    const updated = [...categories,categoryName];
                    if(updated.length >=1){ storeData('categories',updated); }
                    getSavedData();
                }
            }}
            value={categoryName}
            placeholder='Category Name'
        />
        {fields.map((item,index) => <Fields key={index} index={index} fieldName={item.fieldName} type={item.type} deleteField={handleDelete} changeField={handleChange}/> )}
        

        <Button
          title={'TITLE FIELD: MODEL'}
          style={{}}
          containerStyle={{}}
          onPress={() => {
            console.log('presses',fields);
            
          }}
        />
        <View style={{
            flex: 1,
            padding: 20,
            flexDirection: 'row'}}>
        <Button
            title="Add New Field"
            onPress={() => {setVisible(!visible)}}
        />
         <Button
            title="Delete"
            onPress={() => {}}
        />
        </View>
        <Dialog
          isVisible={visible}
          onBackdropPress={() => {setVisible(!visible)}}
          >
        <FlatList
            data={types}
            renderItem={({item}) => <Text 
                onPress={() => {
                  //setType(item)
                  setFields(prev => [...prev,{fieldName:'',type:item.value}])
                  setVisible(!visible)
                 }
                } 
              style={styles.listItem}>{item.name}
             </Text>}
        />
      </Dialog>
      </Card>
    </>
  )
}

export default AddCategory

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });