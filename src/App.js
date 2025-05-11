import "milligram";
import './App.css';
import {useState} from "react";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import MeetingsPage from "./meetings/MeetingsPage";

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

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedIn ? <UserPanel username={loggedIn} onLogout={logout}/> : <LoginForm onLogin={login}/>
            }
            <MeetingsPage/>
        </div>
    );
}

export default App;