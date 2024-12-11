import { React, useEffect } from "react"
import { useDispatch, useSelector, } from "react-redux"
import Category from "../features/Category/Category";
import { GetAllCategories } from "../features/Category/CategoryApi";

const LookCategories = () => {

    useEffect(() => {
        fetchData()
    }, [])
    const dispatch = useDispatch()
    const fetchData = async () => {
        await dispatch(GetAllCategories());
    }
    const arrCategoryToDisplay = useSelector(x => x.category.arrCategories)
    return (
        <>
            {arrCategoryToDisplay.map(x => {
                <Category OneCategory={x}></Category>
            })}</>)
}
export default LookCategories