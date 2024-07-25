import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./store/store.js"
import { Provider } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import { Home } from './components/index'
import LoginForm from './components/LoginForm.jsx'
import SignUp from './components/SignUp.jsx'
import {Articles} from './components/index'
import ProtectionLayer from './components/ProtectionLayer.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'login',
        element: <LoginForm/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      },
      {
        path: 'articles',
        element: (
          <ProtectionLayer authentication={true}>
            <Articles/>
          </ProtectionLayer>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      
      <RouterProvider router={router}/>
    
    </Provider>
  </React.StrictMode>,
)
