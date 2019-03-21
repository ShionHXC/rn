import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { BottomTabBar } from 'react-navigation-tabs'
import NavigarionUtil from './../navigator/NavigationUtil'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PopularPage from './../page/PopularPage'
import TrendingPage from './../page/TrendingPage'
import FavoritePage from './../page/FavoritePage'
import MyPage from './../page/MyPage'
const TABS = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({ tintColor, focused }) => {
                return (
                    <MaterialIcons
                        name={'whatshot'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({ tintColor, focused }) => {
                return (
                    <Ionicons
                        name={'ios-trending-up'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({ tintColor, focused }) => {
                return (
                    <MaterialIcons
                        name={'favorite'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => {
                return (
                    <MaterialIcons
                        name={'person'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                )
            }
        }
    }
}
export default class DynamicTabNavigation extends Component {
    _tabNavigator() {
        const { PopularPage, TrendingPage, FavoritePage, MyPage } = TABS
        const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage }
        // 动态修改tab页标题
        PopularPage.navigationOptions.tabBarLabel = '最热'
        return createAppContainer(
            createBottomTabNavigator(tabs, {
                tabBarComponent: TabBarComponent
            })
        )
    }
    render() {
        const Tab = this._tabNavigator()
        return <Tab />
    }
}

class TabBarComponent extends Component {
    constructor(props) {
        super(props)
        console.warn(props)

        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        }
    }
    render() {
        const { routes, index } = this.props.navigation.state
        if (routes[index].params) {
            const { theme } = routes[index].params
            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme
            }
        }
        const activeTintColor =
            this.theme.tintColor || this.props.activeTintColor
        return (
            <BottomTabBar {...this.props} activeTintColor={activeTintColor} />
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
