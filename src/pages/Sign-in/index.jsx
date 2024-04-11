import Form from "../../containers/Form";
import "./style.css";
import { FaCircleUser } from "react-icons/fa6";
import Header from "../../containers/Header";


function Signin(){
    return (
        <>
        <Header
            to="./"
            SignIn={"Sign In"}
            logoIn={<FaCircleUser/>}
        />
        <main className="main-bg-dark">
            <Form/>
        </main>
        </>
    )
}

export default Signin