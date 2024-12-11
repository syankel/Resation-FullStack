
import { React, useEffect } from 'react';
import { Box, TextField } from '@mui/material';
import UserNavBar from '../components/UserNavBar';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux"
import { setIsAdmin, setIsUser } from '../features/User/userSlice';
import { useNavigate } from "react-router-dom";
import { GetAllUsers } from '../features/User/userApi';
import '../styles/UserNavBar.scss'

const SignIn = () => {
  const dis = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  })
  const navigat = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetAllUsers());
  }, [])
  const arrUserToDisplay = useSelector(x => x.user.arrUsers)
  const name = useSelector(x => x.user.name)
  const password = useSelector(x => x.user.password)
  const isadmin = async (data) => {
    if (data.password == password && data.name == name)
      await dis(setIsAdmin(true))
    else
      await dis(setIsAdmin(false))
    const user = arrUserToDisplay.filter(x => x.name === data.name)
    if (user.length == 0 || user[0].password != data.password)
      await dis(setIsUser(false))
    else {
      await dis(setIsUser(true))
    }
    navigat(`/ListApartment/${0}/${0}/${0}/${0}/${0}`)
  }
  return (
    <>
      <UserNavBar></UserNavBar>
      <div id="out">
        <div id="bot">
          <h1>enter</h1>
          <form
            onSubmit={handleSubmit((data) => isadmin(data))}
          >
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-search"
                  label="Name"
                  type="search"{...register('name', { required: true })} />
                {errors.name && <p>name is required.</p>}
                <br /><br />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  {...register('password', { required: true })} />
                {errors.password && <p>password is required.</p>}
              </div>
            </Box>
            <br />
            <input type='submit' value='save' ></input></form>
        </div>
      </div>
    </>
  )
}
export default SignIn

