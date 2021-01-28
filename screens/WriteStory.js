import React from 'react';
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-element';


export default class WriteStory extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput>
            <Text>Title</Text>
          </TextInput>


          <TextInput>
            <Text>author</Text>
          </TextInput>
          
          
          <TextInput>
            <Text>write your story</Text>
          </TextInput>


          <TouchableOpacity>
            <Text style={styles.textdesigne} >
            Submit
            </Text>
          </TouchableOpacity>
         </View>
      );
    }
  }


  const styles = StyleSheet.create({
    textdesigne: {
      flex: 1,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center"
    }
  });
  



