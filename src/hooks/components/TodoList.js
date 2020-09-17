import React, { useContext, useState, useRef } from 'react';
import { message } from 'antd'
import { Context } from '../components/Context'
import { deleteItem, updateItem } from '../action'
import { deleteSpace } from '../../utils'

export default () => {
  const {newObj, dispatch} = useContext(Context) 
  const [index, setIndex] = useState(null)
  const inputRef = useRef(null)
  const handleOK = (e, index) => {
    const value = inputRef.current.value;
    if (deleteSpace(value)) {
      dispatch(updateItem(index, value));
    } else {
      message.error('不能为空！')
    }
    setIndex(null)
  }
  const handleClose = (e, index) => {
    setIndex(null)
  }
  const handleOpen = (e, index) => {
    setIndex(index)
  }
  return (
    <div>
      <ul className="list">
        {newObj.list.map((item, i) => 
          <li key={+new Date() + Math.random()}>{item}
            {i === index ?
              <p>
                <input type="text" ref={inputRef}></input>
                <button onClick={(e) => handleOK(e, i)}>确定</button>
                <button onClick={(e) => handleClose(e, i)}>取消</button>
              </p> : null
            }
            <span>
              <u onClick={e => handleOpen(e, i)}>编辑</u> | 
              <u onClick={e => dispatch(deleteItem(item))}>删除</u>
            </span>
          </li>
        )}
      </ul>
    </div>
  )
} 