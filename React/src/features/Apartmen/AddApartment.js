import React from "react";
import ApartmentNavBar from "../../components/ApartmentNavBar";
import { useDispatch } from "react-redux";
import { fetchAddApartment } from "./ApartmentSlice";
import { useNavigate } from "react-router-dom";

const Add = () => {
  let newApartment = {
    id: 0,
    address: "",
    name: "",
    description: "",
    numOfBeds: 0,
    status: false,
    image: "",
    categoryId: 0,
    erea: ""
  }

  const navigat = useNavigate(),dispatch = useDispatch()
  const save = async () => {
    newApartment.status = newApartment.status == "true"
    console.log({ newApartment });
    dispatch(await fetchAddApartment(newApartment))
    navigat(`/ListApartment/${0}/${0}/${0}/${0}/${0}`)
  }

  return (<>
    <ApartmentNavBar></ApartmentNavBar>
    <h1>Add Apartment</h1>
    <br></br>
    <input type="text" placeholder={"name"} onBlur={(e) => newApartment.name = e.target.value}></input>
    <br></br>
    <input type="text" placeholder={"address"} onBlur={(e) => newApartment.address = e.target.value}></input>
    <br></br>
    <input type="text" placeholder={"descripition"} onBlur={(e) => newApartment.description = e.target.value}></input>
    <br></br>
    <input type="number" placeholder={"numOfBeds"} onBlur={(e) => newApartment.numOfBeds = parseInt(e.target.value)}></input>
    <br></br>
    <input type="text" placeholder={"status"} onBlur={(e) => newApartment.status = e.target.value}></input>
    <br></br>
    <input type="text" placeholder={"image"} onBlur={(e) => newApartment.image = e.target.value}></input>
    <br></br>
    <input type="text" placeholder={"categoryId"} onBlur={(e) => newApartment.categoryId = parseInt(e.target.value)}></input>
    <br></br>
    <input type="text" placeholder={"erea"} onBlur={(e) => newApartment.erea = e.target.value}></input>
    <br></br>
    <input type='button' value='save' onClick={save}></input>
  </>)
}
export default Add