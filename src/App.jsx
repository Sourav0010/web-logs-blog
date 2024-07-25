import {Outlet} from 'react-router-dom'
import { Footer, Header } from './components/index'
import { useSelector } from 'react-redux'
function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
