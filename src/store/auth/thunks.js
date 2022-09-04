// import { useDispatch } from "react-redux"
// import { async } from '@firebase/util';
import { registerUserWithEmailPassword, signInWithGoogle, loginWithEmailPassword } from '../../firebase/providers';
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

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});
        
        if (!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, email, photoURL}));
    }
}


export const startLoginWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage, displayName} = await loginWithEmailPassword({email, password});

        if (!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName, email, photoURL}));
    }
}