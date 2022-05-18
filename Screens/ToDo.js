import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
import Task from '../components/Task';
import {RFValue} from "react-native-responsive-fontsize";


export default function ToDo() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask("");
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput  style={styles.input} placeholder={'Add a task...'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1cfe2',
  },
  tasksWrapper: {
    paddingTop:RFValue( 40),
    paddingHorizontal: RFValue( 40),
  },
  sectionTitle: {
    fontSize: RFValue( 30),
    fontWeight: 'bold'
  },
  items: {
    marginTop: RFValue( 30),
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: RFValue( 40),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: RFValue( 20),
    paddingHorizontal: RFValue( 20),
    backgroundColor: '#e8dff5',
    borderRadius: RFValue( 30),
    borderColor: '#9cadce',
    borderWidth: RFValue( 2),
    width: RFValue( 320),
  },
  addWrapper: {
    width: RFValue( 75),
    height: RFValue( 70),
    backgroundColor: '#e8dff5',
    borderRadius: RFValue( 60),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#9cadce',
    borderWidth: RFValue( 2),
  },
  addText: {},
});