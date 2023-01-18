import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native';
import Category from '../components/Category';

import type {
    CompositeNavigationProp,
    RouteProp,
  } from '@react-navigation/native';

type Props = {}

const categories: any = [
    {
        'Car': {
            coror: 'red',
            brand: 'Tesla'
        }
    },
    {
        'TV': {
            'weight': '32kg',
            'isNew': true,
            'age': 5
        }
    }
];


const CustomDrawer = (props: Props) => {
    const navigation = useNavigation();

    const handlePress = () => {   
        navigation.navigate("Category");
    }
    
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
              {categories.map((item:any,index:any) => <DrawerItem key={index} label={Object.keys(item)[0].toString()} onPress={() => { }} /> )}
              <DrawerItem label='Category' onPress={handlePress} />
            </DrawerContentScrollView>
            <View>
                <Text>Our Custom Text</Text>
            </View>
        </View>

    )
}

export default CustomDrawer