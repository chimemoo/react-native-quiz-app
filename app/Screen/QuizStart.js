'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ActivityIndicator,Text, TouchableOpacity
} from 'react-native';

import QuestionAnswer from '../Component/QuestionAnswer'
import Sound from 'react-native-sound'; 
const soundCorrect = new Sound('sound_success.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Sound loading error ...');
    console.log(error)
  }
})
const soundWrong = new Sound('sound_error.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Sound loading error ...');
    console.log(error)
  }
})

class QuizStart extends Component {
	constructor(props) {
	super(props);

	    this.state = {
	    	kode:0,
	      	loading: false,
	      	questions: [],

	      	current: 0,
	      	correctScore: 5,
	      	totalScore: 50,
	      	results: {
		        score: 0,
		        correctAnswers: 0
	      	},
	      	completed: false,
	      	banyak : 0,
	      	totalQuestion:0
	    };
	}

	fetchQuestions = async () => {
		const { navigation } = this.props;
    	const kode = navigation.getParam('kode');
	    await this.setState({ loading: true });
	    const response = await fetch(`https://jsonblob.com/api/jsonBlob/84b3b001-7a33-11e9-9927-07a950f2cfc7`); //84b3b001-7a33-11e9-9927-07a950f2cfc7
	    const questions = await response.json();
	    const {quizzes} = questions.games[kode];
	    quizzes.forEach(item => {
	    	item.id = item.id + 1;
      		item.id = Math.floor(Math.random() * 10000);
      		
    	});
    	this.setState({ questions: quizzes, loading: false, banyak:1, totalQuestion:quizzes.length });
    	console.log(questions.games[1]);
	};

	submitAnswer = (index, answer) => {
	    const question = this.state.questions[index];
	    const isCorrect = question.quiz_option_code === answer;
	    const hasil = this.state.score;
	    const totalQuestion = this.state.totalQuestion;
	    const cek = index < totalQuestion-1;
	    var score = this.state.results.score;
	    var banyak = 1;
	    if(isCorrect){
	    	score = score + 1;
	    	alert('Benar');
	    	soundCorrect.play((success) => {
		        if (!success) {
		          console.log('Sound did not play')
		        }
		    });
	    }
	    else{
	    	alert('Salah');
	    	soundWrong.play((success) => {
		        if (!success) {
		          console.log('Sound did not play')
		        }
		    });
	    }
	    if(!cek){
	    	banyak = 0;
	    }
	    this.setState({
	      current: index + 1,
	      completed: index === 9 ? true : false,
	      banyak:banyak,
	      results:{
	      	score:score
	      }
	    });


  	};

	componentDidMount() {
	    this.fetchQuestions();
	}

	render() {
		
	    return (
	      <View style={{flex:1}}>
	      	{!!this.state.loading && (
	          <View style={styles.loadingQuestions}>
	            <ActivityIndicator size="large" color="#00ff00" />
	            <Text>Please wait while we are loading questions for you</Text>
	          </View>
	        )}
	        {!!this.state.banyak > 0 && this.state.loading == false && (
      			<QuestionAnswer
	      			onSelect={answer => {
	                	this.submitAnswer(this.state.current, answer);
	              	}}
	        		questions={this.state.questions[this.state.current]}
	        	/>
	        )}

	        {!!this.state.banyak == 0 && this.state.loading == false && (
	        	<View 
	        	style={{
	        		flexDirection: 'column',
	        		justifyContent: 'center',
	        		flex:1
	        	}}>
	        		<View style={{flex:0.4,flexDirection: 'column',justifyContent: 'flex-end', }}>
	        			<Text style={{fontSize: 30,textAlign: 'center'}}>
	        				SELESAI
	        			</Text>
		        		<Text style={{textAlign: 'center'}}>
		        			Presentase Ke-Indonesiaanmu
		        		</Text>
	        		</View>
	        		<View style={{flex:0.2}}>
	        			<Text style={{fontSize: 30, color: '#FF0000',textAlign: 'center'}}>{parseFloat((this.state.results.score/this.state.totalQuestion)*100).toFixed(2)} %</Text>
	        		</View>
	        		<View style={{flex:0.4, justifyContent: 'flex-end',flexDirection: 'column' }}>
	        			<TouchableOpacity 
	        				onPress={() => this.props.navigation.navigate('HomeScreen')}
	        				style = {{
	        					padding: 10,
	        					borderRadius: 5,
	        					borderColor: '#ddd',
	        					marginTop: 5,
	        					marginHorizontal: 20,
	        					borderWidth: 1
	        				}}
	        			>
	        				<Text style={{textAlign: 'center', fontWeight: 'bold' }}>Kembali</Text>
	        			</TouchableOpacity>
	        			<TouchableOpacity 
	        				onPress={() => this.props.navigation.navigate('QuizSelectItem')}
	        				style = {{
	        					padding: 10,
	        					borderRadius: 5,
	        					borderColor: '#ff0000',
	        					marginTop: 5,
	        					marginHorizontal: 20,
	        					borderWidth: 1,
	        					backgroundColor: '#FF0000',
	        					marginBottom: 20
	        				}}
	        			>
	        				<Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Main lagi</Text>
	        			</TouchableOpacity>
	        		</View>
	        	</View>
	        )}


	      </View>
	    );
	}
}

const styles = StyleSheet.create({

});


export default QuizStart;