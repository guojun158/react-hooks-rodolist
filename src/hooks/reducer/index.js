import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, GET_LIST, CHANGE_INPUT} from '../action'
import { deepClone } from '../../utils'

const defaultState = {
  inputValue: 'hello world',
  list: [
    'React - 源码解析 - 生命周期(自定义组件)',
    'Redux - 源码解析',
    'React - 源码解析 - setState运行机制',
    'React - 源码解析 - DOM模型',
    'Redux - Middleware - 源码解析',
  ]
}
const reducer = (state, action) => {
  const newObj = deepClone(state)
  if (action.type === ADD_ITEM) {
    newObj.list.unshift(action.payload.item)
    return newObj;
  } else if (action.type === UPDATE_ITEM) {
    const { index, value } = action.payload
    newObj.list[index] = value
    return newObj
  } else if (action.type === DELETE_ITEM) {
    newObj.list = newObj.list.filter((item) => item !== action.payload.item)
    return newObj;
  } else if (action.type === GET_LIST) {
    newObj.list = action.payload.list;
    return newObj;
  } else if (action.type === CHANGE_INPUT) {
    newObj.inputValue = action.payload.value
    return newObj;
  } else {
    return state
  }
}
export {
  defaultState,
  reducer,
}




