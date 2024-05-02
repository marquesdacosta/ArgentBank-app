import "./style.css";
import { useSelector } from 'react-redux';

function WelcomeMessage() {

    const { firstName, lastName } = useSelector(state => state.user);
    return (
        <div className="welcome-msg">
            <h1>
                Welcome back <br />
                {firstName} {lastName}!
            </h1>
        </div>
    )
}

export default WelcomeMessage