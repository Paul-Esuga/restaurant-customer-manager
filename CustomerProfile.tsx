import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Platform, Button, Alert, Switch, TouchableOpacity, Image} from 'react-native';
import CustomerProfile from './CustomerProfile';
import react, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker';
// import images from './assets/images.png'

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

    const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.images}>
        {/* <Text style={styles.description}>Chef Marias Kitchen</Text> */}
        <Image
        source={require('./assets/images.png')}
        style={{
          width: 100,
          height: 100,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 30,
          marginRight: 30
          // backgroundColor: 'beige'
        }}
        />
      </View>
      <Text style={styles.description}>First Name</Text>
      <TextInput style={styles.input} placeholder='Enter first name'></TextInput>      
      <Text style={styles.description}>Last Name</Text>
      <TextInput style={styles.input} placeholder='Enter surname'></TextInput>      
      <Text style={styles.description}>Middle Name</Text>
      <TextInput style={styles.input} placeholder='Enter middle name (optional'></TextInput>      
      <Text style={styles.description}>Date of Birth</Text>
      <View style={styles.datePickerContainer}>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowPicker(true)}
        >
          <Text style={styles.datePickerIcon}>📅</Text>
          <Text style={styles.datePickerText}>
            {formatDate(date)}
          </Text>
        </TouchableOpacity>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode='date'
            display='default'
            onChange={onChange}
          />
        )}
      </View>
      <Text style={styles.description}>Home Adress</Text>
      <TextInput style={styles.input} placeholder='Enter complete home address'></TextInput>      
      <Text style={styles.description}>Date of Registration</Text>
      
      <View style={styles.datePickerContainer}>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowPicker(true)}
        >
          <Text style={styles.datePickerIcon}>📅</Text>
          <Text style={styles.datePickerText}>
            {formatDate(date)}
          </Text>
        </TouchableOpacity>
        {showPicker && (
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
        <View style={styles.devFlag}>
          <Text style={styles.devNum}>24120112061</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
        <View style={styles.datePickerContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => setShowPicker(true)}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 50,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: 6,
    fontFamily: 'Calibri',
    verticalAlign: 'middle',
    paddingTop: 20,
    paddingBottom: 5
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
    fontSize: 25,
    marginBottom: 15,
    paddingTop: 20,
    color: 'rgb(204, 10, 10)',
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    height: '6%',
    width: '75%',
    marginBottom: 8,
    borderStyle: 'solid',
    borderColor: 'rgb(120, 120, 120)',
    paddingRight: 9,
    paddingLeft: 8,
    paddingVertical: 3,
    color: 'rgb(80, 80, 80)'
  },
  description: {
    display: 'flex',
    fontSize: 14,
    marginBottom: 3,
    textAlign: 'left',
    color: 'rgb(175, 31, 31)',
    fontWeight: 500
  }, 
  picker: {
    width: '90%',
    height: '50%',
    backgroundColor: 'gray'
  },
  datePickerContainer: {
    marginBottom: 20,
    width: '75%',
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff2020',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#cc1010',
    shadowColor: '#ff2020',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  datePickerIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  datePickerText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    // flex: 1,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#02a120',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#10cc10',
    // shadowColor: '#ff2020',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignContent: 'center'
  },
  submitText: {
    color: "white",
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center',
    fontWeight: 600
  },
  devFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderColor: '#ddd'
  },
  devNum: {
    color: 'rgb(235, 16, 16)',
    marginRight: 10,
    fontWeight: 600,
    fontSize: 16,
    flex: 1

  },
  images: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
    // backgroundColor: 'beige'
  }
});