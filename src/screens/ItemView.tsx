import { StyleSheet, Text, View } from 'react-native'
import React ,{FC, useState,useEffect} from 'react'
import { getData } from '../utils/data-storage';

type Props = {
  route: any;
}

const ItemView: FC<Props> = (props: Props) => {
  const key = props?.route?.params.item;
  const [model,setModel] = useState([]);

  useEffect(() => {
    getModel(); 
  }, [])

  const getModel = async () => {
    console.log('key', key);
    
    const data = await getData(key);
    console.log("🚀 ~ file: ItemView.tsx:19 ~ getModel ~ data", data)
    if(data != null){
      setModel(data);
     }
  }
  
  return (
    <View>
      <Text>ItemView</Text>
    </View>
  )
}

export default ItemView

const styles = StyleSheet.create({})