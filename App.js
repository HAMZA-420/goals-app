import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput  from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);



  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(),value: goalTitle}]);
    setAddMode(false);
  };
  
  const cancleGoalAdditionHandler =()=> {
    setAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  return (
    <View style={styles.screen}>
    <Button title = "Add New Goal" onPress={() => setAddMode(true)}/>
    <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancleGoalAdditionHandler}/>
    <FlatList 
    keyExtractor={(item, index)=>item.id} 
    data ={courseGoals}
    renderItem = {itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
 
 
});