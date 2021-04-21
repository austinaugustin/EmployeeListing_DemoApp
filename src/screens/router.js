
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './home';
import Cart from './cart';
import Orders from './orders';
import Profile from './profile';
import Colors from '../assets/color';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  function getImage(route) {
    if (route.name == "Search") {
      return 'home';
    }
    if (route.name == "Cart") {
      return 'shopping-cart';
    }
    if (route.name == "Orders") {
      return 'truck';
    }
    if (route.name == "Profile") {
      return 'user';
    }
  }

  return (
    <View style={{ flexDirection: 'row',backgroundColor:Colors.whiteColor,height:60 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon name={getImage(route)} type="FontAwesome" style={{ color: isFocused ? Colors.primaryColor : Colors.secondaryColor }} />
            <Text style={{ color: isFocused ? Colors.primaryColor : Colors.secondaryColor }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Search" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;