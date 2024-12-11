import * as React from 'react';
import { AddUser } from '../features/User/userApi';
import Button from '@mui/joy/Button'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsUser } from '../features/User/userSlice';
import UserNavBar from '../components/UserNavBar';
import '../styles/UserNavBar.scss'
import { Box } from '@mui/material';
export default function SignUp() {
  const navigate = useNavigate()
  let emailText = ''
  let newUser = {
    id: 0,
    identity: 0,
    password: 0,
    name: '',
    email: '',
    phone: 0
  }
  const dis = useDispatch()
  const arrUsers = useSelector(x => x.user.arrUsers)
  function check() {
    let flag1 = true, flag2 = false
    if (newUser.email.indexOf('@') < 0) {
      emailText = "the email address must contain @"
      flag1 = false
    }
    else {
      emailText = ""
    }
    return flag1;
  }

  function log() {

    if (check()) {
      dis(AddUser(newUser))
      dis(setIsUser(true))
      navigate('/ApartmentNavBar')
    }
  }

  return (<>
    <UserNavBar></UserNavBar>
    <div id="out">
      <div id="bot">
        <div>
          <h1>new account</h1>
          <h7>Sign in to continue.</h7>
        </div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              color: '#black',
              width: 200,
              height: 50,
              borderRadius: 2,
              backgroundColor: "white",
              borderStyle: "double",
              marginTop: '10px'
            },
          }}
        >
          <input
            className='input'
            onChange={(e) => newUser.identity = e.target.value}
            name="identity"
            type="identity"
            placeholder="identity" required
          ></input>
          <input
            className='input'
            onChange={(e) => newUser.name = e.target.value}
            name="Name"
            type="text"
            placeholder="name" required
          ></input>
          <input
            className='input'
            onChange={(e) => newUser.password = e.target.value}
            name="password"
            type="password"
            placeholder="password" required
          ></input>
          <input
            className='input'
            onChange={(e) => newUser.email = e.target.value}
            name="email"
            type="email"
            placeholder="name@gmail.com" required
          ></input>
          <input
            className='input'
            onChange={(e) => newUser.phone = e.target.value}
            name="Phone"
            type="number"
            placeholder="0527111111" required
          ></input>
          <Button variant='Signin' onClick={log}>signIn</Button>
        </Box>
      </div></div></>
  );
}


