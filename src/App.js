import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [authenticatedUserName, setAuthenticatedUserName] = useState(null);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {!authenticatedUserName && (
                <div>
                    Zaloguj sie emailem
                    <input type="text" value={email} onChange={handleChange}/>
                    <button type="button" onClick={() => setAuthenticatedUserName(email)}>
                        Wchodzę
                    </button>
                </div>
            )}
            {authenticatedUserName && (
                <div><h4>Jestes zalogowany jako {authenticatedUserName}</h4>
                    <a onClick={() => setAuthenticatedUserName(null)}>Wyloguj</a>
                </div>
            )}
        </div>);
}

export default App;