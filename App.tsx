import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Platform, Button, Alert, Switch} from 'react-native';
import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'

import CustomerProfile from './CustomerProfile';
import OrderHistory from './OrderHistory'
import { createAnimatedComponent } from 'react-native-reanimated/lib/typescript/createAnimatedComponent';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='CustomerProfile' component={CustomerProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    // alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 50,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 6,
    fontFamily: 'Calibri',
    verticalAlign: 'middle',
    paddingTop: 30,
    // paddingBottom: 100
  },
  auto: {
    height: 4,
    width: 10,
    borderWidth: 2,
    backgroundColor: '#0f0'
  },
  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    marginBottom: 20,
    paddingTop: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    height: '8%',
    width: '80%',
    marginBottom: 20,
    borderStyle: 'solid',
    borderColor: 'rgb(120, 120, 120)',
    paddingRight: 15,
  },
  description: {
    display: 'flex',
    fontSize: 20,
    marginBottom: 6,
    textAlign: 'left',
    color: 'rgb(175, 31, 31)',
    fontWeight: 500
  }, 
  picker: {
    width: '90%',
    height: '50%',
    backgroundColor: 'gray'

  }
});
