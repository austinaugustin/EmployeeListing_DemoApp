import React, {Component} from 'react';
import {StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native';
import {
  Container,
  View,
  Header,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
  Body,
  Title,
  Left,
  Icon,
  Right,
  List,
  ListItem,
  Thumbnail,
  Footer,
  FooterTab,
} from 'native-base';

import {theme} from '../../css/theme';
import {common} from '../../css/common';
import LinearGradient from 'react-native-linear-gradient';

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Header
          androidStatusBarColor="#1E8CFB"
          iosBarStyle="dark-content"
          style={[theme.themeheader]}>
          <Body style={[common.pl20]}>
            <Title>My Orders</Title>
          </Body>
          <Right></Right>
        </Header>
        <LinearGradient
          colors={['#1E8CFB', '#0FBCDB', '#03E9BF']}
          style={{
            paddingLeft: 0,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}>
          <ScrollView>
            <View
              style={[
                common.bgwhite,
                theme.cardlogin,
                common.ml15,
                common.mr15,
                common.p0,
                common.mb10,
              ]}>
              <View
                style={[
                  common.flexstyle,
                  common.p10,
                  common.pb0,
                  common.center,
                ]}>
                <View style={[common.flexone]}>
                  <Text style={[common.fontsemibold, common.font18]}>
                    #256455HKL25
                  </Text>
                </View>
                <View>
                  <Button rounded style={[theme.themebtn, {height: 30}]}>
                    <Text style={[common.fontsemibold, common.textlover]}>In-Transist</Text>
                  </Button>
                </View>
              </View>
              <ListItem thumbnail style={[common.m0]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <Text style={[common.fontsemibold, common.textlarg]}>
                    Etisalat
                  </Text>
                  <Text
                    style={[
                      common.fontmedium,
                      common.textmedium,
                      theme.themeblue,
                    ]}>
                    Pre Paid
                  </Text>
                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>Validity:12 months</Text>
                  <Text style={[common.fontsemibold]}>1.0 GB/Day</Text>
                  <Text style={[common.fontmedium, common.danger]}>
                    Expiration 12/06/2020
                  </Text>
                </Body>
              </ListItem>
            </View>

            <View
              style={[
                common.bgwhite,
                theme.cardlogin,
                common.ml15,
                common.mr15,
                common.p0,
                common.mb10,
              ]}>
              <View
                style={[
                  common.flexstyle,
                  common.p10,
                  common.pb0,
                  common.center,
                ]}>
                <View style={[common.flexone]}>
                  <Text style={[common.fontsemibold, common.font18]}>
                    #256455HKL25
                  </Text>
                </View>
                <View>
                  <Button rounded style={[theme.confirmed, {height: 30}]}>
                    <Text style={[common.fontsemibold, common.textlover]}>Confirmed</Text>
                  </Button>
                </View>
              </View>
              <ListItem thumbnail style={[common.m0]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <Text style={[common.fontsemibold, common.textlarg]}>
                    Etisalat
                  </Text>
                  <Text
                    style={[
                      common.fontmedium,
                      common.textmedium,
                      theme.themeblue,
                    ]}>
                    Pre Paid
                  </Text>
                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>Validity:12 months</Text>
                  <Text style={[common.fontsemibold]}>1.0 GB/Day</Text>
                  <Text style={[common.fontmedium, common.danger]}>
                    Expiration 12/06/2020
                  </Text>
                </Body>
              </ListItem>
            </View>
          </ScrollView>
        </LinearGradient>
      </Container>
    );
  }
}