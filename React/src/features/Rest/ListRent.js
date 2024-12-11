import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import '../../styles/UserNavBar.scss'
import { GetAllRents } from "./RentApi";
import Rent from "./Rent";
import ApartmentNavBar from "../../components/ApartmentNavBar";

export default function ListRents() {
    const dispatch = useDispatch()
    let currentRent = useSelector(r => r.rent.currentRent)
    useEffect(() => {
        dispatch(GetAllRents());
    }, [currentRent])
    const arrRentsToDisplay = useSelector(x => x.rent.arrRents)
    console.log({ arrRentsToDisplay })
    return (<>
        <ApartmentNavBar></ApartmentNavBar>
        <h1 color="#59c7dd">List Rents</h1>
        <div id="apartment">
            {arrRentsToDisplay.map(x => <Rent OneRent={x}></Rent>)}
        </div>
    </>)
}





