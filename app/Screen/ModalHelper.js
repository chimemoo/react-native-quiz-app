'use strict';

import React, { Component } from 'react';

import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';


class ModalHelper extends Component {

	state = {
    	modalVisible: false,
  	};

  	setModalVisible(visible) {
    	this.setState({modalVisible: visible});
  	}

  render() {
  	var visible = this.props.modalVisible;
  	this.setModalVisible(visible);
    return (
      <View>
		<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
	  </View>
    );
  }
}

const styles = StyleSheet.create({

});



export default ModalHelper;