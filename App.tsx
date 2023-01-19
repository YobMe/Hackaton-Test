import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { store } from "./src/reduxToolkit/store"
import ItemList from './src/components/ItemList';
import Category from './src/screens/Category';
import CustomDrawer from './src/navigation/CustomDrawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ItemView from './src/screens/ItemView';

const Drawer = createDrawerNavigator();

export default function App() {

return (
  <Provider store={store}>
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
          <Drawer.Screen name="ItemView" component={ItemView} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
);
}
