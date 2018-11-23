import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uuid) => ({
    type: 'LOGIN',
    uuid
});

// pass the provider into a function
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};