import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    let validationMsg = "";

    function handleChange(event) {
        setEmail(event.target.value);
    }

    if (email.length < 5) {
        validationMsg = "Ale masz krotki adres!";
    } else if (email.length > 12) {
        validationMsg = "Ale długi adres!";
    } else {
        validationMsg = "Adres email ok!"
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <div>{validationMsg}</div>
            <input type="text" value={email} onChange={handleChange}/>
            <button type="button" onClick={() => alert(email)}>
                Wyświetl mój e-mail w alercie
            </button>
        </div>
    );
}

export default App;