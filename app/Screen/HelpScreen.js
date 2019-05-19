'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Modal, Text, TouchableHighlight, View, Alert, FlatList, TouchableOpacity
} from 'react-native';
import QuizHelper from './QuizHelper';

class FlatListItem extends Component {
	state = {
    	modalVisible: false,
  	};

  	setModalVisible(visible) {
    	this.setState({modalVisible: visible});
  	}


	render(){
		return(
			<View >
				<Modal
				style={{marginTop: 22,width: 300, height: 300}}
		          animationType="slide"
		          transparent={false}
		          visible={this.state.modalVisible}>
		          <View style={{marginTop: 22}}>
		            <View style={{justifyContent: 'center', alignContent: 'center' }} >
		            	<View style={{justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
		              		<Text style={{ fontSize: 18}}>{this.props.item.nama}</Text>	
		              		<Text>
		              			{this.props.item.deskripsi}
		              		</Text>
		              	</View>
		              	<View style={{justifyContent: 'center', flexDirection: 'row'}} >
			              <TouchableHighlight
			              	style={{
			              		margin:5,
			              		padding: 10,
			              		backgroundColor: '#FF0000',
			              		justifyContent: 'center' 
			              	}}
			                onPress={() => {
			                  this.setModalVisible(!this.state.modalVisible);
			                }}

			                >
			                <Text style={{color:'#FFFFFF'}}>Tutup</Text>
			              </TouchableHighlight>
		              	</View>
		            </View>
		          </View>
		        </Modal>
				<TouchableOpacity onPress={() => { this.setModalVisible(true);}}
					style={{flex:1, height: 50, borderBottomWidth: 1,borderBottomColor: '#ddd', padding: 5, margin:5}}>
					<Text style={{fontSize: 18, margin :10}}>{this.props.item.nama}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


class HelpScreen extends Component {

  render() {
    return (
      <View style = {{flex:1}}>
      	<FlatList
      		data={QuizHelper}
      		renderItem={({item,index}) => {
      			return (
      				<FlatListItem item={item} index={index} />
      			);
      		}}
      	>
      	</FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default HelpScreen;