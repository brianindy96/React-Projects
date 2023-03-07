// import firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function SignIn() {

  const auth = getAuth();
  
  const handleSignIn = () => {
    toast.info('Logging In', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
        });
    signInAnonymously(auth)
  .then(() => {
    console.log("Signed in anonymously")
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(error.message);
    // ...
});
  };

  return (
    <div className='max-w-7xl m-auto h-95 px-5 xl:px-0'>
        <div className='w-full h-95 flex flex-col justify-center items-center'>
            <h1 className='text-4xl mb-1 font-bold'>Please Log In:</h1>
            <p className='text-center text-lg'>For the safety of the website, please log in</p>
            <button onClick={handleSignIn} className='rounded-md mt-4 hover:bg-blue-400 px-24 py-2 bg-blue-500 text-white'>Log In anonymously</button>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>
  );
}

export default SignIn;