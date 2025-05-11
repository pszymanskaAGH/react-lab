import "milligram";
import './App.css';
import {useState} from "react";
import LoginForm from "./LoginForm";

function App() {
    const [loggedIn, setLoggedIn] = useState(null);

    function login(username) {
        if (username) {
            setLoggedIn(username);
        }
    }

    function logout() {
        setLoggedIn(null);
    }

    let content;
    if (loggedIn) {
        content = <div>
            <h2>Witaj {loggedIn}!</h2>
            <button onClick={logout}>Wyloguj</button>
        </div>
    } else {
        content = <LoginForm onLogin={(username) =>login(username)}/>;
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}

export default App;