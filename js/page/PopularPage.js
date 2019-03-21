import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import {
    createAppContainer,
    createMaterialTopTabNavigator
} from 'react-navigation'
import NavigationUtil from './../navigator/NavigationUtil'
export default class PopularPage extends Component {
    constructor(props) {
        super(props)
        console.disableYellowBox = true
        this.tabs = ['JavaScript', 'Html', 'CSS', 'React', 'VUE', 'Node']
    }
    _getTabs() {
        const tabs = {}
        this.tabs.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => <PopularTab {...props} tabLabel={item} />,
                navigationOptions: {
                    title: item
                }
            }
        })
        return tabs
    }
    render() {
        const TabNavigator = createAppContainer(
            createMaterialTopTabNavigator(this._getTabs(), {
                tabBarOptions: {
                    tabStyle: styles.tabStyle,
                    upperCaseLabel: false, // 是否使标签大写 默认true
                    scrollEnabled: true,
                    style: {
                        backgroundColor: 'green' // tabbar背景颜色
                    },
                    indicatorStyle: {
                        // 底部指示器样式
                        height: 2,
                        backgroundColor: '#fff'
                    },
                    labelStyle: {
                        fontSize: 13,
                        marginBottom: 6,
                        marginTop: 6
                    }
                }
            })
        )
        return (
            <View style={{ flex: 1, marginTop: 30 }}>
                <TabNavigator />
            </View>
        )
    }
}
class PopularTab extends Component {
    render() {
        const { tabLabel } = this.props
        console.disableYellowBox = true
        return (
            <View style={styles.contenter}>
                <Text style={styles.welcome}> PopularPage </Text>
                <Text
                    style={styles.welcome}
                    onPress={() => {
                        NavigationUtil.goPage(
                            'DetailPage',
                            this.props.navigation
                        )
                    }}
                >
                    go DetailPage
                </Text>
                <Button
                    style={styles.welcome}
                    title={'go FetchDemoPage'}
                    onPress={() => {
                        NavigationUtil.goPage(
                            'FetchDemoPage',
                            this.props.navigation
                        )
                    }}
                />
                 <Button
                    style={styles.welcome}
                    title={'go AsyncStorage Demo'}
                    onPress={() => {
                        NavigationUtil.goPage(
                            'AsyncStorageDemoPage',
                            this.props.navigation
                        )
                    }}
                />
                <Button
                    style={styles.welcome}
                    title={'数据缓存框架'}
                    onPress={() => {
                        NavigationUtil.goPage(
                            'DataStoreDemoPage',
                            this.props.navigation
                        )
                    }}
                />
                <Text style={styles.welcome}>{tabLabel}</Text>
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
    },
    tabStyle: {
        minWidth: 50
    }
})
