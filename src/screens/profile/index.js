import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, Image, View, ScrollView, Platform, Linking } from 'react-native';
import Colors from '../../assets/color';
import Images from '../../assets/image';

const App = (props) => {

  const { route } = props
  const data = route?.params?.item

  const onPressLoc = () => {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${data.address.geo.lat},${data.address.geo.lng}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });
    Linking.openURL(url);
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.primaryColor} />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: data?.profile_image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{data?.name}</Text>
            <Text style={styles.username}>{data?.username}</Text>
            {data?.company ?
              <View style={styles.company}>
                <Image source={Images.briefcase} style={styles.icon} />
                <View style={styles.textContent}>
                  <Text style={styles.companyName}>{data?.company?.name}</Text>
                  <Text style={styles.phrase}>{data?.company?.catchPhrase}</Text>
                </View>
              </View>
              : null}
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.text}>Email</Text>
            <Text style={styles.title}>{data?.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Phone</Text>
            <Text style={styles.title}>{data?.phone ?? 'Not Available'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Website</Text>
            <Text style={styles.title}>{data?.website ?? 'Not Available'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Address</Text>
            <Text style={styles.title}>{data?.address?.suite},{data?.address?.street}{'\n'}{data?.address?.city}{'\n'}{data?.address?.zipcode}</Text>
          </View>
          <View style={styles.row}>
            <Text onPress={onPressLoc} style={styles.text}>Location</Text>
            <Text style={styles.click}>Click here</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  },
  container: {
    padding: 15,
    backgroundColor: Colors.whiteColor
  },
  icon: {
    height: 16,
    width: 16
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    backgroundColor:Colors.lightColor
  },
  textContainer: {
    paddingLeft: 15
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.blackColor,
    lineHeight: 20
  },
  username: {
    fontSize: 15,
    fontStyle: 'italic',
    color: Colors.blackColor,
    lineHeight: 20,
    paddingTop: 5
  },
  company: {
    flexDirection: 'row',
    paddingTop: 10
  },
  textContent: {
    paddingLeft: 8
  },
  companyName: {
    fontSize: 14,
    color: Colors.blackColor,
    fontWeight: 'bold'
  },
  phrase: {
    fontSize: 14,
    color: Colors.blackColor
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 30
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  text: {
    flex: 1,
    fontSize: 13,
    color: Colors.secondaryColor,
    lineHeight: 22,

  },
  title: {
    flex: 4,
    fontSize: 13,
    color: Colors.blackColor,
    lineHeight: 22,
  },
  click: {
    flex: 4,
    fontSize: 13,
    fontStyle: 'italic',
    color: 'blue',
    lineHeight: 22,
  }
});

export default App;
