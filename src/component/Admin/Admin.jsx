import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { db } from '../../Config/firebase';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';

const Admin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [price, setPrice] = useState("")
    const [unit, setUnit] = useState("")

    const data = {
        name:email,
        description:password,
        price,
        unit,
    }

    const navigate = useNavigate()
    console.log(email, password);
    const certRef = collection(db, "items")
    // console.log();
    const sendData = () => {
        addDoc(certRef, data);
    }


    return (
        <div className='text-center mt-5 pt-5' style={{ overflow: "hidden" }}>
            <div>
                <h1 style={{ color: "#61B846" }} className='display-6 fw-bold mt-5'>SAYLANI WELFARE</h1>
                <h5 style={{ color: "#024F9D" }} className='mb-5 pb-3'>ONLINE DISCOUNT STORE</h5>
                <div className='mt-5'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '35ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="standard-basic" label="name" variant="standard" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <br />
                        <TextField id="standard-basic" label="description" variant="standard" onChange={(e) => setPassword(e.target.value)}
                            value={password} />
                        {/* <TextField id="standard-basic" label="price" variant="standard" onChange={(e) => setPrice(e.target.value)}
                            value={price} />
                        <TextField id="standard-basic" label="unit" variant="standard" onChange={(e) => setUnit(e.target.value)}
                            value={unit} /> */}
                    </Box>
                </div>
                <button className='btn btn-success btn-lg fw-bold my-5 px-4' onClick={sendData}>Sign In</button>
                <Link to="/signUp">
                    <p className='mt-3' style={{ color: "#024F9D" }}>Don’t have an account? Register</p>
                </Link>
            </div>
        </div>
    )
}

export default Admin