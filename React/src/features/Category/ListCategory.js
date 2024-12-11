import React from "react";
import Category from "./Category";
import { useSelector } from "react-redux"
import ApartmentNavBar from '../../components/ApartmentNavBar'
import '../../styles/UserNavBar.scss'
export default function ListCategory() {

    const arrCategoryToDisplay = useSelector(x => x.category.arrCategories)
    return (<>
        <ApartmentNavBar></ApartmentNavBar>
        <h1>choose category:</h1>
        <div id="out">
            <div id="bot">
                <div >
                    {arrCategoryToDisplay.map(x => <Category OneCategory={x}></Category>)}
                </div>
            </div></div> </>)
}