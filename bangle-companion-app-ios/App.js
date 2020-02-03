import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export default function App() {
  return (
    <ImageBackground 
    source={require('./assets/nearformbg.jpg')}
    style={{
      width: '100%',
      height: '100%'
      }}>
      <View style={{flex: 1}}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Bangle.js Companion</Text>
          </View>
      </View>
      <View style={{
        flex: 3,
        justifyContent: 'space-evenly'
        }}>
        <View style={styles.menuItem} >
          <Text style={styles.titleText}>Menu Item 1</Text>
        </View>
        <View style={styles.menuItem} >
          <Text style={styles.titleText}>Menu Item 2</Text>
        </View>
        <View style={styles.menuItem} >
          <Text style={styles.titleText}>Menu Item 3</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    height: 180,
    backgroundColor: '#2165e5',
    shadowOffset:{width: 0,height: 10,},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    justifyContent:'center',
    alignItems:'center',
  },
  titleText: {
    fontFamily: 'Campton-BoldDEMO',
    fontSize: 35,
    color: '#fd775e',
    margin: 10
  },
  menuItem: {
    backgroundColor: '#2165e5',
    height: 100,
    shadowOffset:{width: 0,height: 10,},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    justifyContent:'center',
  }
});