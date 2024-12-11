import { React, useEffect } from "react";
import Apartment from "./Apartment";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import { GetAllApartments } from './ApartmentApi'
import '../../styles/UserNavBar.scss'
import ApartmentNavBar from "../../components/ApartmentNavBar";

export default function ListApartment() {
    let currentApartment = useSelector(r => r.apartment.currentApartment)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAllApartments());
    }, [currentApartment])
    let apartment = useParams();
    let page = apartment.page
    let category = apartment.category
    let erea = apartment.erea
    let minBeds = apartment.minBeds
    let maxBeds = apartment.maxBeds
    if (category == 'vila')
        category = 1
    if (category == 'zimmer')
        category = 2
    if (category == 'hotel')
        category = 3
    if (category == 'suite')
        category = 4
    const arrApartmentToDisplay = useSelector(x => x.apartment.arrApartments)

    return (<>
        <ApartmentNavBar></ApartmentNavBar>
        <h1>LIST APARTMENTS</h1>
        <h3 id="warning"></h3>
        <div id="apartment" >
            {arrApartmentToDisplay.map(x =>
                page == 'category' ?
                    (x.categoryId == category ? <Apartment OneApartment={x}></Apartment> : <></>) :
                    page == 'erea' ?
                        (x.erea == erea ? <Apartment OneApartment={x}></Apartment> : <></>)
                        :
                        page == 'beds' ?
                            (x.numOfBeds >= minBeds ? (x.numOfBeds <= maxBeds ? <Apartment OneApartment={x}></Apartment> : <></>) : <></>) :
                            page == 'custom' ?
                                (x.categoryId == category ? (x.erea == erea ? (x.numOfBeds >= minBeds ? (x.numOfBeds <= maxBeds ? <Apartment OneApartment={x}></Apartment> : <></>) : <></>) : <></>) : <></>) :
                                <Apartment OneApartment={x}></Apartment>

            )
            }
        </div></>)

}




