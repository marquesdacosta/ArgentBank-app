import Header from "../../containers/Header";
import WelcomeMessage from "../../components/WelcomeMessage";
import EditNameButton from "../../components/EditNameButton";
import Accounts from "../../containers/Accounts";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import React, { useState } from 'react';
import EditNameForm from "../../components/EditNameForm";

function User(){

    const isConnected = useSelector(state => state.auth.isConnected);
    const navigate = useNavigate();

    useEffect(() => {
    if (!isConnected) {
      navigate('/sign-in');
    }
  }, [isConnected, navigate]);


    const [isFormVisible, setIsFormVisible] = useState(false);
    const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

    return(
        <>
        <Header/>
        <main className="main-bg-dark" style={{ padding: '0', paddingTop: '48px' }}>
        <WelcomeMessage/>
        <EditNameButton onClick={toggleForm}/>
         {isFormVisible && <EditNameForm onClose={toggleForm}/>}
        <Accounts/>
        </main>
        </>
    )
}

export default User