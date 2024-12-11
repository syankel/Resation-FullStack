import React from "react";
import { Card, CardContent, Collapse, IconButton, Typography, styled } from '@mui/material';
import CabinIcon from '@mui/icons-material/Cabin';

export default function Rent({ OneRent }) {

  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="body2" color="black">
          <CabinIcon color="primary"></CabinIcon>
          <h1>Rent</h1>
          <h3>Apartemntid: {OneRent?.apartemntid}</h3>
          <h3>startRent: </h3><h5>{new Date(OneRent?.startRent).toDateString()}</h5>
          <h3>endRent: </h3><h5>{new Date(OneRent?.endRent).toDateString()}</h5>
        </Typography>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      </Collapse>
    </Card>
  );
}