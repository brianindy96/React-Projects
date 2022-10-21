import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
    <div id='login-page'>
        <div id="login-card">
            <h2>Welcome to Chat!</h2>

            <div className='login-button google'>
                <GoogleIcon /> Login with Google
            </div>
            <br /><br/>
            <div className='login-button facebook'>
                <FacebookOutlinedIcon /> Login with Facebook
            </div>
        </div>
    </div>
  )
}

export default Login