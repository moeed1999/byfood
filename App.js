import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Homepage from '../login/components/homepage/index';
// import Login from '../login/components/loginscreen/index';
import Signup from './components/signup';
import ProfileScreen from './components/profile';
import HomeScreen from './components/mainpage';

// const AuthStack = createStackNavigator();

// import Signup from './components/signup';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      
      {/* <Homepage /> */}
      
      {/* <Login /> */}
      {/* <Signup/> */}
      {/* <ProfileScreen/> */}
      <HomeScreen/>
       
       {/* <NavigationContainer>
       <AuthStack.Navigator>

          <AuthStack.Screen  name="Login" component="Login"  />
          <AuthStack.Screen  name="Signup" component="Signup"  />
          

       </AuthStack.Navigator>

       </NavigationContainer> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  

});
