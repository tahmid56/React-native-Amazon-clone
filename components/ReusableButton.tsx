import { View, Text, Pressable, StyleSheet, GestureResponderEvent } from 'react-native'
import React from 'react'


export default function ReusableButton({onButtonPress, btnText}: any) {
    return (
        <View>
            <Pressable style={styles.button}>
                <Text style={styles.btnText}>{btnText}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        backgroundColor: "#FEBE10",
        borderRadius: 6,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
        alignItems: "center"
    },
    btnText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    }
})