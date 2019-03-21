import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class MyPage extends Component {
    render() {
        return (
            <View style={styles.contenter}>
                <Text style={styles.welcome}> MyPage </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcfc'
    },
    welcome: {
        fontSize: 20
    }
})
