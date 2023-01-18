import React , {FC} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Category from '../components/Category';
import ItemView from '../components/ItemView';

const Drawer = createDrawerNavigator();

type Props = { }

export const MyDrawer: FC<Props> = ({}) => {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Category">
        <Drawer.Screen 
            name="Category" 
            component={Category} 
            options={{ drawerLabel: 'Category' }}
            />
        <Drawer.Screen 
            name="ItemView"
            component={ItemView} 
            options={{ drawerLabel: 'ItemView' }}
            />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}