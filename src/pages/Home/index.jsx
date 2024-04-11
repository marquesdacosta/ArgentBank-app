import Banner from '../../components/Banner';
import Features from '../../containers/Features';
import Header from '../../containers/Header';
import { FaCircleUser } from "react-icons/fa6";

function Home() {
    return (
        <>
            <Header 
                to="./sign-in"
                SignIn={"Sign In"}
                logoIn={<FaCircleUser/>}
            />
            <main>
                <Banner />
                <Features />
            </main>
        </>
    );
}
export default Home