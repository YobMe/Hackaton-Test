import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';
import { useSavedData } from '../hooks/useSavedData';
import { useSelector } from 'react-redux';

type Props = {}


const CustomDrawer = (props: Props) => {
    const navigation = useNavigation();
    useSavedData();
    const { categories } = useSelector((state:any) => state.category);

    const handlePress = () => {   
        navigation.navigate("Category");
    }
    
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
            {categories.map((item:any,index:any) => <DrawerItem key={index} label={item} onPress={() => { 
                navigation.navigate("ItemView",{item})
            }} /> )}
              <DrawerItem label='Category' onPress={handlePress} />
            </DrawerContentScrollView>
            <View>
                <Text>Our Custom Text</Text>
            </View>
        </View>

    )
}

export default CustomDrawer