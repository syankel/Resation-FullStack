import React from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import rest from '../img/rest.png'
import { useNavigate } from "react-router-dom";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import UndoIcon from '@mui/icons-material/Undo';
import HotelIcon from '@mui/icons-material/Hotel';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { useSelector } from "react-redux"
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import GroupIcon from '@mui/icons-material/Group';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

const ApartmentNavBar = () => {
    const navigat = useNavigate(), isadmin = useSelector(x => x.user.isAdmin)
    return (
        <div id="shadow">
            <img
                src={rest}
                loading="lazy"
                width="300px"
                height="150px"
                alt=""
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <div >
                    <ButtonGroup variant="text" aria-label="Basic button group" Box="#black" color='inherit'>
                        <Button className="linkTop" onClick={() => navigat('/logout')}> <UndoIcon sx={{ mr: 1 }}></UndoIcon>log out</Button>
                        <Button className="linkTop" onClick={() => navigat('/userNavBar')} ><UndoIcon sx={{ mr: 1 }}></UndoIcon>back</Button>
                        <Button className="linkTop" onClick={() => navigat(`/ListApartment/${0}/${0}/${0}/${0}/${0}`)}><AppsIcon sx={{ mr: 1 }}></AppsIcon>all</Button>
                        <Button className="linkTop" onClick={() => navigat('/category')}><WidgetsOutlinedIcon sx={{ mr: 1 }}></WidgetsOutlinedIcon>category</Button>
                        <Button className="linkTop" onClick={() => navigat('/erea')}><LocationOnOutlinedIcon sx={{ mr: 1 }}></LocationOnOutlinedIcon>erea</Button>
                        <Button className="linkTop" onClick={() => navigat('/beds')}> <HotelIcon sx={{ mr: 1 }}> </HotelIcon>beds</Button>
                        <Button className="linkTop" onClick={() => navigat('/custom')}> <PermIdentityOutlinedIcon sx={{ mr: 1 }}> </PermIdentityOutlinedIcon>Custom</Button>
                        <Button className="linkTop" onClick={() => navigat('/add')}> <AddHomeWorkIcon sx={{ mr: 1 }}></AddHomeWorkIcon>add apartment</Button>
                        {isadmin === true && <Button className="linkTop" onClick={() => navigat('/users')}><GroupIcon sx={{ mr: 1 }}></GroupIcon> all users</Button>}
                        {isadmin === true && <Button className="linkTop" onClick={() => navigat('/listRents')}><DensitySmallIcon sx={{ mr: 1 }}></DensitySmallIcon> all rents</Button>}
                    </ButtonGroup>
                </div>
            </Box>
        </div>
    )
}
export default ApartmentNavBar