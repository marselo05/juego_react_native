import React, {useState, useEffect} from 'react'
import {
    View, 
    Button, 
    Text, 
    Keyboard, 
    TouchableWithoutFeedback, 
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import colors from '../constants/colors'
import NumberContainer from '../components/NumberContainer'

const StartGameScreen = ({ onStartGame }) => {
    const [enteredValue, setEnteredValue]       = useState('')
    const [confirmed, setConfirmed]             = useState()

    const handleInputValue = text => {
        setEnteredValue( text.replace(/[^0-9]/g, '') )
    }

    const handlerResetInput = () => setEnteredValue()

    const handlerConfirmInput = () => {
        const choseNumber = parseInt( enteredValue )
        if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return

        setConfirmed(enteredValue)
        setEnteredValue('')
    }

    const handlerStarrGame = () => onStartGame(confirmed)

    const confirmedOutPut = confirmed ? (
        <Card style={styles.inputContainer}>
            <Text>Número seleccionado: {confirmed}</Text>
            <NumberContainer>{confirmed}</NumberContainer>
            <Button 
                title="Empezar el juego"
                color={colors.primary}
                onPress={handlerStarrGame}
            />
        </Card>
    ) : null


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                
                <Text style={styles.title}>Comenzar juego</Text>

                <View>    
                    <Card style={styles.inputContainer}>
                        <Text style={styles.subTitle}>Elija un número</Text>
                        <Input 
                            maxLength={2}
                            keyboardType="numeric"
                            autoCapitalization="none"
                            autoCorrect={false}
                            value={enteredValue}
                            onChangeText={handleInputValue}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button 
                                    title="Limpiar" 
                                    onPress={handlerResetInput}
                                    color={colors.accent} 
                                />
                            </View>
                            <View style={styles.button}>
                                <Button 
                                    title="Confirmar" 
                                    onPress={handlerConfirmInput}
                                    color={colors.primary} />
                            </View>    
                        </View>
                    </Card>
                </View>
                {confirmedOutPut }

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        paddingVertical: 0,
        paddingHorizontal: 50,
    },
    screenLs: {
        flexDirection: 'row',
        padding: 30,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-regular',
    },
    subTitle: {
        fontSize: 16,
        marginVertical: 5,
        fontFamily: 'open-sans-regular',
    },
    inputContainer: {
        flex: 1,
        width: '100%',
        marginHorizontal: Dimensions.get('window').width > 600 ? '30%' : '20%',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: Dimensions.get('window').width / 3,
        padding: 10
    },
})

export default StartGameScreen