import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState([]);

  const handleChange = (e) => {
    setInputs(prev=>{
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  const handleCategories = (e) => {
    setCategory(e.target.value.split(','))
  }

  const handleAddProduct = (e) => {
    e.preventDefault()
    //upload file and call apiCalls
    //gives the file a unique name based on the timestamp
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const StorageRef = ref(storage, fileName)

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
