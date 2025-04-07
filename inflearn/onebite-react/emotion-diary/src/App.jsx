import { createContext, useEffect, useReducer, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/NotFound'

function reducer(state, action) {
  let nextState

  switch (action.type) {
    case 'INIT':
      return action.data
    case 'CREATE':
      nextState = [action.data, ...state]
      break
    case 'UPDATE':
      nextState = state.map((it) =>
        String(it.id) === String(action.data.id) ? action.data : it
      )
      break
    case 'DELETE':
      nextState = state.filter((it) => String(it.id) !== String(action.id))
      break
  }

  localStorage.setItem('diary', JSON.stringify(nextState))
  return nextState
}

export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0)

  useEffect(() => {
    const localData = localStorage.getItem('diary')

    if (!localData) {
      setIsLoading(false)
      return
    }
    const parseData = JSON.parse(localData)
    if (!Array.isArray(parseData) || parseData.length === 0) {
      setIsLoading(false)
      return
    }

    if (localData) dispatch({ type: 'INIT', data: parseData })
    idRef.current = Math.max(...parseData.map((it) => it.id)) + 1
    setIsLoading(false)
  }, [])

  const onCreate = ({ createdDate, emotionId, content }) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    })
  }

  const onUpdate = ({ id, createdDate, emotionId, content }) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    })
  }

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    })
  }

  if (isLoading) {
    return <div className='App'>로딩중입니다...</div>
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
