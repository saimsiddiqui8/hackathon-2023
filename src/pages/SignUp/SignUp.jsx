import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { notification } from 'antd';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { auth } from '../../Config/firebase';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const openNotificationSuccess = () => {
        notification.open({
            message: 'Hey User!',
            duration: 1,
            description: "Successfully logged In.",
            icon: <CheckCircleOutlined style={{ color: 'lightgreen' }} />,
        });
    };
    const openNotification = () => {
        notification.open({
            message: 'Cannot Find Your User Account',
            description: "Authentication failed! Try again.",
            icon: <CloseCircleOutlined style={{ color: 'red' }} />,
        });
    };
    const signUpUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                openNotificationSuccess()
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                openNotification()
                // ..
            });
    }

    return (
        <div className='text-center mt-5 pt-5' style={{ overflow: "hidden" }}>
            <div>
                <h1 style={{ color: "#61B846" }} className='display-6 fw-bold mt-5'>SAYLANI WELFARE</h1>
                <h5 style={{ color: "#024F9D" }} className='mb-5'>ONLINE DISCOUNT STORE</h5>
                <div className='mt-5'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '35ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="standard-basic" label="Full Name" variant="standard" />
                        <br />
                        <TextField id="standard-basic" label="Contact" variant="standard" />
                        <br />
                        <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <br />
                        <TextField id="standard-basic" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <br />

                    </Box>
                </div>
                <button className='btn btn-success btn-lg fw-bold mt-5 px-4' onClick={signUpUser}>Sign Up</button>
                <Link to="/signIn">
                    <p className='mt-3' style={{ color: "#024F9D" }}>Already have an account? Login</p>
                </Link>
            </div>
        </div>
    )
}

export default SignUp