import React from 'react';
import Table from 'react-bootstrap/Table';
import {FormattedMessage} from 'react-intl';

import Band from "./band";



const { useEffect, useState } = require("react");

function Spaces() {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json"
    fetch(URL).then(data => data.json()).then(data => {
      setBands(data);
    })
  }, []);



  return (
    <div >
      
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> <FormattedMessage id="Name"/></th>
          <th> <FormattedMessage id="Country"/></th>
          <th> <FormattedMessage id="Genre"/></th>
          <th> <FormattedMessage id="Foundation"/></th>
        </tr>
      </thead>
        
        {bands.map((band) => (
         <tbody key={band.id}  >        
        <Band band={band}/></tbody> 
        ))}
        
       
    </Table>


    </div>
  );
}

export default Spaces;