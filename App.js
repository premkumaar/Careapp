// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import {Main} from './src/Screens/MixedNav';
// var SQLite = require ('react-native-sqlite-storage')
// var db = SQLite.openDatabase({name:'test.db',createFromLocation:'~sqliteexample.db', location: 'Library'})

 export default class App extends Component{
//   constructor(props){
//     super(props)
//     this.state ={
//       LastName:"",
//     };
  
   
//   componentDidMount(){
//     db.transaction((tx) => {
//       tx.executeSql('SELECT * FROM Contacts WHERE FristName =?', ['john'], (tx, results) => {
//         var len = results.rows.length;
//         console.log("check len"+len)
//         for (let i = 0; i < len; i++) {
//           if(len>0){
//             var row= results.rows.item(0);
//             this.setState({LastName:row.LastName});
//           }
//         }
//       });
//    });
 
  render() {
    return (
      
      <Main/>
    
      
    );
  }
}


 styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

