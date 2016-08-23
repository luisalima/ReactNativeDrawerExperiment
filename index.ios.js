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
  Navigator,
  TouchableHighLight
} from 'react-native';

import Drawer from 'react-native-drawer';

class ReactNativeDrawerExperiment extends Component {
  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.FloatFromRight
  }

  renderScene(route, navigator) {
    const RouteComponent = route.component;
    return (
      <RouteComponent
        navigator={navigator}
        {...route.passProps}
      />
    );
  }

  routeMapper() {
    const that = this;

    return {
      LeftButton: function(route, navigator, index, navState) {
        return (
          <Text
            style={styles.navBtnText}
            onPress={() => that._drawerLeft.open()}
          >
            Left
          </Text>
        );
      },

      RightButton: function(route, navigator, index, navState) {
        return (
          <Text
            style={styles.navBtnText}
            onPress={() => that._drawerRight.open()}
          >
            Right
          </Text>
        );
      },

      Title: function(route, navigator, index, navState) {
        return (
          <Text style={styles.title}>
            {route.title}
          </Text>
        );
      }
    };
  }

  controlPanelLeft() {
    return (
      <View>
        <Text>CONTROL PANEL LEFT!!!!</Text>
      </View>
    );
  }

  controlPanelRight() {
    return (
      <View>
        <Text>CONTROL PANEL RIGHT!!!!</Text>
      </View>
    );
  }

  renderNavigatorWrapper() {
    const MainView = () => {
      return (
        <View style={styles.container}>
          <Text onPress={ () => this._drawerLeft.open() }>
            Touch me left
          </Text>
          <Text onPress={ () => this._drawerRight.open() }>
            Touch me right
          </Text>
        </View>
      );
    };

    return (
      <Navigator
        configureScene={ this.configureScene }
        style={{flex: 1}}
        initialRoute={{component: MainView, title: "Experiment List"}}
        renderScene={ this.renderScene }
        navigationBar={
          <Navigator.NavigationBar
            style={styles.nav}
            routeMapper={this.routeMapper()}
          />
        }
      />
    );
  }

  render() {
    return (
      <Drawer
        type="static"
        openDrawerOffset={100}
        closedDrawerOffset={-10}
        styles={drawerLeftStyles}
        tweenHandler={Drawer.tweenPresets.parallax}
        ref={(ref) => this._drawerLeft = ref}
        content={this.controlPanelLeft()}
        panOpenMask={0.5}
        side="left"
        tapToClose
      >
        <Drawer
          type="static"
          openDrawerOffset={100}
          closedDrawerOffset={-10}
          styles={drawerRightStyles}
          tweenHandler={Drawer.tweenPresets.parallax}
          ref={(ref) => this._drawerRight = ref}
          content={this.controlPanelRight()}
          panOpenMask={0.5}
          side="right"
          tapToClose
          >
          {this.renderNavigatorWrapper()}
        </Drawer>
      </Drawer>
    );
  }
}

const drawerLeftStyles = {
  drawer: { backgroundColor: 'green' },
}

const drawerRightStyles = {
  drawer: { backgroundColor: 'red' },
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#BAA1A7'
  },
  navBtnText: {
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15
  },
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
