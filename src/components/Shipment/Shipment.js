import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();


    const handleNameBlur = e => {
        setName(e.target.value)
    }
    const handleAddressBlur = e => {
        setAddress(e.target.value)
    }
    const handlePhoneNumberBlur = e => {
        setPhoneNumber(e.target.value)
    }


    const handleCreateUser = e => {
        const email = user?.email;
        e.preventDefault();
        const shipping = { name, email, address, phoneNumber };
        console.log(shipping);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Infromation</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="text" name="phone" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Submit" />
                </form>
                <p style={{ color: 'red' }}>{error}</p>


            </div>

        </div>
    );
};

export default Shipment;