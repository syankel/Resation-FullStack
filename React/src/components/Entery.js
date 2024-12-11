import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rest from '../img/rest.png'
export default function Entery() {

   const navigat = useNavigate()
   setTimeout(welcome, 2000)
   function welcome() {
      navigat('/about')
   }
   return (
      <div>
         <img
            src={rest}
            loading="lazy"
            width="100%"
            height="900px"
            alt=""
         />
      </div>
   )
}