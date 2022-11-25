import { useEffect, useState } from "react"
import axios from "axios"
import Product from "./components/Product"


const Data = ({stuff}) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios({
          url: "https://fakestoreapi.com/products/category/women's clothing",
          method: "GET",
          dataResponse: "JSON",
        })
          .then((response) => {
            setData(response.data)
          })
          .catch((error) => {
            console.error(error)
          })
          .finally(() => {setLoading(false)});

    }, [])

  return (
    <div>

      {loading && (<div>
          {""}
          <h1>Loading...</h1>
        </div>
        )}
    

{data.map((product)=> (
        <div key={(product.id)}>
        <img src={product.image} alt="mens clothing"/>
        </div>
        ))}  
       
   
    </div>
    );
}

export default Data