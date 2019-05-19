/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, 
          createAppContainer,
          createSwitchNavigator,  
          createMaterialTopTabNavigator,
          Header } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome5';

import LoadingScreen from './app/Screen/LoadingScreen';
import RegisterScreen from './app/Screen/RegisterScreen';
import SelectAvatarScreen from './app/Screen/SelectAvatarScreen';
import HomeScreen from './app/Screen/HomeScreen';
import SettingScreen from './app/Screen/SettingScreen';
import HelpScreen from './app/Screen/HelpScreen';
import AboutScreen from './app/Screen/AboutScreen';
import QuizScreen from './app/Screen/QuizScreen';
import QuizSelectItem from './app/Screen/QuizSelectItem';
import QuizStart from './app/Screen/QuizStart';

import GameListScreen from './app/components/Games/GameListScreen';
import GameBriefScreen from './app/components/Games/GameBriefScreen';
import GameResultsScreen from './app/components/Games/GameResultsScreen';
import CustomHeader from './app/Component/CustomHeader';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './app/penyimpanan/reducers';

const store = createStore(rootReducer);


const HomeNavigator = createStackNavigator(
  {
      HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
          header:null
        },
      },
      QuizScreen: {
        screen: QuizScreen,
        navigationOptions: {
          header:null
        },
      },
      QuizSelectItem: {
        screen: QuizSelectItem,
        navigationOptions: {
          header:null
        },
      },
      QuizStart: {
        screen: QuizStart,
        navigationOptions: {
          header:null
        },
      }
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

const DashboardTabRoutes = createMaterialTopTabNavigator({
  
    Home :{
      screen : HomeNavigator,
      navigationOptions:{
        swipeEnabled:true,
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor, alignSelf: 'center' }}>
           Home
          </Text>
        ),
          tabBarIcon: ({ horizontal, tintColor }) =>
            <Icon name="home" size={horizontal ? 20 : 25} color={tintColor} />
      },

    },
    Setting :{
      screen : SettingScreen,
      navigationOptions:{
        swipeEnabled:true,
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor, alignSelf: 'center'  }}>
           Setting
          </Text>
        ),
        tabBarIcon: ({ horizontal, tintColor }) =>
          <Icon name="list" size={horizontal ? 20 : 25} color={tintColor} />
      }
    },
    Help :{
      screen : HelpScreen,
      navigationOptions:{
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor, alignSelf: 'center'  }}>
           Help
          </Text>
        ),
        tabBarIcon: ({ horizontal, tintColor }) =>
          <Icon name="hands-helping" size={horizontal ? 20 : 25} color={tintColor} />
      }
    },
    About :{
      screen : AboutScreen,
      navigationOptions:{
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor, alignSelf: 'center'  }}>
           About
          </Text>
        ),
        tabBarIcon: ({ horizontal, tintColor }) =>
          <Icon name="exclamation" size={horizontal ? 20 : 25} color={tintColor} />
      }
    }
  },
  {
    tabBarPosition : 'top',
    animationEnabled: true,
    swipeEnabled:true,
    tabBarOptions:{
        tabStyle:{
            backgroundColor:'#fff',
            paddingBottom:4,
        },
        labelStyle: {
            fontSize: 9,
        },
        showIcon:true,
        showLabel:true,
        indicatorStyle:{
            backgroundColor:'transparent',
        },
        style:{
            backgroundColor:'#fff',
        },
        activeTintColor:'#FF0000',
        inactiveTintColor:'#000',
    },
    titleColor:'#000'
  }
);


const DashTab = createAppContainer(DashboardTabRoutes);

export class DashboardTab extends React.Component {
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:0.06}}><CustomHeader/></View>
        <View style={{flex:0.94}}><DashTab/></View>
      </View>
      );
  }
}



const RegNavigator = createStackNavigator(
  {
      RegisterScreen: {
        screen: RegisterScreen,
        navigationOptions: {
          header:null
        },
      },
      SelectAvatarScreen: {
        screen: SelectAvatarScreen,
        navigationOptions: {
          header:null
        },
      },
      DashboardTabRoutes:{
        screen: DashboardTab,
        navigationOptions: {
          header:null
        },
      },
  },
  {
    initialRouteName: 'RegisterScreen', //BALIKIN LAGI KE RegisterScreen
  }
);


const AppNavigator = createStackNavigator(
  {
    LoadingScreen: {
      screen: LoadingScreen,
      navigationOptions: {
        header:null
      },
    },
    RegNavigator : {
      screen: RegNavigator,
      navigationOptions: {
        header:null
      },
    }
  },
  {
    initialRouteName: 'RegNavigator', //BALIKIN LAGI KE LoadingScreen
  }
);

const AppContainer = createAppContainer(AppNavigator);



export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
