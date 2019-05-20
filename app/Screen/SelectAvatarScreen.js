import React, { Component } from 'react';

import { StyleSheet,View, ImageBackground,Text,Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name:'databasesik1.db', createFromLocation:'~databasesik1.db'})

class SelectAvatarScreen extends Component {
	
	constructor(props){
		super(props);
  
		this.state = {
			username: ''
		};
	}

	selectAvaFunction1 = () =>{
		const { username } = this.state;
		db.transaction((tx) => {
		tx.executeSql( `INSERT INTO user (nickname,pict) VALUES ("${username}",1)`,[],(tx, results) => {
			if(results.rowsAffected > 0) {
				// exists owner name John
				this.props.dispatch({type:'ADD_DATA',username:username});
				this.props.navigation.navigate('DashboardTabRoutes', {username : username} );
			}
			}, (e)=>{console.log(e); alert("Gagal");}
			);
		});
	}
	  
	selectAvaFunction2 = () =>{
		const { username } = this.state;
		db.transaction((tx) => {
		tx.executeSql( `INSERT INTO user (nickname,pict) VALUES ("${username}",2)`,[],(tx, results) => {
				if(results.rowsAffected > 0) {
				// exists owner name John
					this.props.dispatch({type:'ADD_DATA',username:username});  
					this.props.navigation.navigate('DashboardTabRoutes', {username : username} );
				}
			}, (e)=>{console.log(e); alert("Gagal");}
			);
		});
  	}

  	render() {
	const { navigation } = this.props;
	const username = navigation.getParam('username', 'NO-ID');
	this.state.username = username;
	
	return (
      	<View style={styles.container}>
	      	<ImageBackground source={require('./../../assets/background.jpg')} style={{width: '100%', height: '100%',opacity: 0.9}}>
	      		<View style={styles.textChooseAvatar}>
	      			<Text style={{fontSize: 20, color: '#FF0000',alignSelf: 'center',fontWeight: 'bold'}}>Pilih Avatar</Text>
	      		</View>
	      		<View style={styles.boxAvatar}>
	      			<TouchableOpacity style={{width: 100, height: 100, alignSelf: 'center'}} onPress={this.selectAvaFunction1}>
		      			<Image
		      				source={require('./../../assets/avatarMale.png')}
		      				style={{width: 100, height: 100}}		
		      			/>
	      			</TouchableOpacity>
	      			<TouchableOpacity style={{width: 100, height: 100, alignSelf: 'center'}} onPress={this.selectAvaFunction2}>
		      			<Image
		      				source={require('./../../assets/avatarFemale.png')}
		      				style={{width: 100, height: 100}}		
		      			/>
	      			</TouchableOpacity>
	      		</View>
	      	</ImageBackground>
      	</View>
    	);
  	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
	},
	textChooseAvatar :{
		flex:0.1,
		justifyContent: 'center'
	},
	boxAvatar:{
		flex:0.5,
		backgroundColor: 'rgba(255,255,255,0.5)',
		marginLeft:20,
		marginRight: 20,
		borderRadius: 10,
		justifyContent: 'center',
		flexDirection: 'row'
	}
});


export default connect()(SelectAvatarScreen);