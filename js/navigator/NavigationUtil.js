/* 
    全局导航控制类
*/

export default class NavigationUtil {
    /**
     * 返回上一页
     *
     * @static
     * @param {*} navigation
     * @memberof NavigationUtil
     */
    static goBackTo(navigation) {
        navigation.goBack()
    }
    /**
     * 跳转到首页
     * @static
     * @param {*} params
     * @memberof NavigationUtil
     */
    static resetToHomePage(params) {
        const { navigation } = params
        navigation.navigate('Main')
    }
    /**
     * 跳转到指定页面并传递页面参数
     *
     * @static
     * @param {*} page
     * @param {*} params
     * @memberof NavigationUtil
     */
    static goPage(page, params) {
        const navigation = NavigationUtil.navigation
        if (!navigation) {
            console.warn('Navigation can be null')
            return
        }
        navigation.navigate(page, { ...params })
    }
}
