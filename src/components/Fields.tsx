import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {FC, useState} from 'react'
import { InputOutline, InputStandard } from 'react-native-input-outline';
import IonicIcon from "react-native-vector-icons/Ionicons";

type IFieldsProps = {
  index: any;
  fieldName: string;
  type: string;
  deleteField: (fieldName: number) => void;
  changeField: (indx:number,fieldName: string) => void;
}

export const Fields: FC<IFieldsProps> = ({fieldName,type,deleteField,index,changeField}) => {
  const [value, setValue] = useState(fieldName)

  const handleClick = () => {
    deleteField(index);
  }

  const handleChange = (index:number,val:string) => {
     setValue(val)
     changeField(index,val)
  }


  return (
    <View style={styles.fieldContainer}>
      <InputOutline 
        value={value} 
        placeholder={'Field'}
        style={{width:'60%'}}
        onChangeText = {newText => handleChange(index,newText)}
        // onChangeText={newText => setValue(newText)}
        // onBlur={() => handleChange(index,value)}
        /> 
      <Text style={{margin: 10}}>{type}</Text>
      <TouchableOpacity style={{margin: 20}} onPress={handleClick}>
       <IonicIcon
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  fieldContainer: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
  },
});