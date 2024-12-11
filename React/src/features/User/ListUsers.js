import { React, useEffect } from "react";
import User from "./user";
import { useSelector, useDispatch } from "react-redux"
import { GetAllUsers } from './userApi'
import '../../styles/UserNavBar.scss'
import ApartmentNavBar from "../../components/ApartmentNavBar";

export default function ListUsers() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAllUsers());
    }, [])
    const arrUserToDisplay = useSelector(x => x.user.arrUsers)
    return (<>
        <ApartmentNavBar></ApartmentNavBar>
        <h1>List Users</h1>
        <div id="apartment">
            {arrUserToDisplay.map(x => <User OneUser={x}></User>)}
        </div>
    </>)
}




