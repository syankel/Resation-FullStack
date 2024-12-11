import React from "react";
import '../../styles/UserNavBar.scss';
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Box } from '@mui/material';

export default function Category({ OneCategory }) {
  const navigat = useNavigate()

  return (<>
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
          marginTop: '52px'
        },
      }}
    >   <ButtonGroup variant="text" aria-label="Basic button group">
        <Button id="aaa"
          onClick={() => navigat(`/ListApartment/${'category'}/${OneCategory.id}/${0}/${0}/${0}`)}>{OneCategory.name}</Button>
      </ButtonGroup>
    </Box>
  </>)
}