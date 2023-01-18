import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ItemList from './src/components/ItemList';
import Category from './src/components/Category';
import CustomDrawer from './src/navigation/CustomDrawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const Drawer = createDrawerNavigator();

const handleClick = () => {
  console.log('1111111111111111');
  
}

export default function App() {
return (
  <SafeAreaProvider>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer />}
        screenOptions={{
          drawerActiveTintColor: '#aa18ea',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}>
        <Drawer.Screen name="Category" component={Category} />
      </Drawer.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
}
