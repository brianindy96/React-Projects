import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import "firebase/app";
import { signInWithRedirect, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {

    const providerFacebook = new FacebookAuthProvider();
    const providerGoogle = new GoogleAuthProvider();

  return (
    <div id='login-page'>
        <div id="login-card">
            <h2>Welcome to Chat!</h2>

            <div 
            className='login-button google'
            onClick={() => signInWithRedirect(auth, providerGoogle)}
            >
                <GoogleIcon /> Login with Google
            </div>
            <br /><br/>
            <div 
            className='login-button facebook'
            onClick={() => signInWithRedirect(auth, providerFacebook)}
            >
                <FacebookOutlinedIcon /> Login with Facebook
            </div>
        </div>
    </div>
  )
}

export default Login