import "./style.css";


function WelcomeMessage({prenom, nom }) {
    return (
        <div className="welcome-msg">
            <h1>
                Welcome back <br />
                {prenom} {nom}!
            </h1>
        </div>
    )
}

export default WelcomeMessage