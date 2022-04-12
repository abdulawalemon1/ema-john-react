import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }
    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Sorry Password didnt match!')
            return;
        }
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>SignUp</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="cofirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="cofirm-password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p style={{ color: 'red' }}>{error}</p>
                <p>Already have an account? <Link className='form-link' to="/login">Login</Link></p>

            </div>

        </div>
    );
};

export default SignUp;