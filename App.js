import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    } from 'react-native';

import Note from './Note';

export default class App extends React.Component {

  state={
    noteArray:[ {"date":"testdate","note":"textnote1"} ],
    noteText:""
  }
  render() {
    
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={ ()=>this.deleteNote(key)} />
    });

    return (
     <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>NOTLARIM</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>Ekle</Text>
          </TouchableOpacity>
          
        

            <TextInput 
            style={styles.textInput}
            placeholder="not yazın"
            placeholderTextColor="white"
            onChangeText={(noteText) =>this.setState({noteText})}
            value={this.state.value}
            underlineColorAndroid="transparent"
            behavior="padding">

            </TextInput>
          

        </View>

     </View>
    )
  }
  addNote(){
    if(this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({'date':d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate(), 'note': this.state.noteText});
      this.setState({noteArray:this.state.noteArray});
      this.setState ({noteText: ''});
    }
  }
  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray});
  }
} 


const styles = StyleSheet.create({

  container:{
    flex:1
  },
  header:{
    backgroundColor:'#3498db',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd',
    marginTop:24
  },
  headerText:{
    color:'white',
    fontSize:18,
    padding:26
  },
  scrollContainer:{
    flex:1,
    marginBottom:100
  },
  footer:{
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
    alignItems:'center'
  },
  addButton:{
    backgroundColor:'#c0392b',
    width:90,
    height:90,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:-45,
    elevation:8,
    zIndex:10
  },
  addButtonText:{
    color:'#fff',
    fontSize:20
  },
  textInput:{
    alignSelf:'stretch',
    color:'#fff',
    padding:20,
    paddingTop:46,
    backgroundColor:'#252525',
    borderTopWidth:2,
    borderTopColor:'#ededed'
  }


});
