import React from 'react'
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from '../firebase';

const style = {
    wrapper: `
        flex
        justify-center
    `,
}

{/* function to sign in with google and authenticate */}
const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
}

const SignIn = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton style={{borderRadius: '0.2rem'}} onClick={googleSignIn} />
    </div>
  )
}

export default SignIn