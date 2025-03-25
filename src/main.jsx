import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import {
    Home,
    LoginForm,
    SignUp,
    Articles,
    ProtectionLayer,
} from './components/index'
import PostingForm from './components/PostingForm.jsx'
import PostFullView from './components/PostFullView.jsx'
import User from './components/User.jsx'
import EditPostForm from './components/EditPostForm.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'login',
                element: <LoginForm />,
            },
            {
                path: 'signup',
                element: <SignUp />,
            },
            {
                path: 'articles',
                element: (
                    <ProtectionLayer authentication={true}>
                        <Articles />
                    </ProtectionLayer>
                ),
            },
            {
                path: 'create',
                element: (
                    <ProtectionLayer authentication={true}>
                        <PostingForm />
                    </ProtectionLayer>
                ),
            },
            {
                path: 'edit/:id',
                element: (
                    <ProtectionLayer authentication={true}>
                        <EditPostForm />
                    </ProtectionLayer>
                ),
            },
            {
                path: ':id',
                element: (
                    <ProtectionLayer authentication={true}>
                        <PostFullView />
                    </ProtectionLayer>
                ),
            },
            {
                path: 'profile',
                element: (
                    <ProtectionLayer authentication={true}>
                        <User />
                    </ProtectionLayer>
                ),
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
