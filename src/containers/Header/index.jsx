import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/argentBankLogo.webp";
import { FaCircleUser } from "react-icons/fa6";
import "./style.css"

function Header(){
    return (
        <header>
            <nav>
                <Link to="/"className='logo-link'><img src={logo} alt="logo argent bank" className='logo' />
                </Link>
                <div>
                    <Link to="/sign-in" className='main-nav'>
                        <FaCircleUser style={{ fill: '#2c3e50' }}/>
                        <p>Sign In</p>
                    </Link>
                </div>
            </nav>
        </header>
    )
}


export default Header