import React, { useEffect, useState } from 'react';
import '../css/RegistrationForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearStatus, registerUser } from '../store/features/auth/authSlice';
import { toast } from 'react-toastify';
export const RegisterPage = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {status} =useSelector((state)=>state.auth);


    
    useEffect(() => {
        if (status) {
            toast(status);
            dispatch(clearStatus()); // Очистка статуса после отображения
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Останавливаем стандартное поведение формы
        try {
            await dispatch(registerUser({ login, password }));
            setPassword('');
            setLogin('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="registration-form">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="login">Login:</label>
                    <input
                        type="text"
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
