/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighLight
} from 'react-native';

import Drawer from 'react-native-drawer';

class ReactNativeDrawerExperiment extends Component {
  mainView() {
    return (
      <View style={styles.container}>
          <Text
            onPress={ () => this._drawer.open() }
            >Touch me</Text>
      </View>
    );
  }

  controlPanel() {
    return (
      <View>
        <Text>CONTROL PANEL!!!!</Text>
      </View>
    );
  }

  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };

  render () {
    return (
      <Drawer
        type="static"
        openDrawerOffset={100}
        closedDrawerOffset={-10}
        styles={drawerStyles}
        tweenHandler={Drawer.tweenPresets.parallax}
        ref={(ref) => this._drawer = ref}
        content={this.controlPanel()}
        panOpenMask={0.8}
        >
        {this.mainView()}
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { backgroundColor: 'red', shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeDrawerExperiment', () => ReactNativeDrawerExperiment);
