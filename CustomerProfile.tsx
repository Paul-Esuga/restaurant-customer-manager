import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Platform, Button, Alert, Switch} from 'react-native';
import CustomerProfile from './CustomerProfile';
import react, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker';

// export  function DateInput() {
//   const [date, setDate] = useState(new Date());
//   const [showPicker, setShowPicker] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowPicker(Platform.OS === 'ios');
//     setDate(currentDate);
//   }
// }

export default function App() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (_:any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  }
  const handlePress = () => {
    Alert.alert('Button Pressed', 'You clicked the button!');
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(prev => !prev)

  const [selectedPayMethod, setSelectedPayMethod] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Form</Text>
      <Text style={styles.description}>First Name</Text>
      <TextInput style={styles.input}></TextInput>      
      <Text style={styles.description}>Last Name</Text>
      <TextInput style={styles.input}></TextInput>      
      <Text style={styles.description}>Middle Name</Text>
      <TextInput style={styles.input}></TextInput>      
      <Text style={styles.description}>Date of Birth</Text>
      <View>
        <Button title='Pick Date' color="#ff2020" onPress={() => setShowPicker(true)} />
          {
            showPicker && (
              <DateTimePicker
                value={date}
                mode='date'
                display='default'
                onChange={onChange}
              />
            )}
      </View>
      {/* <Button title='green button' onPress={handlePress} color={"#34C759"}></Button> */}
      {/* <TextInput style={styles.input}></TextInput>       */}
      <Text style={styles.description}>Home Adress</Text>
      <TextInput style={styles.input}></TextInput>      
      <Text style={styles.description}>Date of Registration</Text>
      <View>
        <Button title='Pick Date' color="#ff2020" onPress={() => setShowPicker(true)} />
          {
            showPicker && (
              <DateTimePicker
                value={date}
                mode='date'
                display='default'
                onChange={onChange}
              />
            )}
      </View>     
      <View>
        <Text style={styles.description}>Developer Boolean Flag</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
        <Button 
        title='Submit' 
        color="#02a120"
        />
      </View>
    </ScrollView>

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
