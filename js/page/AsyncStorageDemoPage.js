import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Button,
    AsyncStorage
} from 'react-native'

export default class AsyncStorageDemoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            save: ''
        }
    }
    async doSave() {
        try {
            await AsyncStorage.setItem('save_key', this.searchKey)
        } catch (error) {
            // Error saving data
            console.warn('Error saving data')
        }
    }
    async doRemove() {
        try {
            await AsyncStorage.removeItem('save_key')
        } catch (error) {
            console.warn('Error remove data')
        }
    }
    async getData() {
        try {
            const value = await AsyncStorage.getItem('save_key')
            if (value !== null) {
                this.setState({ save: value })
            } else {
                this.setState({ save: '' })
            }
        } catch (error) {
            console.warn('Error retrieving data')
            // Error retrieving data
        }
    }
    render() {
        return (
            <View style={styles.contenter}>
                <Text style={styles.welcome}> Fetch Demo </Text>
                <View style={styles.inputContent}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => {
                            this.searchKey = text
                        }}
                    />
                    <Button
                        title={'存储'}
                        onPress={() => {
                            this.doSave()
                        }}
                    />
                    <Button
                        title={'删除'}
                        onPress={() => {
                            this.doRemove()
                        }}
                    />
                    <Button
                        title={'获取'}
                        onPress={() => {
                            this.getData()
                        }}
                    />
                </View>

                <Text>{this.state.save}</Text>
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
