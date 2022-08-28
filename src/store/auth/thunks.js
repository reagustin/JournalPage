// import { useDispatch } from "react-redux"
import { checkingCredentials } from './authSlice'

export const checkingAuthentication = (email, password) => {

    // const dispatch = useDispatch();
    
    return async(dispatch) => {
        
        dispatch(checkingCredentials());

    }
};

export const startGoogleSignIn = () => {
        
    return async(dispatch) => {
        
        dispatch(checkingCredentials());

    }
};