import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Platform, Button, Alert, Switch, TouchableOpacity, Image} from 'react-native';
import CustomerProfile from './CustomerProfile';
import react, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [reservationDate, setReservationDate] = useState(new Date());
  const [showReservationPicker, setShowReservationPicker] = useState(false);

  const onChange = (_:any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  }

  const onReservationChange = (_:any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || reservationDate;
    setShowReservationPicker(Platform.OS === 'ios');
    setReservationDate(currentDate);
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
      {/* <Text style={styles.title}>Order History</Text> */}
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
      <Text style={styles.description}>Order Date</Text>

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

      <Text style={styles.description}>Menu Item Ordered</Text>
      <TextInput style={styles.input} placeholder='Enter main dish or item ordered'></TextInput>   
      <Text style={styles.description}>Special Instructions</Text>
      <TextInput style={styles.input} placeholder='Dietary preferences, cooking instructions, modifications...'></TextInput>   
      <View style={styles.paycontainer}>
        <Text style={styles.description}>Payment Method</Text>
        <Picker
          selectedValue = {selectedPayMethod}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedPayMethod(itemValue)}
          >
            <Picker.Item label='Select Payment Method' value=""/>
            <Picker.Item label='Cash' value="cash"/>
            <Picker.Item label='Card' value="card"/>
            <Picker.Item label='Transfer' value="transfer"/>
        </Picker>
      </View>       
      <Text style={styles.descriptions}>Next Reservation Date</Text>
      <View style={styles.datePickerContainer}>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowReservationPicker(true)}
        >
          <Text style={styles.datePickerIcon}>📅</Text>
          <Text style={styles.datePickerText}>
            {formatDate(reservationDate)}
          </Text>
        </TouchableOpacity>
        {showReservationPicker && (
          <DateTimePicker
            value={reservationDate}
            mode='date'
            display='default'
            onChange={onReservationChange}
          />
        )}
      </View>    


      <View style={styles.datePickerContainer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => setShowPicker(true)}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* <View>
        {/* <Text>Submit</Text> */}
        {/* <Button 
        title='Submit' 
        color="#02a120" */}
        {/* />
      </View> */} 

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
    marginBottom: 10,
    borderStyle: 'solid',
    borderColor: 'rgb(120, 120, 120)',
    paddingRight: 15,
    paddingLeft: 10,
    paddingVertical: 5,
    color: 'rgb(80, 80, 80)'
  },
  description: {
    display: 'flex',
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'left',
    color: 'rgb(175, 31, 31)',
    fontWeight: 500
  },   
  descriptions: {
    display: 'flex',
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'left',
    color: 'rgb(175, 31, 31)',
    fontWeight: 500,
    marginTop: 0
  }, 
  picker: {
    width: '75%',
    height: '30%',
    backgroundColor: 'gray',
    marginBottom: 0
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
    flex: 1,
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
  },
  submitText: {
    color: "white",
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600
  },
  paycontainer: {
    height: "30%",
    marginBottom: 0
  },
  images: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
    // backgroundColor: 'beige'
  }
});