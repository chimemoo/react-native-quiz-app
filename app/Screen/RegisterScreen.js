import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { addData } from '../penyimpanan/action';


var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name:'databasesik.db', createFromLocation:'~databasesik.db'})

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      add:null,
      typedText:'',
      username: ''
    };
  }

  
  componentDidMount(){

    setTimeout(() => {
        if(this.state.username != ''){
          this.props.navigation.navigate('DashboardTabRoutes');
        }
    }, 1000);
  }

  UserRegFunction = () =>{
    const { username } = this.state;
    db.transaction((tx) => {
      tx.executeSql(`SELECT * FROM user WHERE nickname='${username}'`,[],(tx, results) => {
        var len = results.rows.length;
        if(len > 0) {
          this.props.dispatch({type:'ADD_DATA',username:username});  
          this.props.navigation.navigate('DashboardTabRoutes', {username : username} );

          
        }
        else {
          this.props.navigation.navigate('SelectAvatarScreen', {username : username} );
        }
      }
      );
    });
  }


  render() {
    return (
      	<View style={styles.container}>
          <ImageBackground source={require('./../../assets/background.jpg')} style={{width: '100%', height: '100%',opacity: 0.9}}>
            <View style={{flex:70,justifyContent: 'center'}}>
              <View style={{alignContent: 'center',backgroundColor: 'rgba(255, 255, 255, 0.3)'}}><Text style={styles.nameApp}>Seberapa Indonesia kah Kamu?</Text></View>
              <View style={{marginTop:30}}><Text style={styles.typedText}>{this.state.username}</Text></View>
            </View>
            
            <View style={{flex:30}}>
              <View style={{flexDirection:'row', flex:1, alignItems:'center',justifyContent: 'center'}}>
                <TextInput 
                  style={styles.nickname}
                  textAlign={'center'}
                  placeholder='Masukkan Nickname Kamu'
                  maxLength={15}
                  onChangeText={
                    (text) => {
                      this.setState(
                        (previousState) => {
                          return {
                            username:text
                          }
                        }
                      )
                    }
                  }
                />
              </View>
              <View style={{flexDirection:'row', flex:1, alignItems:'center',justifyContent: 'center'}}>
                <TouchableOpacity style={styles.mulai} onPress={this.UserRegFunction}>
                  <Text style={{color:'#fff',fontWeight:'bold'}}>
                    Mulai
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
      	</View>
    );
  }
}



const styles = StyleSheet.create({
	container:{
		flex: 1
	},
  nameApp:{
    fontSize: 20,
    alignSelf: 'center',
    color: '#FF0000',
    fontWeight: 'bold'
  },
  typedText:{
    alignSelf: 'center',
    fontSize: 30,
    color: '#FF0000',
    fontWeight: 'bold'
  },
	nickname:{
		backgroundColor:'rgba(255,255,255,0.7)',
    flex:0.8,
    padding:5,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    color: '#FF0000'
	},
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




export default connect()(RegisterScreen);