import { AsyncStorage } from 'react-native'
export default class DataStore {
    fetchData(url) {
        return new Promise((resolve, reject) => {
            this.fetchLocalData(url)
                .then(wrapData => {
                    if (wrapData && DataStore.checkTimestampValid(wrapData.timestamp)) {
                        resolve(wrapData)
                    } else {
                        this.fetchNetData(url)
                            .then(data => {
                                resolve(this._wrapData(data))
                            })
                            .catch(error => {
                                reject(error)
                            })
                    }
                })
                .catch(error => {
                    this.fetchNetData(url)
                        .then(data => {
                            resolve(this._wrapData(data))
                        })
                        .catch(error => {
                            reject(error)
                        })
                })
        })
    }
    /**
     * 保存数据到本地
     * @param {*} url
     * @param {*} data
     * @param {*} callback
     * @memberof DataStore
     */
    saveData(url, data, callback) {
        if (!url || !data) return
        AsyncStorage.setItem(
            url,
            this._wrapData(JSON.stringify(data)),
            callback
        )
    }
    /**
     * 封装数据格式 加时间戳
     * @param {*} data
     */
    _wrapData(data) {
        return { data, timestamp: new Date().getTime() }
    }
    /**
     * 获取本地数据
     * @param {*} url
     * @returns {Promise}
     */
    fetchLocalData(url) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(url, (error, result) => {
                if (!error) {
                    try {
                        resolve(JSON.parse(result))
                    } catch (error) {
                        // 解析为json错误时暴露错误
                        reject(error)
                        console.error(error)
                    }
                } else {
                    reject(error)
                    console.error(error)
                }
            })
        })
    }
    /**
     * 获取网络请求
     * @param {*} url
     * @returns
     */
    fetchNetData(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error('new work was not ok')
                })
                .then(responseData => {
                    this.saveData(url, responseData)
                    resolve(responseData)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
    /**
     * 检查timestamp是否在有效期内
     * @param {*} timestamp 项目更新时间
     * @returns true 为需要更新 false 为不需要更新
     */
    static checkTimestampValid(timestamp) {
        const currentDate = new Date()
        const targetDate = new Date()
        targetDate.setTime(timestamp)
        if (targetDate.getFullYear() !== currentDate.getFullYear()) return false
        if (targetDate.getMonth() !== currentDate.getMonth()) return false
        if (targetDate.getDate() !== currentDate.getDate()) return false
        if (targetDate.getHours() < currentDate.getHours() - 4) return false
        return true
    }
}
