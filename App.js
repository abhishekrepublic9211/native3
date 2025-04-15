import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/component/Home';
import Form from './src/component/Form';
import BootSplash from "react-native-bootsplash";
import FirstPage from './src/component/FirstPage';

const Stack = createStackNavigator();

const App = () => {

  // useEffect(() => {
  //   const init = async () => {
  //     // …do multiple sync or async tasks
  //   };

  //   init().finally(async () => {
  //     await BootSplash.hide({ fade: true });
  //     console.log("BootSplash has been hidden successfully");
  //   });
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     BootSplash.hide({ fade: true });
  //     console.log("Splash hidden");
  //   }, 3000);
  // }, []);
  



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Form" component={Form} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
