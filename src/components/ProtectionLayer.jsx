import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

function ProtectionLayer({ authentication = false, children }) {
   const [loder, setLoder] = React.useState(true);

   let authStatus = useSelector((state) => state.userAuth.status);

   const navigate = useNavigate();

   useEffect(() => {
      if (authentication && authStatus !== authentication) {
         navigate('/');
      } else if (!authentication && authStatus !== authentication) {
         navigate('/posts');
      }
      setLoder(false);
   }, [authStatus, navigate, authentication, loder]);

   return loder ? <Loading /> : <>{children}</>;
}

export default ProtectionLayer;
