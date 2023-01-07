import { Routes, Route } from 'react-router-dom'

import { Header } from './components'
import { Login, Registration } from './pages'

import Container from '@mui/material/Container'

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
