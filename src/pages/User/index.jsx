import Header from "../../containers/Header";
import { FaSignOutAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import WelcomeMessage from "../../components/WelcomeMessage";
import EditNameButton from "../../components/EditNameButton";
import Accounts from "../../containers/Accounts";


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
        <main className="main-bg-dark" style={{ padding: '0', paddingTop: '48px' }}>
        <WelcomeMessage
        prenom={"Tony"}
        nom={"Jarvis"}
        />
        <EditNameButton/>
        <Accounts/>
        </main>
        </>
    )
}

export default User