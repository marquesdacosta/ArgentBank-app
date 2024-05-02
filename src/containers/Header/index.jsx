import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/argentBankLogo.webp";
import { FaCircleUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import "./style.css"
import LinkMainNav from '../../components/LinkMainNav';

function Header(){
    return (
        <header>
            <nav>
                <Link to="/"className='logo-link'><img src={logo} alt="logo argent bank" className='logo' />
                </Link>
                <div>
                    <LinkMainNav/>
                </div>
            </nav>
        </header>
    )
}


export default Header