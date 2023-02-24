import { useNavigate } from 'react-router-dom';
import { IndividualProduct } from './Admin/IndividualPlace';
import Modal from 'react-bootstrap/Modal';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table';
import Street from './Street';


const Information = () => {
  const [person, setPerson]=useState(0);
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showTrain, setShowTrain] = useState(false);
  const handleCloseTrain = () => setShowTrain(false);
  const handleShowTrain = () => setShowTrain(true);
  // modal

  const location = useLocation();

  const collapse_open_function = (open, button_index) => {
      
        setOpen(!open);
        
  }

  const getData = async () => {
    try {
      const res = await fetch(
        location.state.sheet_link
        //  "https://sheet.best/api/sheets/4a4681c3-0c66-42c7-9049-1b8eb33c5ee2"
      );  
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };
      const navigate = useNavigate(); 

      const hotel_cost=()=>{
          navigate(
            "/Hotel_Info" ,
            {state :
              {sheet_link : location.state.sheet_link }
            }
            
          );
    }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{backgroundColor:'white', padding: "40px"}}>
      person:
     <input type="number" id="person" className='form-control' required
     onChange={(e)=>setPerson(e.target.value)} value={person}></input>

     <br></br>
     <br></br>
     <br></br>
     <h2 style={{color:"white",fontWeight:"bold",textShadow:"inherit",textAlign:"center",border:"2px solid red",borderRadius:"10px",backgroundColor:"ButtonText"}}>Transport Information </h2>

     <br></br>
     <br></br>


      {data?.map((item, i) => (
        <div id={`heading${i}`} key={i} >
          <br/>                        
        <Button
        style={{backgrondColor:"white", width: "100%"}}
        id={`roni${i}`}
        onClick={() => collapse_open_function(open, i)}
        aria-controls="example-collapse-text"
        // style={{backgroundColor:"red",alignItems:"center"}}
        aria-expanded={open}
        >
        {item.Place} 
      </Button>
      <Collapse  in={open} style={{backgrondColor: "pink"}}>
          
      <div style={{margin:"10px"}}>
      <Card style={{ width: '' }}>      
       <Card.Body>
        <Card.Title >{item.Heading}</Card.Title>
        <Card.Text>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Info</th>
          <th><a style={{textDecoration: "none"}} href={item.bus_distance}> Bus  </a></th>
          <th><a style={{textDecoration: "none"}} href={item.train_distance}> Train  </a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>price</td>
          <td>{item.Bus_max} to {item.Bus_min}</td>
          <td>{item.Train_max} to {item.Train_min}</td>
        </tr>
        <tr>
          <td>total</td>
          <td>{item.Bus_max*person} to {item.Bus_min*person}</td>
          <td>{item.Train_max*person} to {item.Train_min*person}</td>
        </tr>

        <tr>
          <td>Street</td>
          <td><Button onClick={handleShow}>{item.Street_cost_bus_max*person } </Button></td>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>How to go after taking off the bus</Modal.Title>
          </Modal.Header>
          <Modal.Body>{item.Street_Bus}. <b/>So total taka for {person} persons is {person*item.Street_cost_bus_max} taka</Modal.Body>                 
          </Modal>

        
          <td><Button onClick={handleShowTrain}>{item.Street_cost_train_max*person}</Button></td>
          <Modal show={showTrain} onHide={handleCloseTrain}>
          <Modal.Header closeButton>
          <Modal.Title>How to go</Modal.Title>
          </Modal.Header>
          <Modal.Body>{item.Street_Train}</Modal.Body>                 
          </Modal>
          </tr>
          <tr>

          <td>total</td>
          <td>{parseInt(item.Bus_max  ) + parseInt(item.Street_cost_bus_max  )} to {parseInt(item.Bus_min)+parseInt(item.Street_cost_bus_max)}</td>
          <td>{parseInt(item.Train_max) + parseInt(item.Street_cost_train_max)} to {parseInt(item.Train_min)+parseInt(item.Street_cost_train_max)}</td>
        </tr>

      </tbody>

    </Table>
     <Button variant="primary" style={{width: "40%", marginLeft:"30%", marginRight:"30%", backgroundColor: "pink", boxShadow: "revert", padding: "3px", color: "Black"}} onClick={hotel_cost}>Hotel cost </Button>

        </Card.Text>
      </Card.Body>
      </Card>
      </div> 
      </Collapse>
         
        </div>
      ))}

    </div>
  );
};

export default Information;