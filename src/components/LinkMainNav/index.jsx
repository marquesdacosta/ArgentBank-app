import { Link, useLocation } from 'react-router-dom';
import "./style.css";


function LinkMainNav({to , SignIn, SignOut , logoIn, logoOut , to2}) {
    return (
        <div className='all-nav'>
        <Link to={to} className='main-nav'>
            {logoIn}
            <p>{SignIn}</p>
        </Link>
        <Link to={to2} className='nav-log-out'>
            {logoOut}
            <p>{SignOut}</p>
        </Link>
        </div>
    )
}

export default LinkMainNav