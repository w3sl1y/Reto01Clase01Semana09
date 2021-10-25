import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export function Buttons () {
    return (
        <TouchableOpacity
        style={{...styles.button}}>
            <Text style={{...styles.create}}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#00b4d8',
        padding: 10,
        borderRadius: 15,
        width: 180
    },
    create:{
        color: '#fff',
        textAlign: 'center'
    }
})