import React from "react"
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import { useSelector } from "react-redux"
import { GetAllCategories } from '../features/Category/CategoryApi'
import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { GetAllApartments } from "../features/Apartmen/ApartmentApi";
import ApartmentNavBar from "./ApartmentNavBar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import '../styles/UserNavBar.scss'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// import {toArray} from 
const Custom = () => {


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetAllCategories());
  }, [])
  useEffect(() => {
    dispatch(GetAllApartments());
  }, [])
 
const navigat = useNavigate()
const { register, handleSubmit, getValues, formState: { errors, dirtyFields, isValid } } = useForm({
  mode: 'onBlur'
}) 

const log = async (data) => {
  navigat(`/ListApartment/${'custom'}/${data.category}/${data.erea}/${data.min}/${data.max}`)
}

  const arrCategoryToDisplay = useSelector(x => x.category.arrCategories)
  const categories = arrCategoryToDisplay.map(x => x.name)
  const arrApartmentsToDisplay = useSelector(x => x.apartment.arrApartments)
  const temp = new Set(arrApartmentsToDisplay.map(x => x.erea))
  let ereas = Array.from(temp);

  console.log(ereas)
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  
  return (<>
   <ApartmentNavBar></ApartmentNavBar><h1>YOUR CUSTOM VOCATION</h1>
  <div id="out">
 <div id="bot">
   <form  onSubmit={handleSubmit((data) => log(data))}> 
   
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: 250 ,marginTop:3 }, }}
      noValidate
      autoComplete="off"
      
    >
      <div>
        <TextField
          id="max"
          label="category"
          type="text"
          placeholder={categories.map(x=>x)}
          autoComplete="current-password"
          {...register('category',{ required: true })}        />
      </div>
      <div>
        <TextField
          id="max"
          label="erea"
          type="text"
          placeholder={ereas.map(x=>x)}
          autoComplete="current-password"
          {...register('erea',{ required: true })} 
                 />
      </div>
      
      <div>
        <TextField
          id="min"
          label="Min Beds"
          type="number" 
          {...register('min',{ required: true })}          />
         
      </div>
      <div>
        <TextField
          id="max"
        
          label="Max Beds"
          type="number"
          autoComplete="current-password"
          {...register('max',{ required: true })}        />
      </div>
    </Box>
    <div>
        {/* <TextField
        width="100px"
          id="outlined-password-input"
          label="save"
          type="submit"
          autoComplete="current-password"
          onClick={save}
        
        /> */}
        <input type="submit" value="save" width="100px"  />
      </div></form>
{/* 
<Link to="/ListApartment" ></Link><br></br> */}


 </div></div> </>)
}
export default Custom