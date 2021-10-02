import React from 'react';
import { ActivityIndicator } from 'react-native';
import Colors from '../assets/color';

const Loader = (props) => {
    return (
        <ActivityIndicator style={{padding:20}} size='small' color={Colors.primaryColor} />
    )
};

export default Loader;