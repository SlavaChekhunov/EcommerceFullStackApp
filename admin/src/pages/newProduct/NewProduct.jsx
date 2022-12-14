import { useState } from "react";
import "./newProduct.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/apiCalls";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCategories = async (e) => {
    setCategory(e.target.value.split(","));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;

    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            image: downloadURL,
            categories: category,
          };
          addProduct(product, dispatch);
        });
      }
    );
    navigate("/products");
  };

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newProduct">
          <h1 className="addProductTitle">New Product</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Image</label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
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
              <input
                type="number"
                placeholder="$100"
                name="price"
                onChange={handleChange}
              />
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
            <div className="addProductItem">
              <label>Size</label>
              <select onChange={handleChange} name="size">
                <option >24"</option>
                <option >27"</option>
                <option >32"</option>
              </select>
            </div>
            <div className="addProductItem">
              <label>Color</label>
              <select onChange={handleChange} name="color">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="black">black</option>
                <option value="white">white</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
              </select>
            </div>
            <button className="addProductButton" onClick={handleAddProduct}>
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
