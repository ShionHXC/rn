import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

export default class FetchDemoPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            showText: ''
        }
    }
    loadData(){
        let url = `https://api.github.com/search/repositories?q=${this.searchKey}`
        fetch(url).then(response => {
            if(response.ok){
                return response.text()
            }
            throw new Error('reponse was not ok.')
        })
        .then(responseText => {
            this.setState({
                showText: responseText 
            })
        })
        .catch(e => {
            this.setState({
                showText: e.toString()
            })
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
                        this.searchKey = text
                    }}
                />
                <Button
                    title={'查询'}
                    onPress={() => {
                        this.loadData()
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
