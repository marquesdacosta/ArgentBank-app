import { FaCircleUser } from "react-icons/fa6";
import "./style.css";
import FormButton from "../../components/FormButton";
import { login } from "../../app/actions/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Form(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { error, isConnected, userInfo } = useSelector((state) => state.auth);
    const token = userInfo ? userInfo.token : null;

    console.log('Error:', error);
    console.log('isConnected:', isConnected);
    console.log('Token:', token);

    function submit(event) {
        event.preventDefault();
        dispatch(login(email, password));
    }

    useEffect(() => {
        if (token) {
            navigate('/user');
        }
    }, [token, navigate]);

    return (
        <section className="sign-in-content">
            <div className="sign-in-div">
                <FaCircleUser style={{ fill: '#2c3e50' }}/>
                <h1>Sign In</h1>
            </div>
            <form onSubmit={submit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="remember">
                    <input type="checkbox" id="remember" className="input-remember"/>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <FormButton />
                {error && <div className="error-message">{error}</div>}
            </form>
        </section>
    )
}

export default Form