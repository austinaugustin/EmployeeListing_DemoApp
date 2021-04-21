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
  Picker,
  Icon,
  Right,
  ListItem,
  Thumbnail,
  Footer,
  FooterTab
} from 'native-base';

import {theme} from '../../css/theme';
import {common} from '../../css/common';
import LinearGradient from 'react-native-linear-gradient';

export default class Profile extends Component {

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
        <StatusBar barStyle="light-content" />
        <Header
          androidStatusBarColor="#1E8CFB"
          iosBarStyle="light-content "
          style={[theme.themeheader]}>
          {/* <Left>
            <Icon
              name="arrow-back"
              type="MaterialIcons"
              style={[common.white]}></Icon>
          </Left> */}
          <Body>
            <Title style={[common.pl20]}>Profile</Title>
          </Body>
          <Right />
        </Header>

        <LinearGradient
          colors={['#1E8CFB', '#0FBCDB', '#03E9BF']}
          style={{
            padding: 15,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}>
          <ScrollView>
            <View style={[theme.profilewp]}>
              <View style={theme.profilethumb}>
                <Image
                  source={require('../../assets/images/user_thumb.png')}
                  style={{width: '100%'}}></Image>
              </View>
            </View>
            <View style={[common.p10]}>
              <Text
                style={[
                  common.white,
                  common.fontsemibold,
                  common.textXlarg,
                  common.textcenter,
                ]}>
                Francine Hawkins
              </Text>
              <Text
                style={[
                  common.textcenter,
                  common.white,
                  common.fontmedium,
                  common.font18,
                  common.mb15,
                ]}>
                francinehawkin@gmail.com
              </Text>
              <Button
                rounded
                style={[theme.themebtn, common.center, {width: 200}]}>
                <Text
                  style={[
                    common.textcenter,
                    common.center,
                    common.textlarg,
                    common.fontsemibold,
                  ]}>
                  EDIT
                </Text>
              </Button>
            </View>
            <View
              style={[common.bgwhite, theme.cardlogin, common.mt10, common.p0]}>
              <View style={[common.flexstyle, common.justfycenter, common.p20]}>
                <View style={[common.p10]}>
                  <Icon
                    name="lock-outline"
                    type="MaterialCommunityIcons"
                    style={[common.textgray]}></Icon>
                </View>
                <View>
                  <Text style={[common.fontmedium, common.textlarg]}>
                    Change Password
                  </Text>
                </View>
              </View>
              <View
                style={[
                  common.flexstyle,
                  common.justfycenter,
                  common.p20,
                  theme.bordertop,
                ]}>
                <View style={[common.p10]}>
                  <Icon
                    name="logout-variant"
                    type="MaterialCommunityIcons"
                    style={[common.textgray]}></Icon>
                </View>
                <View>
                  <Text style={[common.fontmedium, common.textlarg]}>
                    Logout
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </Container>
    );
  }
}