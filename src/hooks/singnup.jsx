import { useState, useEffect } from "react";
import controler from '../controlers/authControlers.js';

const Signup = ({ singupData }) => {
    const {name, email, password} = singupData
    const [registerData, setRegisterData] = useState({ name: name, email: email, password: password});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            await controler.register(registerData);
            setSuccess(true);
        } catch (err) {
            console.log(err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {success && <p>Registration successful!</p>}
        </div>
    );
};

export default Signup;
