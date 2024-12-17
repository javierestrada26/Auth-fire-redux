import { loginWithEmailAndPassword, logoutFirebase, registerWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthenticaction =  (email, password) => {
    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
   
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage))
        
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) => {
    return async(dispatch)=>{
        dispatch(checkingCredentials());

        const {ok,uid,photoURL, errorMessage} =  await registerWithEmailAndPassword({email, password, displayName})

        if(!ok) return dispatch(logout({errorMessage}))

        dispatch(login({uid, email, displayName, photoURL}))
        
    }
}


export const startLoginWithEmailAndPassword = ({email, password}) => {
    return async(dispatch)=>{
        dispatch(checkingCredentials());
        const result =  await loginWithEmailAndPassword({email, password})

        if(!result.ok) return dispatch(logout(result))

        dispatch(login(result))
    }
}


export const startLogout = () => {
    return async(dispatch)=>{
        await logoutFirebase();
        dispatch(clearNotesLogout())
        dispatch(logout())
       
    }
}

