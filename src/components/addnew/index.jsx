import React from "react";
import "./style.scss"
import {useDispatch} from "react-redux";
import axios from "axios";

function randomRGB() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  }
function Button() {
    const dispatch = useDispatch();
  
    const handleAdd = async () => {
      const newContainer = {
        backgroundColor: randomRGB(),
        number: Math.floor(Math.random() * 1000) + 1,
      };
       await axios.post("https://crudcrud.com/api/930f836115ae432ead0852485b104105/containers", newContainer);
      dispatch({ type: "ADD_CONTAINER", payload: newContainer });
     
    };
  
    return (
      <header>
        <button className="button-add" onClick={handleAdd}>
          Add New
        </button>
      </header>
    );
  }
  export default Button