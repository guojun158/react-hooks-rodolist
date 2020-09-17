const ADD_ITEM = 'addItem'
const UPDATE_ITEM = 'updateItem'
const DELETE_ITEM = 'deleteItem'
const GET_LIST = 'getList'
const CHANGE_INPUT = 'changeInput'

const addItem = (item) => ({
  type: ADD_ITEM,
  payload: {
    item
  }
})

const updateItem = (index, value) => ({
  type: UPDATE_ITEM,
  payload: {
    index,
    value,
  }
})

const deleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: {
    item
  }
})

const getList = (data) => ({
  type: GET_LIST,
  payload: {
    list: data.map((item) => item.userName)
  }
})

const changeInput = (value) => ({
  type: CHANGE_INPUT,
  payload: {
    value
  }
})

export {
  ADD_ITEM,
  addItem,
  UPDATE_ITEM,
  updateItem,
  DELETE_ITEM,
  deleteItem,
  GET_LIST,
  getList,
  CHANGE_INPUT,
  changeInput,
}