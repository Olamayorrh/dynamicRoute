import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./ProductList.css"

const ProductList = ()=>{

    const [state, setState] = useState([])

 

        useEffect(()=>{
       

        fetch('https://fakestoreapi.com/products')
        .then((response)=> response.json())
        .then((data) =>{
            
            setState(data);
            console.log(data);

        }) 
        .catch(err =>console.log(err))
        }, [state])

     
    return(
        <>
            <div>
            
                    
                        {
                        state.map((product)=>(
                            <div key={product.id} className="product">
                            <div className="image"><img src={product.image}  style={{width:"200px"}}/> </div>  
                           <div className="info"> <h1>{product.category}</h1>
                           <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                            <p>Rating: {product.rating.rate}</p>
                            <Link to={`/product/${product.id}`}><button className="btn">Learn More</button></Link>
                            </div>
                                                   
                        
                            </div>
                            

                        ))
                        }

                        
                   
            
            </div>
        </>
    )
}

export default ProductList;