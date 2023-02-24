import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Places } from "./User/Places";
import { IndividualFilteredPlace } from "./User/IndividualFilteredPlaces";
import { auth, fs } from "../Config/Config";
export const Home = (props) => {
  // getting current user uid
  function GetUserUid() {
    const [uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
    return uid;
  }

  const uid = GetUserUid();

  // getting current user function
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              //doc er modde user er id asbe , etake get korbe ... tarpor shapshot variable e user esejabe na hole catch e chole jabe
              setUser(snapshot.data().FullName);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }

  const user = GetCurrentUser();
  // console.log(user);

  // state of products
  const [products, setProducts] = useState([]);

  // getting products function
  const getProducts = async () => {
    const products = await fs.collection("Places").get();
    const productsArray = [];
    for (var snap of products.docs) {
      var data = snap.data();
      data.ID = snap.id;
      productsArray.push({
        ...data,
      });
      if (productsArray.length === products.docs.length) {
        setProducts(productsArray);
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  // globl variable
  let Product;

  // categories list rendering using span tag
  const [spans] = useState([
    { id: "lake", text: "Lake" },
    { id: "Mountain", text: "Mountain" },
    { id: "sea_beach", text: "Sea beach" },
    { id: "old_places", text: "Old place" },
    { id: "forest", text: "Forest" },
    // {id: 'Park', text: 'Park'},
  ]);

  // active class state
  const [active, setActive] = useState("");

  // category state
  const [category, setCategory] = useState("");

  // handle change ... it will set category and active states
  const handleChange = (individualSpan) => {
    setActive(individualSpan.id);
    setCategory(individualSpan.text);
    filterFunction(individualSpan.text);
  };

  // filtered products state
  const [filteredProducts, setFilteredProducts] = useState([]);

  // filter function
  const filterFunction = (text) => {
    if (products.length > 1) {
      const filter = products.filter((product) => product.category === text);
      setFilteredProducts(filter);
    } else {
      console.log("no products to filter");
    }
  };

  // return to all products
  const returntoAllProducts = () => {
    setActive("");
    setCategory("");
    setFilteredProducts([]);
  };

  return (
    <div>
      <Navbar user={user} />
      <br></br>
      <div className="container-fluid filter-products-main-box">
        <div className="filter-box">
          <h6 className="p_catagory">Select Your Suiteble place</h6>
          <br />
          {spans.map((individualSpan, index) => (
            <span
              style={{ fontWeight: "bold" }}
              className="filterPlace"
              key={index}
              id={individualSpan.id}
              onClick={() => handleChange(individualSpan)}
            >
              {individualSpan.text}
            </span>

            // <span style={{fontWeight:"bold", }} className='filterPlace' key={index} id={individualSpan.id}
            // onClick={()=>handleChange(individualSpan)}
            // >{individualSpan.text}
            // </span>
          ))}
        </div>
        {filteredProducts.length > 0 && (
          <div className="my-products">
            <h1 className="text-center">{category}</h1>
            <a href="javascript:void(0)" onClick={returntoAllProducts}>
              Return to All places
            </a>
            <div className="products-box">
              {filteredProducts.map((individualFilteredProduct) => (
                <IndividualFilteredPlace
                  key={individualFilteredProduct.ID}
                  individualFilteredProduct={individualFilteredProduct}
                />
              ))}
            </div>
          </div>
        )}
        {filteredProducts.length < 1 && (
          <>
            {products.length > 0 && (
              <div className="my-products">
                <h1 style={{ color: "red" }} className="text-center">
                  All Places
                </h1>
                <div className="products-box">
                  <Places products={products} />
                </div>
              </div>
            )}
            {products.length < 1 && (
              <div style={{ color: "red" }} className="my-products please-wait">
                Please wait...
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
