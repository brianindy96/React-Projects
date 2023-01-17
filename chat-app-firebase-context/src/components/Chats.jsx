import { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { ChatEngine } from "react-chat-engine"
import { auth } from "../firebase";
import { useAuth } from '../context/AuthContext';

const Chats = () => {

    const projectId = import.meta.env.VITE_PROJECT_ID;
    const privateKey = import.meta.env.VITE_PRIVATE_KEY;
    const navigate = useNavigate();
    const { user } = useAuth(null);
    const [loading, setLoading] = useState(true);

    // console.log(user);
    const handleLogout = async () => {
        await auth.signOut();

        navigate('/');
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: "image/jpeg"})
    }

    useEffect(() => {
      if(!user){
        navigate('/');

        return;
      }

    //   what do we do if we get user

    axios.get("https://api.chatengine.io/users/me", {
        headers: {
            "project-id": projectId,
            "user-name": user.email,
            "user-secret": user.uid,
        }
    }).then(() => {
        setLoading(false);
    })
    .catch(() => {
        let formdata = new FormData();
        formdata.append('email', user.email);
        formdata.append('username', user.displayName);
        formdata.append('secret', user.uid);

        getFile(user.photoURL)
            .then((avatar) => {
                formdata.append('avatar', avatar, avatar.name)
            
                axios.post('https://api.chatengine.io/users', formdata, { headers: { "private-key": privateKey } })
                .then(() => setLoading(false))
                .catch((error) => console.log(error))
            })
        })  
    }, [user, navigate])

    if(!user || loading ) return 'Loading.....';
    

  return (
    <div className="chats-page">
        <div 
        className="nav-bar"
        onClick={handleLogout}
        >
            <div className="logo-tab">
                ChatApp
            </div>
            <div className="logout-tab">
                Logout
            </div>
        </div>
            <ChatEngine 
                height="calc(100vh-66px)"
                projectID={projectId}
                userName={user.email}
                userSecret={user.uid}
            />
    </div>
  )
}

export default Chats