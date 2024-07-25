import React,{ useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function ProtectionLayer({authentication = false,children}) {

    const [loder,setLoder] = React.useState(true);
    let authStatus = useSelector(state => state.userAuth.status);
    const navigate = useNavigate()
    useEffect(()=>{
         if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/posts")
        }
        setLoder(false)
    }, [authStatus, navigate, authentication])

  return loder ? <h1>Loading...</h1> : <>{children}</>
  
}

export default ProtectionLayer