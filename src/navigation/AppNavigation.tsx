import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { StateContext } from '../provider/provider';
import About from '../screens/About/About';
import NewPatient from '../screens/NewPatient/NewPatient';
import PrivacyPolicies from '../screens/PrivacyPolicies/PrivacyPolicies';
import Register from '../screens/Register/Register';
import RegisterPatient from '../screens/RegisterPatient/RegisterPatient';
import Results from '../screens/Results/Results';
import Test from '../screens/Test/Test';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const { user } = useContext(StateContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? 'NewPatient' : 'Register'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={'Register'} component={Register} />
        <Stack.Screen name={'About'} component={About} />
        <Stack.Screen name={'PrivacyPolicies'} component={PrivacyPolicies} />
        <Stack.Screen name={'NewPatient'} component={NewPatient} />
        <Stack.Screen name={'RegisterPatient'} component={RegisterPatient} />
        <Stack.Screen name={'Test'} component={Test} />
        <Stack.Screen name={'Results'} component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
