import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'
import WelcomePage from './../page/WelcomePage'
import HomePage from './../page/HomePage'
import DetailPage from './../page/DetailPage'
import FetchDemoPage from './../page/FetchDemoPage'
import AsyncStorageDemoPage from './../page/AsyncStorageDemoPage'
import DataStoreDemoPage from './../page/DataStoreDemoPage'
const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null
        }
    }
})

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            // header: null
        }
    },
    FetchDemoPage: {
        screen: FetchDemoPage,
        navigationOptions: {}
    },
    AsyncStorageDemoPage: {
        screen: AsyncStorageDemoPage,
        navigationOptions: {}
    },
    DataStoreDemoPage: {
        screen: DataStoreDemoPage,
        navigationOptions: {}
    }
})

export default createAppContainer(
    createSwitchNavigator(
        {
            Init: InitNavigator,
            Main: MainNavigator
        },
        {
            defaultNavigationOptions: {
                header: null
            }
        }
    )
)
