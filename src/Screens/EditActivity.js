import React, { Component } from 'react';
import {  StyleSheet, View,  TouchableOpacity,Alert,Text,YellowBox,TextInput } 
 from 'react-native';
 

var Realm = require('realm');
 
let realm ;


export default class EditActivity extends Component{
 
    static navigationOptions =
    {
       title: 'EditActivity',
    };
   
    constructor(){
   
      super();
   
      this.state = {
   
        Person_Id : '',
   
        First_Name : '',
        
        Last_Name : '',
  
        Mobile_Number:'',
  
        Email_Id:'',
  
        Address:''
   
    }
   
      YellowBox.ignoreWarnings([
        'Warning: componentWillMount is deprecated',
        'Warning: componentWillReceiveProps is deprecated',
        'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
       ]);
   
    }
   
    componentDidMount(){
   
      // Received Student Details Sent From Previous Activity and Set Into State.
   
      this.setState({ 
        Person_Id : this.props.navigation.state.params.ID,
        First_Name: this.props.navigation.state.params.FNAME,
        Last_Name: this.props.navigation.state.params.LNAME,
        Mobile_Number: this.props.navigation.state.params.Mobile,
        Email_Id: this.props.navigation.state.params.Email,
        Address: this.props.navigation.state.params.Address
  
      })
   
     }
   
    Update_Person=()=>{
   
      realm.write(() => {
   
         //var ID = this.state.Student_Id - 1;
         let realm = new Realm({
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
  
         var obj = realm.objects('Contacts_Info');
  
         var index = 0;
         for (let i = 0; i < obj.length; i++) {
               if(obj[i].person_id === this.state.Person_Id)
               {
                 index = i
               }
      }
   
         obj[index].first_name = this.state.First_Name;
         obj[index].last_name = this.state.Last_Name;
         obj[index].mobile_number = this.state.Mobile_Number;
         obj[index].email_id = this.state.Email_Id;
         obj[index].address = this.state.Address;
   
        });
   
      Alert.alert("Student Details Updated Successfully.")
      this.props.navigation.navigate('First');
   
    }
   
    Delete_Person=()=>{
   
      realm.write(() => {
        let realm = new Realm({
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
        var ID = this.state.Person_Id - 1;
   
       realm.delete(realm.objects('Contacts_Info')[ID]);
   
        });
   
      Alert.alert("Record Deleted Successfully.")
   
      this.props.navigation.navigate('First');
   
    }
   
    render() {
   
      return (
      
          <View style={styles.MainContainer}>
            
            <TextInput 
                  value={this.state.First_Name}
                  style = { styles.TextInputStyle } 
                  underlineColorAndroid = "transparent" 
                  onChangeText = { ( text ) => { this.setState({ First_Name: text })} } 
                />
                  <TextInput 
                  value={this.state.Last_Name}
                  style = { styles.TextInputStyle } 
                  underlineColorAndroid = "transparent" 
                  onChangeText = { ( text ) => { this.setState({ Last_Name: text })} } 
                />
     <TextInput 
                  value={this.state.Mobile_Number}
                  style = { styles.TextInputStyle } 
                  underlineColorAndroid = "transparent" 
                  onChangeText = { ( text ) => { this.setState({ Mobile_Number: text })} } 
                />
   
   
            <TextInput  
                  value={this.state.Email_Id}
                  style = { styles.TextInputStyle } 
                  underlineColorAndroid = "transparent" 
                  onChangeText = { ( text ) => { this.setState({ Email_Id: text })} } 
                />
   
            <TextInput 
                  value={this.state.Address}
                  style = { styles.TextInputStyle } 
                  underlineColorAndroid = "transparent" 
                  onChangeText = { ( text ) => { this.setState({ Address: text })} } 
                />
   
   
            <TouchableOpacity onPress={this.Update_Person} activeOpacity={0.7} style={styles.button} >
   
              <Text style={styles.TextStyle}> UPDATE DETAILS </Text>
   
            </TouchableOpacity>
   
            <TouchableOpacity  activeOpacity={0.7} style={styles.button} onPress={this.Delete_Person} >
   
              <Text style={styles.TextStyle}>  DELETE CURRENT RECORD </Text>
   
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
      },
     
   
      textViewContainer: {
   
        textAlignVertical:'center', 
        padding:10,
        fontSize: 20,
        color: '#000',
        
       },
     ImageClass:
     {
       justifyContent: 'flex-end',
    
   // Set content's horizontal alignment.
   alignSelf: 'flex-end',
       
       // Setting up image width.
       width: 50,
    
       // Setting up image height.
       height: 50
    
     }
    });
  
  