import React from 'react';
import { CovidCard } from './CovidCard/CovidCard'
import { CountryPicker } from './CountryPicker/CountryPicker'
import { CovidChart } from './CovidChart/CovidChart'
import {MDBRow, MDBCol } from "mdbreact";

export const Covid = ({ handleChange, data, country }) => (
  <MDBRow className = "mt-3">
  
    <MDBCol md="8" > 
        <CountryPicker handleChange={handleChange} /> 
        <CovidChart data={data} country={country} />   
    </MDBCol>

    <MDBCol md="4"> 
       <CovidCard data = {data} />
    </MDBCol>
  
  </MDBRow>

)
