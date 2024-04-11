import "./style.css";
import { Link, useLocation } from 'react-router-dom';


function FormButton() {
    return (
        <Link to="/user">
        <button className="form-button">
            Sign-In
        </button>
        </Link>
    )
}

export default FormButton