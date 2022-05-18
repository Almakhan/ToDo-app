import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';
import {RFValue} from "react-native-responsive-fontsize";

const Task = (props) => {
const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
      <TouchableOpacity style={styles.completedTaskLine}>
        <View >
        <CheckBox
          
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          
        />
        </View>
        </TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#9cadce',
    padding: RFValue( 1),
    borderRadius: RFValue( 20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  itemText: {
    maxWidth: '80%',
  },
  completedTaskLine:{
   textDecorationLine:"line-through"
  },
 
  checkbox: {
    width: RFValue( 34),
    height: RFValue( 34),
    opacity: 0.4,
    borderRadius: RFValue(5),
    marginRight: 15,
   
  },

  
});

export default Task;
