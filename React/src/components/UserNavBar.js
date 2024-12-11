
import React from "react";
import '../styles/UserNavBar.scss';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import rest from '../img/rest.png'
import HeadsetIcon from '@mui/icons-material/Headset';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
import DeckIcon from '@mui/icons-material/Deck';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import UndoIcon from '@mui/icons-material/Undo';

const UserNavBar = () => {
  const navigat = useNavigate()

  return (<><div id='shadow'>
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
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button className="linkTop" onClick={() => navigat('/logout')}> <UndoIcon sx={{ mr: 1 }}></UndoIcon>log out</Button>
          <Button className="linkTop" onClick={() => navigat('/about')} color="inherit"><HeadsetIcon sx={{ mr: 1 }}></HeadsetIcon>About</Button>
          <Button className="linkTop" onClick={() => navigat(`/ListApartment/${0}/${0}/${0}/${0}/${0}`)} color="inherit"><DeckIcon sx={{ mr: 1 }}></DeckIcon>dream vacation</Button>
          <Button className="linkTop" onClick={() => navigat('/signin')} color="inherit"><LoginIcon sx={{ mr: 1 }}></LoginIcon>enter</Button>
          <Button className="linkTop" onClick={() => navigat('/signup')} color="inherit"> <DataSaverOnIcon sx={{ mr: 1 }}></DataSaverOnIcon>add account</Button>
        </ButtonGroup>
      </div>
    </Box>

  </div>
  </>
  )
}
export default UserNavBar
