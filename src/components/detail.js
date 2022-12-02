import { useParams } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";

const { useEffect, useState } = require("react");
export default function Detail() {
 const params = useParams();
 
 const [band, setBands] = useState([]);
   useEffect(()=>{
       const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
       fetch(URL).then(data => data.json()).then(data => {  
        setBands(data.find(band=> band.id==params.bandId))    
    })
   }, [params.bandId]);
   
 return (
     <Row> 
     
        <Col >                
        <Card style={{ width: '18rem'  }} className="text-left">
          <Card.Img variant="top" src={band.image}/>
          <Card.Body>  
            <Card.Title>
            {band.name}
            </Card.Title>
          <Card.Text>
          {band.description}
          </Card.Text>
        </Card.Body>
        </Card>
        </Col>   
        <Col >                
      
        </Col>  
      
      </Row>
     
 );
}