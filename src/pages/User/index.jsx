import Header from "../../containers/Header";
import { FaSignOutAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";


function User(){
    return(
        <>
        <Header
            SignIn={"Tony"}    
            SignOut={"Sign Out"}
            logoIn={<FaCircleUser/>}
            logoOut={<FaSignOutAlt/>}
            to="./"
            to2="../sign-in"
        />
        <main>

        </main>
        </>
    )
}

export default User