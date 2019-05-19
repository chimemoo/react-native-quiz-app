'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View, Text
} from 'react-native';

class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 30 }}>
          SIK (SEBERAPA INDONESIAKAH KAMU)?
        </Text>
        <Text style={{textAlign: 'center' }}>
          Merupakan Aplikasi Quiz berisi pertanyaan-pertanyaan seputar indonesia.
        </Text>
        <Text style={{textAlign: 'center' }}>
          Dibuat oleh : Chimemoo, Ogoy dan Nissa
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
});


export default AboutScreen;