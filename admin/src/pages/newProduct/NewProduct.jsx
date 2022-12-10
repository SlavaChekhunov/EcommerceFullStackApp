import { useState } from "react";
import "./newProduct.css";
import { useDispatch } from "react-redux";
import {supabase} from "../../suparbase";
import {addProduct} from "../../redux/apiCalls";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs(prev=>{
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  const handleCategories = async (e) => {
    setCategory(e.target.value.split(','))
  }

  const handleAddProduct = async (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name;
    
    const { data, error } = await supabase.storage
      .from("images")
      .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

        console.log(data)

    if(data) {
      const product = {...inputs, image: data.path, categories: category};
      addProduct(product, dispatch)
    }

    if(error) {
      console.log(error)
    }
    }
    
    return (
      <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" placeholder="$100" name="price" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input
            type="text"
            placeholder="Jeans, t-shirts"
            onChange={handleCategories}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select onChange={handleChange} name="inStock">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleAddProduct}>Create</button>
      </form>
    </div>
  );
}
