import React from 'react'
import {View} from 'react-native'
import styles from './Styles'

const Card = props => {
    return(
        <View style={[ styles.containerShadow, styles.containerColor, props.styles ]}>
            {props.children}
        </View>
    );
}
export default Card
