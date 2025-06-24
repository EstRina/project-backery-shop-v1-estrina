import type {LoginData} from "../utils/shop-types.ts";
import {signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../configurations/firebase-config.ts"

const loginWithEmail = async (data: LoginData) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    return data.email;
}

const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return Promise.resolve("")
}
export const login = async (data: LoginData) => {
    return data.email === "GOOGLE" ? loginWithGoogle() : loginWithEmail(data)
}