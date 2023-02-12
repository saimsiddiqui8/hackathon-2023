import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../Config/firebase"
import TextField from '@mui/material/TextField';

import { notification } from 'antd';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  console.log(email, password);

  const login = () => {
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

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        // window.localStorage.setItem("isLoggedIn", true)
        openNotificationSuccess()
        navigate("/home")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        openNotification()
      });
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
            <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)} value={email} />
            <br />
            <TextField id="standard-basic" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)}
              value={password} />
          </Box>
        </div>
        <button className='btn btn-success btn-lg fw-bold my-5 px-4' onClick={login}>Sign In</button>
        <Link to="/signUp">
          <p className='mt-3' style={{ color: "#024F9D" }}>Don’t have an account? Register</p>
        </Link>
      </div>
    </div>
  )
}

export default SignIn