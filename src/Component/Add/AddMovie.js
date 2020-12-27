import React, { useState } from 'react'
import Modal from 'react-modal'
import './add.css';

Modal.setAppElement('#root')
const AddMovie=({addMovie})=>{
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [name,setName]=useState("");
    const [date,setDate]=useState("");
    const [rating,setRating]=useState(0);
    const [image,setImage]=useState("");
    const [description,setDescription]=useState("");

    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal(){
      setIsOpen(false);
    }
    const handleSubmit=()=>{
    let newMovie={
        image,
        rating,
        name,
        date,
        description,
    };
    addMovie(newMovie);
    setIsOpen(false);
    setName('');
    setDate('');
    setRating('');
    setImage('');
    setDescription('');
    };

    return (
        <div>
        <button className="Add-btn" onClick={openModal}>+</button>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
 
          <h2>Add A Movie</h2>
          
          
          <form className="movieModal">
            <label>Movie Name</label>
            <input type="text" name="name" required value={name} onChange={(e)=>setName(e.target.value)} />
            
            <label>Movie Date</label>
            <input type="text" name="date" required value={date} onChange={(e)=>setDate(e.target.value)} />
            
            <label>Movie Rating</label>
            <input type="number" name="rate" required value={rating} onChange={(e)=>setRating(e.target.value)} />
            
            <label>Movie Image</label>
            <input type="url" name="image" required value={image} onChange={(e)=>setImage(e.target.value)} />
            
            <label>Movie Description</label>
            <textarea type="text" name="description" required value={description} onChange={(e)=>setDescription(e.target.value)} />
          </form>
          <button className="Modal-btn" onClick={handleSubmit}>submit</button>
          <button className="Modal-btn" onClick={closeModal}>close</button>
        </Modal>
      </div>
    );
}
   
export default AddMovie ;