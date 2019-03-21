import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class TrendingPage extends Component {
    render() {
        const {navigation} = this.props
        return (
            <View style={styles.contenter}>
                <Text style={styles.welcome}> TrendingPage </Text>
                <Button
                    title={'切换颜色'}
                    onPress={() => {
                        navigation.setParams({
                            theme: {
                                tintColor: 'red',
                                updateTime: new Date().getTime()
                            }
                        })
                    }}
                />
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
