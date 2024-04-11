import { FaCircleUser } from "react-icons/fa6";
import "./style.css";
import FormButton from "../../components/FormButton";


function Form(){
    return (
        <section className="sign-in-content">
            <div className="sign-in-div">
                <FaCircleUser style={{ fill: '#2c3e50' }}/>
                <h1>Sign In</h1>
            </div>
            <form action="" method="">
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text"/>
                </div>
                <div className="remember">
                    <input type="checkbox" id="remember" className="input-remember"/>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <FormButton/>
            </form>
        </section>
    )
}

export default Form