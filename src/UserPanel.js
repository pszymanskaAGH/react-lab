import {useState} from "react";

export default function UserPanel(props) {
    const [email, setEmail] = useState('');

    return <div>
        <h2>Witaj {props.username}!</h2>
        <button onClick={() => props.onLogout(email)}>Wyloguj</button>
    </div>
}