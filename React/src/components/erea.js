import { React, useEffect } from "react"
import { useDispatch, useSelector, } from "react-redux"
import { GetAllApartments } from "../features/Apartmen/ApartmentApi";
import { Button, ButtonGroup, Box } from '@mui/material';
import ApartmentNavBar from "./ApartmentNavBar";
import '../styles/UserNavBar.scss';
import { useNavigate } from "react-router-dom";
import '../styles/UserNavBar.scss'

const LookEreas = () => {
  const navigat = useNavigate()
  useEffect(() => {
    fetchData()
  }, [])
  const dispatch = useDispatch()
  const fetchData = async () => {
    await dispatch(GetAllApartments());
  }
  const arrApartmentsToDisplay = useSelector(x => x.apartment.arrApartments)
  console.log(arrApartmentsToDisplay)
  const temp = new Set(arrApartmentsToDisplay.map(x => x.erea))
  let ereas = Array.from(temp);
  return (<>
    <ApartmentNavBar></ApartmentNavBar>
    <h1>choose erea:</h1>
    <div id="out">
      <div id="bot">
        {ereas.map(x => <Box
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
          <div >
            <ButtonGroup variant="text" aria-label="Basic button group">
              <Button id="aaa"
                onClick={() => navigat(`/ListApartment/${'erea'}/${0}/${x}/${0}/${0}`)}>{x}</Button>
            </ButtonGroup>
          </div>
        </Box>
        )}</div></div></>)
}
export default LookEreas