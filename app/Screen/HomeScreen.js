'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { addData } from '../penyimpanan/action';


class HomeScreen extends Component {
  constructor(props){
		super(props);
		this.state = {
			user: '',
      username:props.username
    };
    
  }
  

	UserRegFunction = () =>{
    	this.props.navigation.navigate('QuizSelectItem');
    }

    componentWillMount(){
      if(this.state.username!=null){
        console.log(this.state.username);
      }
    }

  render() {
    
    return (
      <View style={{flex: 1}}>
        <View style={{flex:70,padding:10, flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 20}}>
              <Text style={{marginTop:20}}>{this.state.username.username}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={require('./../../assets/avatarMale.png')}
                style={{width: 200, height: 200}}   
              />
            </View>
          </View>
        </View>
        <View style={{flex:30, flexDirection: 'row', justifyContent: 'center'}}>
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
	    width: 100,
      height: 50,
	    borderRadius: 5,
	    alignItems:'center',
	    justifyContent:'center',
	    flexDirection:'row'
	}
});

const mapStateToProps = state => {
  const { username } = state;
  const usr = username[0];
  return { username: usr}
}

export default connect(mapStateToProps)(HomeScreen);