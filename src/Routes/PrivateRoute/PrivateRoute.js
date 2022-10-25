import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading){
        return <h1>loading....</h1>;
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace  ></Navigate>;
};

export default PrivateRoute;