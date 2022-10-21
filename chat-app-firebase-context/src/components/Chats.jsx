import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatEngine } from "react-chat-engine"
import { auth } from "../firebase";
import { useAuth } from '../context/AuthContext';

const Chats = () => {

    const projectId = import.meta.env.VITE_PROJECT_ID;
    const navigate = useNavigate();
    const { user } = useAuth();
    // console.log(user);
    const handleLogout = async () => {
        await auth.signOut();

        navigate('/');
    }
    

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
                projectId={projectId}
                userName="."
                userSecret="."
            />
    </div>
  )
}

export default Chats