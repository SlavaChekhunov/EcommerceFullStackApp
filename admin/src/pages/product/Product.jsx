import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethod";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { updateProduct } from "../../redux/apiCalls";

export default function Product() {
  const location = useLocation();
  const dispatch = useDispatch();
  const productId = location.pathname.split("/")[2];
  const [productStats, setProductStats] = useState([]);
  const [category, setCategory] = useState([]);

  //this captures all the title, desc, price etc.
  const [inputs, setInputs] = useState({});
  //this is for the new image upload
  const [file, setFile] = useState(null);

  const product = useSelector((state) =>
  state.product.products.find((product) => product._id === productId)
  );

  //useMemo doesnt mutate our state, months in this case
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
    );
    
    useEffect(() => {
      const getStats = async () => {
        try {
          const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
            return a._id - b._id;
          })
          list.map((item) => {
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  const handleChange = (e) => {
    //take the previous input and return a new one based on the name given
    setInputs(prev=> {
      return {...prev, [e.target.name]:e.target.value }
    })
  };

  const handleCategories = async (e) => {
    setCategory(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    //upload file and update the apiCall
    //how do I update the image inside my storage rather than uploading a new one?
    //fileName just gives a unique name, that doesnt override the previous file even if it has the same name.
    const fileName = new Date().getTime() + file.name;

    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

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
        console.log(error)
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL)
          const updatedProduct = {
            ...inputs,
            image: downloadURL,
            categories: category,
          };
          console.log(updatedProduct)
          updateProduct(productId, updatedProduct, dispatch)
        });
      }
    );

  }


  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproduct">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <div className="productTop">
            <div className="productTopLeft">
              <Chart
                data={productStats}
                dataKey="Sales"
                title="Sales Performance"
              />
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                <img src={product?.image} alt="" className="productInfoImg" />
                <span className="productName">{product?.title}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">{product?._id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">sales:</span>
                  <span className="productInfoValue">5123</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">in stock:</span>
                  <span className="productInfoValue">
                    {product?.inStock.toString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Product Name</label>
                <input
                  type="text"
                  name="title"
                  placeholder={product?.title}
                  onChange={handleChange}
                />
                <label>Product Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder={product?.description}
                  onChange={handleChange}
                />
                <label>Product Categories</label>
                <input
                  type="text"
                  name="category"
                  placeholder={product?.categories}
                  onChange={handleCategories}
                />
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  placeholder={product?.price}
                  onChange={handleChange}
                />
                <label>In Stock</label>
                <select name="inStock" id="idStock" onChange={handleChange}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img
                    src={product?.image}
                    alt=""
                    className="productUploadImg"
                  />
                  <label for="file">
                    <Publish />
                  </label>
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={e=>setFile(e.target.files[0])}
                  />
                </div>
                <button className="productButton" onClick={handleClick}>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
