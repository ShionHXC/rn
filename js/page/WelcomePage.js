import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import NavigationUtil from './../navigator/NavigationUtil'
export default class WelcomePage extends Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomePage(this.props)
        }, 1000)
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }
    render() {
        return (
            <View style={styles.contenter}>
                <Text style={styles.welcome}> Welcome my app </Text>
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
