import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import colors  from '../constants/colors'

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Platform.OS === 'android' ? colors.tonoUno : '#722676',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: Platform.OS === 'android' ? 'black' : colors.primary,
        fontSize: 22,
        fontFamily: 'open-sans-bold'
    }
})

export default Header;