import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";



const { useEffect, useState } = require("react");

function Band(props) {


  return (
      <tr>
     <td>{props.band.id}</td>
     <td>
     <Link to={"/bands/"+ props.band.id}>{props.band.name}</Link>

     </td>
     <td>{props.band.country}</td>
     <td>{props.band.genre}</td>
     <td>{props.band.foundation_year}</td>

     </tr>
  );
}

export default Band;