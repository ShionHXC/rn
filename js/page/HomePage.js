import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import NavigarionUtil from './../navigator/NavigationUtil'
import DynamicTabNavigation from './../navigator/DynamicTabNavigation'
export default class HomePage extends Component {
    render() {
        NavigarionUtil.navigation = this.props.navigation
        return <DynamicTabNavigation />
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
