import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss"
import { useState ,useEffect} from "react";
import axios from "axios";


function Containers() {
    const dispatch = useDispatch();
    const containers = useSelector((state) => state.containers);
    const [selectedContainer, setSelectedContainer] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    const handleDeleteClick =(container) => { 
    
      setSelectedContainer(container.number);
      setShowModal(true);
    };
  
    const handleConfirmDelete =async (selectedContainer) => {
      await axios.delete(`https://crudcrud.com/api/930f836115ae432ead0852485b104105/containers/${selectedContainer}`);
      dispatch({ type: "DELETE_CONTAINER", payload: selectedContainer});
      setShowModal(false);
    };
  
    const handleCancelDelete = () => {
      setSelectedContainer(null);
      setShowModal(false);
    };
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get("https://crudcrud.com/api/930f836115ae432ead0852485b104105/containers");
        dispatch({ type: "SET_CONTAINERS", payload: response.data });
      };
      fetchData();
    }, [dispatch]);
  
    return (
      <div className="containers">
       
        <div className="div-container">
          {containers.map((container, index) => (
            <div
              key={index}
              className="div-style"
              style={{ backgroundColor: container.backgroundColor,}}
            >{container.number}
             <button className="delete-button" onClick={() => handleDeleteClick(container)}>x</button>
            </div>
          ))}
        </div>
        <div className="div-container2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam non quam lacus suspendisse. Arcu risus quis varius quam quisque. Sed sed risus pretium quam. Nec ullamcorper sit amet risus nullam eget felis eget. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Eget lorem dolor sed viverra ipsum nunc. Lacus viverra vitae congue eu consequat ac felis donec et. Consequat ac felis donec et odio pellentesque diam volutpat. Duis ultricies lacus sed turpis tincidunt id aliquet. Interdum consectetur libero id faucibus. Arcu dui vivamus arcu felis bibendum ut tristique et. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Dignissim convallis aenean et tortor at risus viverra. Pretium fusce id velit ut tortor pretium. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Ac felis donec et odio pellentesque diam volutpat commodo sed. Viverra orci sagittis eu volutpat odio facilisis. Gravida rutrum quisque non tellus orci ac. Augue neque gravida in fermentum et sollicitudin. Nunc eget lorem dolor sed viverra. Pellentesque eu tincidunt tortor aliquam. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Congue quisque egestas diam in arcu cursus euismod.
        </div>
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete container {selectedContainer}?</p>
            <div className="button-group">
              <button className="confirm-button" onClick={handleConfirmDelete}>Yes</button>
              <button className="cancel-button" onClick={handleCancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
      </div>
    );
  }
  export default Containers