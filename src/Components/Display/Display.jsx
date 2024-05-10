import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Display.css"


const Display = ()=>{
    

    let {productid} = useParams();
    const [details, setDetails] = useState({})

    useEffect(()=>{
       

    fetch(`https://fakestoreapi.com/products/${productid}`)
    .then((response)=> response.json())
    .then((data) =>{
        
        setDetails(data)

       
        
    }) 
    .catch(err =>console.log(err))
    }, [])
    
    
     
    return(
        <>
            
         <div>
            {   <div className="group">
                <h2>{details.title}</h2>
                <div  className="item">
                <div><img src={details.image} style={{width:'400px'}} id='imgg'/></div>
                <div className="details">
                    <h2>{details.category} <span>{details.id}</span></h2>
                    <p>{details.description}</p>
                    <h5>Price: {details.price}</h5>
                    
                   
                </div>
                </div>
                
                
                </div>
            }
         </div>
           

        </>
    )
}

export default Display;