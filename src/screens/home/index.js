import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, Image, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { getData, resetData, updateData } from '../../store/actions/actions';
import Colors from '../../assets/color';
import Loader from '../../components/loader';
import Images from '../../assets/image';

const App = (props) => {

    const type = [{ title: 'Pre Paid', type: 'prepaid' }, { title: 'Post Paid', type: 'postpaid' }, { title: 'Broadband', type: 'broadband' }]
    const dispatch = useDispatch()
    const [inputVal, setInput] = useState('')
    const [operator, setOperator] = useState('')
    const [selectedType, setSelectedType] = useState('prepaid')
    const data = useSelector((state) => state?.simcardList?.data);
    const isLoading = useSelector((state) => state?.simcardList?.isLoading);
    const operatorData = useSelector((state) => state?.simcardList?.operators)
    const errorMessage = useSelector((state) => state?.simcardList?.errorMessage)
    const loader = useSelector((state) => state?.simcardList?.loader)

    useEffect(() => {
        dispatch(resetData())
        dispatch(getData(inputVal, selectedType, operator))
    }, [])

    const fetchData = (val) => {
        setSelectedType('')
        setOperator('')
        dispatch(getData(inputVal, '', '', val))
    }

    const onChangeType = (val) => {
        setSelectedType(val)
        dispatch(updateData(inputVal, val, operator))
    }

    const onChangeOperator = (val) => {
        setOperator(val)
        dispatch(updateData(inputVal, selectedType, val))
    }

    const renderChild = (item, index) => {
        const { name, validity, currency, image, plan_type, flexi_minutes, price } = item
        return (
            <View style={styles.card} key={index}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.planType}>{plan_type}<Text style={styles.subtitle}>{`${flexi_minutes ? '  Minutes:' + flexi_minutes : ''}`}</Text></Text>
                    {validity ? <Text style={styles.validity}>Validity:<Text style={styles.subtitle}>  {validity}</Text></Text> : null}
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{currency} {price}</Text>
                    <Text style={styles.data}>{`${item.data ? item.data : ''}`}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar barStyle={'light-content'} backgroundColor={Colors.primaryColor} />
            <View style={styles.linearGradient}>
                <View style={styles.row}>
                    <Text style={styles.headerText}>Search Result</Text>
                    <Icon name='ellipsis-vertical' type="Ionicons" style={styles.headerText} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={inputVal}
                        selectionColor='#FEA157'
                        placeholder='Search Country'
                        selectionColor={Colors.primaryColor}
                        placeholderTextColor={Colors.lightColor}
                        onSubmitEditing={() => fetchData(true)}
                        onChangeText={(e) => setInput(e)} />
                    {loader ?
                        <Loader /> :
                        <TouchableOpacity onPress={() => fetchData(true)}>
                            <Icon name='search' type="Ionicons" style={styles.icon} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style={styles.contentContainer}>
                        <ScrollView horizontal style={styles.scroll}>
                            {type.map((item, index) => (
                                <TouchableOpacity onPress={() => onChangeType(item.type)} key={index} style={[styles.typeContainer, { backgroundColor: selectedType == item.type ? Colors.primaryColor : Colors.whiteColor }]}>
                                    <Image source={Images[item.type]} style={{ tintColor: selectedType == item.type ? Colors.whiteColor : Colors.primaryColor }} />
                                    <Text style={[styles.type, { color: selectedType == item.type ? Colors.whiteColor : Colors.primaryColor }]}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        {operatorData.length > 0 ?
                            <>
                                <Text style={styles.operator}>Operators</Text>
                                <ScrollView horizontal style={styles.scroll} showsHorizontalScrollIndicator={false}>
                                    {operatorData?.map((item, index) => (
                                        <TouchableOpacity key={index} style={[styles.operatorContainer, { borderColor: operator === item.id ? Colors.primaryColor : Colors.whiteColor }]} onPress={() => onChangeOperator(item.id)}>
                                            <Image source={{ uri: item?.image }} style={styles.image} />
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </>
                            : null}
                    </View>
                    <View style={styles.content}>
                        {isLoading ?
                            <Loader /> :
                            data?.length > 0 ?
                                <View style={styles.flatlist}>
                                    {data?.map((item, index) => (
                                        renderChild(item, index)
                                    ))}
                                </View>
                                :
                                null
                        }
                        {errorMessage ? <Text style={styles.nodata}>{errorMessage}</Text> : null}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    linearGradient: {
        paddingHorizontal: 15,
        backgroundColor: '#1E8CFB'
    },
    headerText: {
        fontSize: 16,
        color: Colors.whiteColor
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15
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
    icon: {
        fontSize: 22,
        color: Colors.blackColor,
    },
    scroll: {
        flexGrow: 0,
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10
    },
    typeContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: Colors.whiteColor,
        elevation: 2,
        borderRadius: 6,
        marginHorizontal: 5,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    type: {
        paddingLeft: 5
    },
    operator: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.blackColor,
        paddingHorizontal: 15,
        paddingTop: 15
    },
    operatorContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: Colors.whiteColor,
        elevation: 2,
        borderRadius: 6,
        marginVertical: 5,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    container: {
        flex: 1
    },
    content: {
        paddingTop: 20
    },
    contentContainer: {
        backgroundColor: Colors.whiteColor,
        paddingBottom: 10
    },
    iconSearch: {
        height: 16,
        width: 16,
        resizeMode: 'contain'
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
    planType: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.primaryColor,
        lineHeight: 17
    },
    subtitle: {
        fontSize: 12,
        color: Colors.titleColor,
        fontWeight: 'bold',
        lineHeight: 17
    },
    validity: {
        fontSize: 12,
        fontWeight: '200',
        color: Colors.titleColor,
        lineHeight: 17
    },
    priceContainer: {
        alignItems: 'flex-end'
    },
    price: {
        fontSize: 14,
        color: Colors.priceColor,
        fontWeight: 'bold',
        lineHeight: 19
    },
    data: {
        fontSize: 12,
        color: Colors.titleColor,
        fontWeight: 'bold'
    },
    nodata: {
        fontSize: 14,
        textAlign: 'center'
    }
});

export default App;
