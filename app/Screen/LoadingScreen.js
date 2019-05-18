import React, { Component } from 'react';

import { StyleSheet, View, Text, Image, ImageBackground, ActivityIndicator} from 'react-native';

class LoadingScreen extends Component {
	state = {
    	spinner: false
  	};

  	componentDidMount() {
    	setTimeout(() => {
      		this.setState({
        		spinner: true
      		});
      		this.props.navigation.navigate('RegisterScreen');
    	}, 5000);
  	}

  	render() {
    	return (
	      	<View style={styles.container}>
	      		<ImageBackground source={require('./../../assets/background.jpg')} style={{width: '100%', height: '100%',opacity: 0.9}}>
		      		<View style={styles.merah}>
		      			<Text style={styles.textKuis}>KUIS</Text>
		      		</View>
		      		<View style={styles.putih}>
		      			<Text style={styles.textSIK}>Seberapa Indonesiakah Kamu?</Text>
		      		</View>
		      		<View style={{flex:50}}>
		      			<ActivityIndicator size="large" color="#ff0000" />
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
	merah:{
		flex: 40,
		justifyContent: 'flex-end'
	},
	textKuis:{
		fontSize: 40,
		color: '#FFFFFF',
		alignSelf: 'center',
		fontFamily: 'Virale',
		marginBottom: 10
	},
	putih:{
		flex: 10,
		justifyContent: 'flex-start'
	},
	textSIK:{
		marginTop: 10,
		fontSize: 25,
		color: '#FFFFFF',
		alignSelf: 'center',
		fontFamily: 'Virale' 
	}
});


export default LoadingScreen;