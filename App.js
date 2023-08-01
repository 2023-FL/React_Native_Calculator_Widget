import * as React from 'react';
import { TextInput, Text, Button, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class App extends React.Component{
  state = {
    x: 0,
    y: 0,
    AddResult: "",
    deResult: "",
    Mulresult: "",
    Divresult: ""
  }

   add = () => {
    let AddResult = this.state.x + this.state.y;
    this.setState({AddResult: (this.state.x + "+" + this.state.y + "=" + AddResult)})
  }

  deduce = () => {
    let deResult = this.state.x - this.state.y;
    this.setState({deResult: (this.state.x + "-" + this.state.y + "=" + deResult)})
  }

  multiple = () => {
    let Mulresult = this.state.x * this.state.y;
    this.setState({Mulresult: (this.state.x + "*" + this.state.y + "=" + Mulresult)})
  }

  divide = () => {
    let Divresult = this.state.x / this.state.y;
    this.setState({Divresult: (this.state.x + "/" + this.state.y + "=" + Divresult)})
  }

  render() {
    return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder = "x" keyboardType="numeric" 
      onChangeText = {(text) => {this.setState({x: parseFloat(text)});}}
      />
      <TextInput style={styles.input} placeholder = "y" keyboardType="numeric" 
      onChangeText = {(text) => {this.setState({y: parseFloat(text)});}}
      />
      <Button title="Add" onPress={this.add} />
      <Text>{
          this.state.AddResult
      }</Text>
      <Button title="Substraction" onPress={this.deduce} />
      <Text>{
          this.state.deResult
      }</Text>
      <Button title="Mutiply" onPress={this.multiple} />
      <Text>{
        this.state.Mulresult
      }</Text>
      <Button title="Divid" onPress={this.divide} />
      <Text>{
        this.state.Divresult
      }</Text>
    </View>
    );
  }
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    margin: 15,
    beight: 40,
    borderColor: "#444",
    borderWidth: 1
  }
});

export default App