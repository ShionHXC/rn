import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import DataStore from './../expend/dao/DataStore'
export default class DataStoreDemoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showText: ''
        }
        this.dataStore = new DataStore()
    }
    getData() {
        let url = `https://api.github.com/search/repositories?q=${this.value}`
        this.dataStore.fetchData(url).then(data => {
            let showText = `初次数据加载时间${new Date(
                data.timestamp
            )}\n${JSON.stringify(data.data)}`
            this.setState({ showText: showText })
        })
    }

    render() {
        return (
            <View style={styles.contenter}>
                <Text style={styles.welcome}> Fetch Demo </Text>
                <View style={styles.inputContent}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => {
                            this.value = text
                        }}
                    />
                    <Button
                        title={'获取'}
                        onPress={() => {
                            this.getData()
                        }}
                    />
                </View>

                <Text>{this.state.showText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contenter: {
        flex: 1,
        backgroundColor: '#f5fcfc'
    },
    welcome: {
        fontSize: 20
    },
    inputContent: {
        flexDirection: 'row',
        textAlign: 'center',
        margin: 10
    },
    input: {
        height: 30,
        flex: 1,
        borderColor: '#000',
        borderWidth: 1
    }
})
