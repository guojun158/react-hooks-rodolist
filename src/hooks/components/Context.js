import React, { createContext, useReducer, useEffect, useMemo, useState } from 'react';
import { Pagination } from 'antd'
import { reducer, defaultState } from '../reducer'
import { getList } from '../action'
import { queryList } from '../../services/todoList'

export const Context = createContext({})

export default (props) => {
  const PAGE_SIZE = 10
  const [newObj, dispatch] = useReducer(reducer, defaultState)
  const [page, setPage] = useState({ page: 1, pageSize: PAGE_SIZE })

  /**
   * 获取数据
   * @param {对象参数} params 
   */
  const getJSON = (params) => {
    var response = queryList(params)
    response.then((data) => {
      dispatch(getList(data.data.rows || [])) 
    }).catch((error) => {
      console.error(error)
    })
  }
  const onChange = (page) => {
    setPage({
      page,
      pageSize: PAGE_SIZE,
    })
  }
  useMemo(() => getJSON(page), [page])
  useEffect(() => {
    console.dir(props)
    return () => {
      console.log('componentWillunmount')
    }
  }, [])

  useEffect(() => {
    console.log('componentDidUpdate： 更新inputValue')
  }, [newObj.inputValue]);
  return (
    <Context.Provider value={{ newObj, dispatch }}>
      <h2>todoList</h2>
      {props.children}
      <div style={{ textAlign: 'center' }}>
        <Pagination defaultCurrent={page.page} total={10} onChange={onChange} />
      </div>
    </Context.Provider>
  )
}