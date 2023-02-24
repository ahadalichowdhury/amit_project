import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import {db} from '../../Config/Config';
import {updateDoc, doc} from "firebase/firestore";

const EditForm = ({closeEvent, fid}) => {
  const id = fid.id;
  const [title, setTitle]=useState(fid.title);
  const [description, setDescription]=useState(fid.description);
  const [category, setCategory]=useState(fid.category);
  const [web_link, setWeb_link]=useState(fid.web_link);
  const [sheet_link, setSheet_link]=useState(fid.sheet_link);
  const [map_link, setMap_link] = useState(fid.map_link);  //link ke declear kora hoilo
  const [information1, setInformation1]=useState(fid.information1);


const handleUpdatePlaceInformation = async (e) => {
  e.preventDefault()
  const taskDocRef = doc(db, 'Places', id)
  try{
    await updateDoc(taskDocRef, {
      title: title,
      description: description,
            category: category,
            web_link: web_link,
            sheet_link: sheet_link,
            map_link: map_link,
            information1: information1
    })
  } catch (err) {
    alert(err)
    console.log(err)
  }    
}

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title style={{color:"tomato"}}>Edit Place Informations</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <form autoComplete="off" className='form-group' onSubmit={handleUpdatePlaceInformation }> 
          {/* onSubmit={handleAddProducts} */}
                <label style={{color:"blue"}}>Visiting place</label>
                <input style={{backgroundColor:"#BFA047", color:"white",borderRadius:"50px" }}type="text" className='form-control' 
                onChange={(e)=>setTitle(e.target.value)} value={title}></input>
                <br></br>
                <label>Place Description</label>
                <input style={{backgroundColor:"#BFA047", color:"white",borderRadius:"50px" }}type="text" className='form-control' 
                onChange={(e)=>setDescription(e.target.value)} value={description}></input>
                <br></br>
                
                <label >Spot Category</label>
                <select style={{Color:"BFA047"}} className='form-control' 
                value={category} onChange={(e)=>setCategory(e.target.value)}>                                    
                    <option value="">Select spot Category</option>                   
                    <option>Lake</option>
                    <option>Mountain</option>                    
                    <option>Sea beach</option>
                    <option>Old place</option>
                    <option>Forest</option>
               
                </select>

                
                <br></br>

                <label>Website Link</label>
                <input style={{backgroundColor:"#BFA047", color:"white", borderRadius:"50px"}} type="text" className='form-control' 
                onChange={(e)=>setWeb_link(e.target.value)} value={web_link}></input>
                <br></br>

                <label>Json Sheet Link</label>
                <input style={{backgroundColor:"#BFA047", color:"white", borderRadius:"50px"}} type="text" className='form-control' 
                onChange={(e)=>setSheet_link(e.target.value)} value={sheet_link}></input>
                <br></br>

                <label>Map Link Link</label>
                <input style={{backgroundColor:"#BFA047", color:"white",borderRadius:"50px"}} type="text" className='form-control' 
                onChange={(e)=>setMap_link(e.target.value)} value={map_link}></input>
                <br></br>

                <label>Sheet link</label>
                <input style={{backgroundColor:"#BFA047", color:"white",borderRadius:"50px" }} type="text" className='form-control' 
                onChange={(e)=>setInformation1(e.target.value)} value={information1}></input>
                

                <br></br>           
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <Button type="submit" className='btn btn-success btn-md'>
                        EDIT
                    </Button>
                </div>

                
            </form>      
        </Modal.Body>
    </div>
  )
}

export default EditForm