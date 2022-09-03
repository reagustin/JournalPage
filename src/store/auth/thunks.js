// import { useDispatch } from "react-redux"
// import { async } from '@firebase/util';
import { registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';
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

export const startCreatingUserWithEmailPassword = ({email, password, displayName }) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const resp = await registerUserWithEmailPassword({email, password, displayName});
        console.log(resp);
    }
}