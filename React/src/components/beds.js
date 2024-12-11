import React from "react"
import ApartmentNavBar from "./ApartmentNavBar";
import '../styles/UserNavBar.scss';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Beds = () => {

  const { register, handleSubmit} = useForm({
    mode: 'onBlur'
  })
  const navigat = useNavigate()
  const isadmin = async (data) => {
    navigat(`/ListApartment/${'beds'}/${0}/${0}/${data.min}/${data.max}`)
  }

  return (<>
    <ApartmentNavBar></ApartmentNavBar>
    <h1>choose num of beds:</h1>
    <div id="out">
      <div id="bot">
        <form onSubmit={handleSubmit((data) => isadmin(data))}> <div>
          <input type="number" id="beds" placeholder="min of beds" {...register('min')}></input>
        </div>
          <div>
            <input type="number" id="beds" placeholder="max of beds" {...register('max')}></input>
          </div>
          <input type='submit' value='save' ></input></form>
      </div></div></>)
}
export default Beds