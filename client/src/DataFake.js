import { useEffect, useState } from "react"
import axios from "axios"

const Data = () => {
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
          <div><img src={product.image} alt="mens clothing"/></div> 
          <h2>{product.title}</h2> 
          <p>{product.description}</p> 
          <p>{product.price}</p> 
        </div>
      ))}  
    </div>
  );
}

export default Data