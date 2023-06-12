import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Gifs from '../../pages/Gifs'
import Gif from '../../pages/Gif'
import TopNav from '../nav/TopNav'

const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path='/' element={<Gifs />} />
        <Route path=':id' element={<Gif />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router