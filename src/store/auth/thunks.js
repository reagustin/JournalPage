// import { useDispatch } from "react-redux"
import { signInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice'

export const checkingAuthentication = (email, password) => {

    // const dispatch = useDispatch();
    
    return async(dispatch) => {
        
        dispatch(checkingCredentials());

    }
};

export const startGoogleSignIn = () => {
        
    return async(dispatch) => {
        
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        console.log(result.errorMessage);
        if ( !result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));
    }
};