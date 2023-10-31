import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'
const App =() => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' elemnt={<Home />} />
        <Route path='/hotels' elemnt={<List />} />
        <Route path='/hotels/:id' elemnt={<Hotel />} />
      </Routes>
    </BrowserRouter>
  )
}


