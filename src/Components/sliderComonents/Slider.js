import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import sliderImage from "./sliderImage";
import "./slider.css";
import {useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const navigate = useNavigate();

  return (
    <div className="slider-container">

      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
     
      <div className="one">
      <h2 className="vromon"><strong>AnandaVromon:</strong></h2>
      <hr></hr>
      <h2 style={{color:"tomato", fontWeight:"bold"}}>Welcome to the Ananda Vromon.</h2>
      <p class="article">Ananda Vromon is a one kind of app that will make your journey plane more standard </p>

      <br></br>
      <hr></hr>

      <h2 className="vromon"><strong>Why Use it:</strong></h2>
      <hr></hr>
      <p class="article">* Category wise place selection </p>
      <p class="article">* Can plan your budget as the number of person</p>
      <p class="article">* can see the transportation cost from anywhere</p>
      <p class="article">* can see the hotel cost and many others fasciitis you can get</p>
      
      </div>

      <div style={{backgroundColor: "", height: "70px"}}>        
        <button className="goToExplore" onClick={()=>navigate("/home")}>Go to explore</button>  

        {/* <iframe src="https://platform.twitter.com/widgets/tweet_button.html"></iframe> */}
      </div>
    </div>

    
  );

  
  
}

export default Slider;
//style={{hover: "background: black" ,margin:"5%", border:"none",borderRadius:"50px",color:"white",backgroundColor:"red",padding:"0px",fontWeight:"bold"}} onClick={()=>navigate("/home")}