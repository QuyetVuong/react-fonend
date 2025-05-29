import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'antd/dist/reset.css';
import Login from './pages/Login.tsx'
import Home from './pages/Home.tsx'
import Table from './pages/Table.tsx'



createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/table' element={<Table />} />
    </Routes>
  </BrowserRouter>
)
