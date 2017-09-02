import * as types from '../mutation_types'
import { setMsg } from '../../tool'
let localStorage = window.localStorage
let storeBaseInfo = (data) => {
  localStorage.setItem('cnodeBaseInfo', JSON.stringify(data))
}
let storeDetailInfo = (data) => {
  localStorage.setItem('cnodeDetailInfo', JSON.stringify(data))
}
// 获取存储在localStorage中的数据
export const getStore = ({dispatch, state}) => {
  if (localStorage.getItem('cnodeBaseInfo')) {
    let data = JSON.parse(localStorage.getItem('cnodeBaseInfo'))
    dispatch(types.SET_BASEINFO, data)
  }
  if (localStorage.getItem('cnodeDetailInfo')) {
    let data = JSON.parse(localStorage.getItem('cnodeDetailInfo'))
    dispatch(types.SET_DETAIL, data)
  }
}
// 设置基础数据
export const setBaseInfo = ({dispatch, state}, token, callback, res) => {
  let data = JSON.parse(res.data)
  if (data.success) {
    data.accesstoken = token
    delete data.success
    storeBaseInfo(data)
    dispatch(types.SET_BASEINFO, data)
    callback(setMsg(true, '登录成功'))
  } else {
    console.log(data.error_msg)
    callback(setMsg(false, data.error_msg))
  }
}
export const setDetail = ({dispatch, state}, res) => {
  if (state.userInfo.loginName === '') return false
  let data = JSON.parse(res.data)
  if (data.success) {
    storeDetailInfo(data.data)
    dispatch(types.SET_DETAIL, data.data)
  }
}
export const deleteUserInfo = ({dispatch}) => {
  dispatch(types.DELETE_USER_INFO)
  localStorage.removeItem('cnodeBaseInfo')
  localStorage.removeItem('cnodeDetailInfo')
  return true
}

export const setMsgs = ({dispatch, state}, callback, res) => {
  let data = JSON.parse(res.data)
  let d = data.data
  if (!data.success) {
    callback(setMsg(false, '请求出错'))
  } else {
    let listData = d.hasnot_read_messages.concat(d.has_read_messages)
    dispatch(types.SET_MSGS, listData)
  }
}
