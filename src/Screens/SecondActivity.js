import React, { Component } from 'react';
import {  StyleSheet, View,  TouchableOpacity,Alert,Text,YellowBox,TextInput } 
 from 'react-native';
 
 
var Realm = require('realm');
 
let realm ;

import { StackNavigator } from 'react-navigation';

export default class SecondActivity extends Component
{
 static navigationOptions =
 {
    title: 'UserEnterActivity',
 };
 GoTohomescr= () =>
{
   this.props.navigation.navigate('First');
   
}
constructor(){

  super();

  this.state = {

    First_Name : '',

    Last_Name : '',

    Mobile_Number : '',

    Email_Id:'',

    Address:''

}

  realm = new Realm({
    schema: [{name: 'Contacts_Info', 
    properties: 
    {
      person_id: {type: 'int',   default: 0},
      first_name: 'string', 
      last_name: 'string', 
       mobile_number : 'string',
       email_id: 'string',
       address: 'string'
    }}]
  });

  YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
   ]);

}

add_Person=()=>{


  realm.write(() => {

    var ID = realm.objects('Contacts_Info').length + 1;

     realm.create('Contacts_Info', {
      person_id: ID, 
       first_name: this.state.First_Name, 
       last_name: this.state.Last_Name, 
       mobile_number : this.state.Mobile_Number,
       email_id: this.state.Email_Id,
       address : this.state.Address,
      });
      
  });

  Alert.alert("Student Details Added Successfully.")

}

render() {
    
  return (
  
      <View style={styles.MainContainer}>
        
        <TextInput 
              placeholder="Enter first Name"
              style = { styles.TextInputStyle } 
              underlineColorAndroid = "transparent" 
              onChangeText = { ( text ) => { this.setState({ First_Name: text })} } 
            />

        <TextInput  
              placeholder="Enter Last Name"
              style = { styles.TextInputStyle } 
              underlineColorAndroid = "transparent" 
              onChangeText = { ( text ) => { this.setState({ Last_Name: text })} } 
            />

        <TextInput 
              placeholder="Enter Mobile Number"
              style = { styles.TextInputStyle } 
              underlineColorAndroid = "transparent" 
              onChangeText = { ( text ) => { this.setState({ Mobile_Number: text })} } 
            />
<TextInput 
              placeholder="Enter EmailId"
              style = { styles.TextInputStyle } 
              underlineColorAndroid = "transparent" 
              onChangeText = { ( text ) => { this.setState({ Email_Id: text })} } 
            />
            <TextInput 
              placeholder="Enter Address"
              style = { styles.TextInputStyle } 
              underlineColorAndroid = "transparent" 
              onChangeText = { ( text ) => { this.setState({ Address: text })} } 
            />

        <TouchableOpacity onPress={this.add_Person} activeOpacity={0.7} style={styles.button} >

          <Text style={styles.TextStyle}> SAVE DETAILS </Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={this.GoTohomescr} activeOpacity={0.7} style={styles.button} >

          <Text style={styles.TextStyle}> SHOW DETAILS </Text>

        </TouchableOpacity>
           
      </View>
            
  );
}
}

 

 
const styles = StyleSheet.create(
{
 MainContainer:
 {
    justifyContent: 'center',
    flex:1,
    margin: 10
  
 },
 TextInputStyle:
  {
    borderWidth: 1,
    borderColor: '#009688',
    width: '100%',
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
  },

button: {
  
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius:7,
    marginTop: 12
  },
  Editbutton:{
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  TextStyle:{
    color:'#fff',
    textAlign:'center',
  }
})