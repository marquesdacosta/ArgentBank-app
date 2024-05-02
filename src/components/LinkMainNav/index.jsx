import { Link } from 'react-router-dom';
import "./style.css";
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../app/actions/actions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaCircleUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";


function LinkMainNav() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  // Accédez aux informations de l'utilisateur connecté depuis le state Redux
  const { isConnected, userInfo } = useSelector(state => state.auth);
  const {userName} = useSelector(state => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/sign-in'); // Redirige vers la page de login après la déconnexion
  };

    return (
        <div className='main-nav'>
          {isConnected ? (
            <>
              <FaCircleUser />
              <Link to="/user"><span>{userName}</span></Link>
              <div className='icone-btn'>
              <FaSignOutAlt />
              <button className='logout-btn' onClick={handleLogout}> Sign Out</button>
              </div>
            </>
          ) : (
            <>
            <FaCircleUser />
            <Link to="/sign-in">Sign In</Link>
            </>
          )}
      </div>
    )
}

export default LinkMainNav