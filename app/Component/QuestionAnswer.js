'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

class QuestionAnswer extends Component {
	constructor() {
	    super();
	 
	    this.state = {
	      questions:[],
	      answer: null
	    };
	}
	

  	render() {
    return (
      <View style={{flex:1}}>
      	<View 
      		style={{
      			margin:10, 
      			borderWidth: 1, 
      			borderColor: '#ddd',
      			flex:0.4, 
      			borderRadius: 5,
      			}}>
      		<View style={{flexGrow: 1, textAlignVertical: 'center',justifyContent: 'center', flexDirection: 'column' }}>
      			<Text style={{textAlign: 'center'}}>{this.props.questions.description}</Text>
      		</View>
      	</View>
      	<View style={{flex:0.6, justifyContent: 'center',flexDirection: 'row' }}>
	      	<View style={{flex:0.5,flexDirection: 'column'}}>

	      		<TouchableOpacity style={styles.tombol} 
	      			onPress={() => {
			        	this.props.onSelect('1');
			        }}
	      		>
		  			<Text style={{alignSelf: 'center', fontWeight: 'bold',fontSize: 16,textAlign: 'center'}}>
		  				{this.props.questions.options[0].description}
		  			</Text>
		  		</TouchableOpacity>

		  		<TouchableOpacity style={styles.tombol}
		  			onPress={() => {
			        	this.props.onSelect('2');
			        }}
		  		>
		  			<Text style={{alignSelf: 'center', fontWeight: 'bold',fontSize: 16,textAlign: 'center'}}>
		  				{this.props.questions.options[1].description}
		  			</Text>
		  		</TouchableOpacity>
		  	</View>
		  	<View  style={{flex:0.5,flexDirection: 'column'}}>
		  		<TouchableOpacity style={styles.tombol}
		  			onPress={() => {
			        	this.props.onSelect('3');
			        }}
		  		>
		  			<Text style={{alignSelf: 'center', fontWeight: 'bold',fontSize: 16,textAlign: 'center'}}>
		  				{this.props.questions.options[2].description}
		  			</Text>
		  		</TouchableOpacity>
		  		<TouchableOpacity style={styles.tombol}
		  			onPress={() => {
			        	this.props.onSelect('4');
			        }}
		  		>
		  			<Text style={{alignSelf: 'center', fontWeight: 'bold',fontSize: 16,textAlign: 'center'}}>
		  				{this.props.questions.options[3].description}
		  			</Text>
		  		</TouchableOpacity>
		  	</View>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	tombol:{
		borderWidth: 1,
		borderColor: '#ddd',
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		margin:10,
		flexDirection: 'row',
		alignItems: 'center' ,
		flex:0.5,
		justifyContent: 'center'
	}
});


export default QuestionAnswer;