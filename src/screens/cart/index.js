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

export default class CartPage extends Component {

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
            <Title>Cart</Title>
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
            <List style={[common.pr15, common.mt20, common.pl15]}>
              <ListItem thumbnail style={[theme.listcard]}>
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
                </Body>
                <Right>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textXlarg,
                      common.blue,
                    ]}>
                    $ 250
                  </Text>
                  <Button rounded style={[theme.btn_blue]}>
                    <Text>Remove</Text>
                  </Button>
                </Right>
              </ListItem>
              <ListItem thumbnail style={[theme.listcard]}>
                <Left style={[common.p5]}>
                  <Thumbnail
                    square
                    source={require('../../assets/images/operator.png')}
                    style={{width: 80, height: 80}}
                  />
                </Left>
                <Body>
                  <View style={[common.flexstyle]}>
                    <View style={{flex: 2}}>
                      <Text style={[common.fontsemibold, common.textlarg]}>
                        Etisalat
                      </Text>
                      <Text
                        style={[
                          common.fontsemibold,
                          common.textmedium,
                          theme.orange,
                        ]}>
                        Post Paid
                      </Text>
                    </View>
                    <View style={[common.mr15]}>
                      <Button rounded style={[theme.btn_blue, {height: 30}]}>
                        <Text>Remove</Text>
                      </Button>
                    </View>
                  </View>

                  <Text style={[common.fontsemibold]}>Minutes: 600</Text>
                  <Text style={[common.fontsemibold]}>Validity:12 months</Text>
                  <Text style={[common.fontsemibold]}>1.0 GB/Day</Text>
                  <Text
                    style={[
                      common.fontsemibold,
                      common.textmedium,
                      common.danger,
                    ]}>
                    Non payable at the time of checkout
                  </Text>
                  <Text style={[common.blue, common.fontmedium, common.mt10]}>
                    Edit Installation Addrees
                  </Text>
                </Body>
              </ListItem>
            </List>
            <View style={[common.flexstyle, common.p15, common.bgwhite]}>
              <View style={[common.flexone]}>
                <Text style={[common.fontmedium, common.font18]}>
                  Total Amount:
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    common.fontsemibold,
                    common.textXlarg,
                    common.textright,
                  ]}>
                  $250.00
                </Text>
              </View>
            </View>
            <View style={[common.pl20, common.pr20]}>
              <Button rounded light block style={[theme.themebtn, common.mt20]}>
                <Text
                  style={[
                    common.fontsemibold,
                    common.white,
                    common.textlarg,
                    common.bold800,
                  ]}>
                  PROCEED
                </Text>
              </Button>
            </View>
          </ScrollView>
        </LinearGradient>
      </Container>
    );
  }
}