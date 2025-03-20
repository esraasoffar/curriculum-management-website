
import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import users from '../../users.json';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [ username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Simple validation for empty fields
        if (!username ||!password) {
            setError('Please enter both username and password.');
            return;
        }

        // Check if the entered credentials match any of the users in the JSON file
        const user = users.find( user => user.username === username && user.password === password)

        if(user){
            setError('');
            navigate('/home');
        }
        else {
            setError('Invalid username or password.');
        }
    };
    return (
        <>
        <div className={styles.loginContainer}>
        <h2>Login</h2>
        <form className={styles.loginForm} onSubmit={handleLogin}>
            
            {/* username input field */}
            <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            </div>

            {/* password input field */}
            <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
            />
            </div>

            {/* error message */}
            {error && <div className={styles.errorMessage}>{error}</div>}

            {/* submit button */}
            <button type="submit" className={styles.loginBtn}>Login</button>

        </form>
    </div>
        </>
    )
}

export default LoginForm