import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Note extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>                
        <TextInput value={this.props.val.note} onChangeText={this.props.updateMethod}>
        </TextInput>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>
            <Icon name="trash-o" size={25} color="#2980b9" />
          </Text>
        </TouchableOpacity>

        <Text style={styles.noteText}>          
           {this.props.val.date} 
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {    
    position: 'relative',
    padding: 20,
    paddingRight:100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
    //---
  },
  noteText: {
      color: "#333",
      fontSize: 13,
      borderLeftColor: '#e91e63',
  },
  noteDelete: {
      position: 'absolute',      
      justifyContent: 'center',
      alignItems: 'center',      
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10
  },
  noteDeleteText: {
      color: '#ffffff',
  }
});

export default Note;
