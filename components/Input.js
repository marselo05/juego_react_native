import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import colors from '../constants/colors'

const Input = (props) => {
    return(
        <TextInput 
            style={styles.input}
            {...props}
        />
    )
} 

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.tonoTres,  
        margin: 10, 
        width: 40,
        borderColor: colors.tonoCuatro, 
        borderWidth: 1,
        borderRadius: 3,
        textAlign: 'center'
    }
})

export default Input