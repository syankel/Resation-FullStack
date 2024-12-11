import React, { useEffect } from "react";
import {
  Button, Avatar, Typography, Box, DialogTitle, FormControl, DialogContent,
  DialogActions, Dialog, Card, CardHeader, CardContent
} from '@mui/material';
import home from '../../img/home.png'
import '../../styles/UserNavBar.scss'
import { useDispatch, useSelector } from "react-redux";
import { UpdateApartment } from "./ApartmentApi";
import { GetAllCategories } from "../Category/CategoryApi";
import store from '../../features/App/Store'
import { AddRent, GetAllRents } from "../Rest/RentApi";

export default function Apartment({ OneApartment }) {

  useEffect(() => {
    fetchData()
  }, [])

  let updateApartment = {
    id: OneApartment.id,
    address: OneApartment.address,
    name: OneApartment.name,
    description: OneApartment.description,
    numOfBeds: OneApartment.numOfBeds,
    status: OneApartment.status,
    image: OneApartment.image,
    categoryId: OneApartment.categoryId,
    erea: OneApartment.erea
  }
  let newRent = {
    id: 0,
    startRent: '',
    endRent: '',
    apartemntid: 0
  }
  const dispatch = useDispatch()
  const fetchData = async () => {
    await dispatch(GetAllCategories());
  }
  const isadmin = useSelector(x => x.user.isAdmin)
  const isuser = useSelector(x => x.user.isUser)
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const handleClickOpen = () => {
    isuser === false ? document.getElementById('warning').innerText = "you need to add account. press on back and sign up!" :
      setOpen(true);
  };
  const handleUpdateOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const save = () => {
    let arrRent = []
    newRent.apartemntid = OneApartment.id
    dispatch(GetAllRents()).then(() => {
      let rents = store.getState().rent.arrRents
      arrRent = rents.filter(item => {
        if (item.apartemntid == newRent.apartemntid) return { item }
      })
      let flag = false
      arrRent.map((rent) => {
        let sTime = new Date(rent.startRent).setHours(0, 0, 0, 0)
        let eTime = new Date(rent.endRent).setHours(0, 0, 0, 0)
        let newSTARTrent = new Date(newRent.startRent).setHours(0, 0, 0, 0)
        let newENDrent = new Date(newRent.endRent).setHours(0, 0, 0, 0)
        if ((
          (newSTARTrent >= sTime && newSTARTrent <= eTime) ||
          (newSTARTrent <= sTime && newENDrent >= sTime)
        )) {
          flag = true;
        }
      })
      if (flag) {
        document.getElementById('warning2').innerText = "The dates are taken, try choosing another date."
      }
      else {
        dispatch(AddRent(newRent))
        setOpen(false);
      }
    })
  }
  const handleSave = () => {
    setOpen(false);
  };
  const update = async () => {
    updateApartment.status = updateApartment.status === "true"
    console.log({ updateApartment });
    dispatch(UpdateApartment(updateApartment))
    setOpen(false);
  };
  return (
    <div >
      <Card sx={{ maxWidth: 345 }} >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <img
                src={home}
                loading="lazy"
                width="45px"
                height="40px"
                alt=""
              />
            </Avatar>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <h1>{OneApartment?.name}</h1>
            <p>{OneApartment?.id}</p>
            <p>Address: {OneApartment?.address}</p>
            <p>Description: {OneApartment?.description}</p>
            <p>numOfBeds: {OneApartment?.numOfBeds}</p>
            {isadmin === false &&
              <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>rent </Button>
                <Dialog
                  fullWidth={fullWidth}
                  maxWidth={maxWidth}
                  open={open}
                  onClose={handleClose}
                >
                  <DialogTitle textAlign="center"><h1>{OneApartment.name}</h1></DialogTitle>
                  <DialogContent>
                    <Box
                      noValidate
                      component="form"
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: 'auto',
                        width: 'fit-content',
                      }}
                    >
                      <FormControl sx={{ mt: 2, minWidth: 120 }}>
                        <label>start rent</label>
                        <input type="date" onChange={(e) => newRent.startRent = e.target.value}></input>
                        <label>end rent</label>
                        <input type="date" onChange={(e) => newRent.endRent = e.target.value}></input>
                      </FormControl>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <h3 id="warning2"></h3>
                    <Button onClick={handleClose}>back</Button>
                    <Button onClick={save}>save</Button>
                  </DialogActions>
                </Dialog>
              </React.Fragment>
            }
            {isadmin === true &&
              <React.Fragment>
                <Button variant="outlined" onClick={handleUpdateOpen}>update</Button>
                <Dialog
                  fullWidth={fullWidth}
                  maxWidth={maxWidth}
                  open={open}
                  onClose={handleClose}
                >
                  <DialogTitle>Optional sizes</DialogTitle>
                  <DialogContent>
                    <Box
                      noValidate
                      component="form"
                      variant="outlined" sx={{
                        width: '400px', maxWidth: '100%',
                        mx: '10%',
                        my: 4,
                        py: 3,
                        px: 2,
                        gridTemplateColumns: "repeat(minmax(240px,1fr))",
                        gap: 4,
                        display: 'inline-block',
                        bstyle: 'solid'
                      }}>
                      <FormControl sx={{ mt: 2, minWidth: 120 }}>
                        <h1>Update Apartment</h1>
                        <h9>Id:</h9>
                        <input type="text" disabled value={OneApartment?.id} onBlur={(e) => updateApartment.id = e.target.value}></input>
                        <h9>name:</h9>
                        <input type="text" placeholder={OneApartment?.name} onBlur={(e) => updateApartment.name = e.target.value}></input>
                        <h9>address:</h9>
                        <input type="text" placeholder={OneApartment?.address} onBlur={(e) => updateApartment.address = e.target.value}></input>
                        <h9>description:</h9>
                        <input type="text" placeholder={OneApartment?.description} onBlur={(e) => updateApartment.description = e.target.value}></input>
                        <h9>numOfBeds:</h9>
                        <input type="text" placeholder={OneApartment?.numOfBeds} onBlur={(e) => updateApartment.numOfBeds = e.target.value}></input>
                        <h9>status:</h9>
                        <input type="text" placeholder={OneApartment?.status} onBlur={(e) => updateApartment.status = e.target.value}></input>
                        <h9>image:</h9>
                        <input type="text" placeholder={OneApartment?.image} onBlur={(e) => updateApartment.image = e.target.value}></input>
                        <h9>categoryId:</h9>
                        <input type="text" placeholder={OneApartment?.categoryId} onBlur={(e) => updateApartment.categoryId = e.target.value}></input>
                        <h9>area:</h9>
                        <input type="text" placeholder={OneApartment?.erea} onBlur={(e) => updateApartment.erea = e.target.value}></input>
                        <input type='button' value='save' onClick={update}></input>
                      </FormControl>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleSave}>Close</Button>
                  </DialogActions>
                </Dialog>
              </React.Fragment>
            }
          </Typography>
        </CardContent>
      </Card>
    </div>);
}