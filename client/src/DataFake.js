import { useEffect, useState } from "react"
import styled from "styled-components";
import Loading from "./components/Loading";
import axios from "axios"

const Data = () => {
  const [loading, setLoading] = useState(true);
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

  return (loading ? <Loading /> : data)
}

export default Data