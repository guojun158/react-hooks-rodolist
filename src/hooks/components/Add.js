import React, { useContext, useRef } from 'react'
import { Context } from '../components/Context';
import { message } from 'antd'
import { addItem, changeInput } from '../action'
import { deleteSpace } from '../../utils'
 
export default () => {
  const inputElement = useRef(null)
  const { newObj, dispatch } = useContext(Context) 
  const handleAddItem = () => {
    const value = inputElement.current.value;
    if (deleteSpace(value)) {
      dispatch(addItem(value));
    } else {
      message.error('不能为空！')
    }
  }
  
  return (
    <div className="search">
      <input 
        type="text" 
        value={newObj.inputValue} 
        onChange={e => dispatch(changeInput(e.target.value))} 
        ref={inputElement}>
      </input>
      <button onClick={handleAddItem}>添加</button>
    </div>
  )
}