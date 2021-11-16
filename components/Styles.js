import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    containerShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    containerColor: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        marginVertical: 5,
    }
})