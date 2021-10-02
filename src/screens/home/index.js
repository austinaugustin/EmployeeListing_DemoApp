import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, Image, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getData, resetData } from '../../store/actions/actions';
import Colors from '../../assets/color';
import Loader from '../../components/loader';

const App = (props) => {

    const { navigation } = props

    const dispatch = useDispatch()
    const employeeList = useSelector((state) => state?.employeeList?.data);
    const isLoading = useSelector((state) => state?.employeeList?.isLoading);
    const errorMessage = useSelector((state) => state?.employeeList?.errorMessage)
    const [inputVal, setInput] = useState('')
    const [data, setData] = useState(employeeList)
    const [error, setError] = useState(errorMessage)

    useEffect(() => {
        dispatch(resetData())
        dispatch(getData())
    }, [])

    const searchData = (val) => {
        let searchVal = val.toLowerCase()
        const newData = employeeList.filter((item) => {
            return item.name.toLowerCase().search(searchVal) > -1 || item.email.toLowerCase().search(searchVal) > -1;
        });
        setData(newData);
        newData.length == 0 ? setError('No search results') :  setError('')
        setInput(val)
    }

    const renderChild = ({ item, index }) => {
        const { name, profile_image, company } = item
        return (
            <TouchableOpacity style={styles.card} key={index} onPress={() => navigation.navigate('Profile', { item: item })}>
                <Image source={{ uri: profile_image }} style={styles.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{company?.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar barStyle={'light-content'} backgroundColor={Colors.primaryColor} />
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={inputVal}
                        selectionColor='#FEA157'
                        placeholder='Search Employee'
                        selectionColor={Colors.primaryColor}
                        placeholderTextColor={Colors.lightColor}
                        onChangeText={searchData} />
                </View>
            </View>
            <View style={styles.content}>
                {isLoading ?
                    <Loader /> :
                    data?.length > 0 ?
                        <FlatList
                            data={data}
                            style={styles.flatlist}
                            renderItem={renderChild}
                            keyExtractor={(_, index) => index.toString()}
                        />
                        :
                        null
                }
                {error ? <Text style={styles.nodata}>{error}</Text> : null}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    container: {
        paddingHorizontal: 15,
        backgroundColor: '#1E8CFB'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        paddingHorizontal: 15,
        borderRadius: 20,
        height: 40,
        marginVertical: 15
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 14,
        color: Colors.blackColor,
        paddingHorizontal: 10
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        backgroundColor:Colors.lightColor
    },
    content: {
        flex: 1,
    },
    flatlist:{
        paddingTop: 20
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: Colors.whiteColor,
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 6
    },
    titleContainer: {
        paddingLeft: 15,
        flex: 1
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.blackColor,
        lineHeight: 20
    },
    subtitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.primaryColor,
        lineHeight: 17
    },
    nodata: {
        fontSize: 14,
        textAlign: 'center',
        paddingTop:20
    }
});

export default App;
