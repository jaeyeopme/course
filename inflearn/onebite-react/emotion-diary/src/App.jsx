import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/NotFound'
import { getEmotionImage } from './util/get-emotion-image'

function App() {
  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt='emotion1' />
        <img src={getEmotionImage(2)} alt='emotion2' />
        <img src={getEmotionImage(3)} alt='emotion3' />
        <img src={getEmotionImage(4)} alt='emotion4' />
        <img src={getEmotionImage(5)} alt='emotion5' />
      </div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
