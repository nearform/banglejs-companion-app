// Applications screen layout
import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  ListItem,
  Text,
  Left,
  Body,
} from 'native-base';

import { StyleSheet } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

// Different apps with icons subjected to change after designer's feedback
export default class AppsScreen extends Component {
  render() {
    return (

      <Container style={styles.container}>

        <Content style={{ height: 2000 }} >

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#E0674D" }}>
                <Icon2 name="apps-box" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>App manager</Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon2 name="bluetooth" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth Widget</Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#0D53D6" }}>
                <Icon2 name="clock-out" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Center Clock</Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#0D6A1A" }}>
                <Icon2 name="matrix" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Binary Clock</Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon2 name="flag-triangle" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Espruino Flag Raiser</Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#DC8406" }}>
                <Icon2 name="compass-outline" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Compass</Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#DC1D06" }}>
                <Icon2 name="heart-pulse" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Heart rate monitor</Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#DC8406" }}>
                <Icon2 name="satellite-uplink" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>GPS Info </Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#0D53D6" }}>
                <Icon2 name="alarm" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Default Alarm </Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#E0674D" }}>
                <Icon2 name="battery" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Battery Level Widget </Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#0D6A1A" }}>
                <Icon2 name="music-note-bluetooth" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth Music Control</Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#E0674D" }}>
                <Icon2 name="duck" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Flappy Bird </Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon2 name="cube-unfolded" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Clock Tris </Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#E0674D" }}>
                <Icon2 name="keyboard-variant" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth keyboard </Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon2 name="satellite-variant" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>GPS Time </Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#0D6A1A" }}>
                <Icon2 name="clock-fast" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Morphing Clock </Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#0D53D6" }}>
                <Icon2 name="hand" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Gesture Test </Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#E0674D" }}>
                <Icon3 name="horse" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text> Horse Race </Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon3 name="bell" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text> Jingle Bells </Text>
            </Body>
          </ListItem>

          <ListItem icon onPress={() => alert('Connecting ...')}>
            <Left>
              <Button style={{ backgroundColor: "#DC1D06" }}>
                <Icon3 name="walking" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text> Pedometer widget </Text>
            </Body>
          </ListItem>

        </Content>

      </Container>

    );
  }
}

// Main container styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAF0EC',
    marginTop: 80
  },
});