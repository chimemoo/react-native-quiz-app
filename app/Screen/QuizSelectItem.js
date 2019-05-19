'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

class QuizSelectItem extends Component {


  render() {
    return (
      <View style={{flex:1, justifyContent: 'center' }}>

  		<TouchableOpacity style={styles.tombol} onPress={() =>{this.props.navigation.navigate('QuizStart',{kode: 0})}}>
  			<Text style={{alignSelf: 'center', fontWeight: 'bold',fontSize: 28}} 
  			>SEJARAH</Text>
  		</TouchableOpacity>

  		<TouchableOpacity style={styles.tombol} onPress={() =>{this.props.navigation.navigate('QuizStart',{kode: 1})}}>
  			<Text style={{alignSelf: 'center', fontWeight: 'bold',fontSize: 28}} 
  			>GEOGRAFI</Text>
  		</TouchableOpacity>

  		<TouchableOpacity style={styles.tombol} onPress={() =>{this.props.navigation.navigate('QuizStart',{kode: 2})}}>
  			<Text style={{alignSelf: 'center', fontWeight: 'bold',fontSize: 28}}>BUDAYA</Text>
  		</TouchableOpacity>

  		<TouchableOpacity style={styles.tombol} onPress={() =>{this.props.navigation.navigate('QuizStart',{kode: 3})}}>
  			<Text style={{alignSelf: 'center', fontWeight: 'bold',fontSize: 28}}>EKOLOGI</Text>
  		</TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	tombol:{
		width: 200,
		height: 60,
		borderWidth: 1,
		borderColor: '#ddd',
		backgroundColor: '#FFFFFF',
		alignSelf: 'center',
		borderRadius: 10,
		justifyContent: 'center',
		margin:10
	}
});


export default QuizSelectItem;