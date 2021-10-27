import React from "react";
import ReactDOM from "react-dom";

function App() {
    const [developer, setDeveloper] = React.useState({
        language: "python",
        yearsExperience: 0,
        isEmployed: false
    });
    
    function handleChangeLanguage() {
        setDeveloper({
            language: "javascript",
            yearsExperience: 0
        });
    }
    
    function handleChangeYears(event) {
        setDeveloper({
            ...developer,
            yearsExperience: event.target.value
        });
    }

    function handleEmployment() {
        setDeveloper(prevState => ({
            ...prevState,
            isEmployed: !prevState.isEmployed
        }));
    }

    return (
        <div>
            <p>I learn {developer.language}</p>
            <p>I have {developer.yearsExperience} years experience.</p>
            <p>I am {developer.isEmployed ? "employed" : "unemeployed"}.</p>
            <button onClick={handleChangeLanguage}>Click</button>
            <input type="number" onChange={handleChangeYears} />
            <button onClick={handleEmployment}>Employment Status</button>
        </div>
    )
}


const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
