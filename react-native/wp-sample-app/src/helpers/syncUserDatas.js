import { AsyncStorage } from 'react-native'

/** @function public downloadUserDatas().

This function download and return users data from AsyncStorage.

@param {function} callback the callback function.
*/

export function downloadUserDatas (callback) {
  // start download datas
  return AsyncStorage.getItem('userDatas', callback)
}

/** @function public uploadUserDatas(datas).

This function upload to async storage the new user datas.

@param {object} datas the user datas object.
*/

export function uploadUserDatas (datas) {
  console.log('called')
  let stringDatas = JSON.stringify(datas)
  AsyncStorage.setItem('userDatas', stringDatas, (err) => {
    console.log(err)
  })
}
