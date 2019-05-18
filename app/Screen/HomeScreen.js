'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import { connect } from 'react-redux';
import { addPerson, deletePerson } from '../reducer/actions';

class HomeScreen extends Component {
  constructor(props){
		super(props);
  
		this.state = {
			user: ''
		};
  }
  
	UserRegFunction = () =>{
    	this.props.navigation.navigate('QuizScreen');
    }

  render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username');
    this.state.user = this.props.people;

    return (
      <View style={{flex: 1}}>
        <View style={{flex:70,padding:10}}>
          <Text style={{marginTop:20}}>{this.state.user}</Text>
        </View>
        <View style={{flex:30}}>
          <TouchableOpacity style={styles.mulai} onPress={this.UserRegFunction}>
            <Text style={{color:'#fff',fontWeight:'bold'}}>
              Mulai
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	mulai:{
	    backgroundColor:'#FF0000',
	    flex:0.8,
	    padding:10,
	    borderRadius: 10,
	    alignItems:'center',
	    justifyContent:'center',
	    flexDirection:'row'
	}
});

function mapStateToProps (state) {
  return {
    people: state.people.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddPerson: (person) => dispatch(addPerson(person)),
    dispatchdeletePerson: (person) => dispatch(deletePerson(person))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);