//user
import React from 'react'
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const IndividualPlace = ({individualProduct}) => {
    const navigate = useNavigate(); 
  
    const view_cost=()=>{
          navigate(
            '/Information' ,
            {state :
              {sheet_link : individualProduct.sheet_link }
            }
            
          );
    }
    
    return (
      <div style={{margin:"10px"}}>
      <Card style={{ width: '18rem' }}>      
       <a href={individualProduct.map_link}><Card.Img variant="top" src={individualProduct.url} alt="product-img" />  </a>
       <Card.Body>
       <a style={{textDecoration: "none"}} href={individualProduct.web_link}> <Card.Title >{individualProduct.title}</Card.Title></a>
        <Card.Text>{individualProduct.description}</Card.Text>
        <Button variant="primary" onClick={view_cost}>View cost </Button>
      </Card.Body>
      </Card>
      </div> 
    )
}